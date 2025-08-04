import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../Firebase";
import { doc, getDoc } from "firebase/firestore";


export default function Login(){
  const[email,setEmail]=useState("admin@gmail.com");
  const[password,setPassword]=useState("123456");
  const provider = new GoogleAuthProvider();
    const changeEmail=(e)=>{

       setEmail(e.target.value)
    }

  let nav=useNavigate()
  const handleForm=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password).then((userCred)=>{
      console.log("signin",userCred.user.uid);
      // 
      getUserData(userCred.user.uid)
      
     
    })
    .catch((error)=>{
     toast.error(error.message);
    }  )

  }
  const getUserData = async(userId)=>{
    let userDoc = await getDoc(doc(db,"users",userId))
    let userData = userDoc.data()
    sessionStorage.setItem("name", userData?.name)
    sessionStorage.setItem("email",userData?.email)
    sessionStorage.setItem("userType", userData?.userType)
    sessionStorage.setItem("userId", userId)
    sessionStorage.setItem("isLogin", true);
    toast.success("Login successfully");
    if (userData?.userType==1){
      nav("/admin"); 
      
    }
     else if (userData?.userType === 2) {
      nav("/pgowner");
     } else {
     nav("/user"); 
   }
   
  }
  const signInGoogle=()=>{
    let provider=new GoogleAuthProvider()
    signInWithPopup(auth,provider)
    .then((userCred)=>{ 
      console.log(userCred.user.uid);
      toast.success("Login successfully")
      sessionStorage.setItem("isLogin", "true");
      setTimeout(()=>{
        nav("/");
      },2000)
     
    })
    .catch((error)=>{
      toast.error(error.message);
    })
  }
  return(
    <>

 <div className="page-title" style={{background:"url('/assets/img/hero-carousel/hero-carousel-3.jpg')"}} >
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="text-light">Login</h1>
              
            </div>
          </div>
        </div>
      </div>
      {/* <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <Link to={"/"} className="text-light">Home</Link>
            </li>
            <li className="current text-light" >Login</li>
          </ol>
        </div>
      </nav> */}
    </div>

            <div className="container my-5">
              
                 {/* contact form */}
            <div className="row justify-content-center" >

              <div className="col-md-7 mt-5" style={{ boxShadow: "0px 0px 15px gray" }}>
                <div className="w-100 p-md-5 p-4">
                  <h3 className="mb-4 text-center">Login</h3>
                  <form
                    method="POST"
                    id="contactForm"
                    name="contactForm"
                    className="contactForm"
                    onSubmit={handleForm}
                  >
                    <div className="row">
                   
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={changeEmail}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="subject">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="subject"
                            id="subject"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>{
                              setPassword(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                   
                      <div className="col-md-12">
                        <div className="form-group text-center">
                          <input
                            type="submit"
                            defaultValue="Submit"
                            className="btn btn-primary my-2"
                          />
                          <div className="submitting" />
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="text-center">
              <button type="button " onClick={signInGoogle} className="btn btn-danger my-2"> 
             <i class="bi bi-google"> Sign In With google</i>
                  </button>
                  </div>
                  {/* {email} */}
                  <div>Don't have an account? <Link to={"/register"}>Register Here!</Link></div>
                
                </div>
               </div>
              
             </div>
            </div>

    </>
  )
}