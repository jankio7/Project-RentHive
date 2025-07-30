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

      <section
            className="hero-wrap hero-wrap-2"
            style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
            data-stellar-background-ratio="0.5"
        >
            <div className="overlay" />
            <div className="container">
            <div className="row no-gutters slider-text align-items-end">
                <div className="col-md-9 ftco-animate pb-5 ">
                <p className="breadcrumbs mb-2">
                    <span className="mr-2">
                    <a href="index.html">
                        Home <i className="ion-ios-arrow-forward" />
                    </a>
                    </span>{" "}
                    <span>
                    Login <i className="ion-ios-arrow-forward" />
                    </span>
                </p>
                <h1 className="mb-0 bread">Login</h1>
                </div>
            </div>
            </div>
        </section>
            <div className="container my-5">
            {/* contact form */}
            <div className="row no-gutters">
              <div className="col-md-7">
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Login</h3>
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
                        <div className="form-group">
                          <input
                            type="submit"
                            defaultValue="Submit"
                            className="btn btn-primary"
                          />
                          <div className="submitting" />
                        </div>
                      </div>
                    </div>
                  </form>
      <button type="button" onClick={signInGoogle}className="btn btn-danger"> 
        <i class="bi bi-google">Sign In With google</i>
                  </button>
                  {/* {email} */}
                  <div>Don't have an account? <Link to={"/register"}>Register Here!</Link></div>
                
                </div>
               </div>
              <div className="col-md-5 d-flex align-items-stretch">
                {/* <div
                  className="info-wrap w-100 p-5 img"
                  // style={{ backgroundImage: "url(/assets/images/img.jpg)" }}
                ></div> */}
              </div>
            </div>
            </div>

    </>
  )
}