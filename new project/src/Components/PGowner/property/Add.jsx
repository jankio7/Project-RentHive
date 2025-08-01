import { addDoc, collection, Timestamp } from "firebase/firestore"
import { useState } from "react"
import { db } from "../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import { PacmanLoader } from "react-spinners"

export default function Add(){
    const [propertyName, setPropertyName]=useState("")
    const [description, setDescription]=useState("")
    const [type, setType]=useState("")
    const [image, setImage]=useState({})
    const [imageName, setImageName]=useState("")
    const [load, setLoad]=useState(false)
    const handleForm=async (e)=>{
        e.preventDefault()
        setLoad(true)
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "images"); 

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dqhhessok/image/upload`, 
                formData
            );
            saveData(response.data.secure_url)
        } catch (error) {
            toast.error("Error uploading image:", error.message);
         
            setLoad(false)

        }
    }
    const changeImage=(e)=>{
        setImageName(e.target.value)
        setImage(e.target.files[0]);
    }

    const saveData=async (imageUrl)=>{
         try{
        
            let data={
                propertyName,
                description,
                image:imageUrl,
                type, 
                status:true,
                createdAt:Timestamp.now()
            }
            
            await addDoc(collection(db, "property"), data)
            toast.success("Property added successfully!")
            setPropertyName("")
            setDescription("")
            setType("")
            setImage({})
            setImageName("")
            
        }
        catch(err){
            toast.error(err.message)
        }
        finally{
          setLoad(false)
        }
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
                    <div className="col-md-9 ftco-animate pb-5">
                    <p className="breadcrumbs mb-2">
                        <span className="mr-2">
                        <a href="index.html">
                            Home <i className="ion-ios-arrow-forward" />
                        </a>
                        </span>{" "}
                        <span>
                        Property <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Property</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container my-5">
            {
            load?
            <PacmanLoader color="#00BD56" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
           
              :
              <div className="row justify-content-center no-gutters">
                <div className="col-md-7" style={{boxShadow:"0px 0px 15px gray"}}>
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Add Property</h3>
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
                              Property Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="description"
                              id="propertyName"
                              placeholder="Property Name"
                              value={propertyName}
                              onChange={(e)=>{
                                  setPropertyName(e.target.value)
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="email">
                              Description
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="description"
                              id="description"
                              placeholder="Description"
                              value={description}
                              onChange={(e)=>{
                                  setDescription(e.target.value)
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="subject">
                              Image
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              name="image"
                              id="image"
                              placeholder="Image"
                              value={imageName}
                              onChange={changeImage}
                            />
                          </div>
                        </div>
                      <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="subject">
                              Type
                            </label>
                            <select
                              className="form-control"
                              value={type}
                              onChange={(e)=>{
                                  setType(e.target.value)
                              }}
                            >
                              <option disabled selected value={""}>Choose one</option>
                              <option>Dog</option>
                              <option>Cat</option>
                            </select>
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
                  </div>
                </div>
              
              </div>
            }
            </div>
        </>
    )
}