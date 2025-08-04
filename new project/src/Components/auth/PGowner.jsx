import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth, db } from "../../Firebase"
import { toast } from "react-toastify"
import { doc, setDoc, Timestamp } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

export default function PGowner(){
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [contact, setContact]=useState("")
  let nav=useNavigate()
  const handleForm=(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCred)=>{
      let userId=userCred.user.uid
      saveData(userId)
    })
    .catch((err)=>{
      toast.error(err.message)
    })
  }

  const saveData=async (userId)=>{
    try{
      let data={
        name:name, 
        email:email,
        contact:contact,
        userId:userId,
        userType:2, 
        status:true, 
        createdAt:Timestamp.now()
      }
  
      await setDoc(doc(db, "users",userId),data)
      toast.success("Register successfully!!")
      setTimeout(()=>{
          nav("/");
      },3000)
    }
    catch(err){
      toast.error(err.message)
    }
  }

    return(
        <>
      <div className="page-title" style={{background:"url('/assets/img/hero-carousel/hero-carousel-3.jpg')"}} >
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="text-light">PG Owner Register</h1>
              
            </div>
          </div>
        </div>
      </div>
   
    </div>
            <div className="container my-5">
                
                {/* contact form  */}
                     <div className="row justify-content-center no-gutters">
              <div className="col-md-7" style={{ boxShadow: "0px 0px 15px gray" }}>
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Register</h3>
                  <form
                    method="POST"
                    id="contactForm"
                    name="contactForm"
                    className="contactForm"
                    onSubmit={handleForm}
                  >
                    <div className="row">
                     <div className="col-md-12 my-2">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e)=>{
                              setName(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-12 my-2">
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
                            onChange={(e)=>{
                              setEmail(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-12 my-2">
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
                    <div className="col-md-12 my-2">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Contact
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Contact"
                            minLength={10}
                            maxLength={10}
                            value={contact}
                            onChange={(e)=>{
                              setContact(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-12 my-2">
                        <div className="form-group">
                          <input
                            type="submit"
                            defaultValue="Submit"
                            className="btn btn-primary d-block mx-auto"
                          />
                          <div className="submitting" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
           
            </div>
            </div>
        </>
    )
  }