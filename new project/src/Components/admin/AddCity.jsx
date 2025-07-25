import axios from "axios"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import {db} from "../../firebase"
import { useState } from "react"
import { toast } from "react-toastify"

export default function AddCity(){
    const[cityName,setCityName]=useState("")
    const[description, setDescription]=useState("")
    const[image,setImage]=useState("")
    const[imageName,setImageName]=useState("")

    const handleForm= async (e)=>{
        e.preventDefault();
        const formData= new FormData();
        formData.append("file", image)
        formData.append("upload_preset","images");
    
    try{
        const response = await axios.post(
           `https://api.cloudinary.com/v1_1/dydsmxjpx/image/upload`,formData
        );
        saveData(response.data.secure_url)
    } catch(error){
        toast.error("Error uploading image:", error.message);
    }
    };
    const changeImage=(e)=>{
        setImageName(e.target.value)
        setImage(e.target.files[0]);
    };
   const saveData= async (imageUrl)=>{
    try { 
        let data={
            cityName,
            description,
            image:imageUrl,
            status:true,
            createdAt:Timestamp.now(),
               };

            
              await addDoc(collection(db,"cities"),data);
      toast.success("City added successfully!");
      setCityName("");
      setDescription("");
      setImage({});
      setImageName("");
        } catch (err) {
        toast.error(err.message);
    }
   };
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
                  <a href="/">Home <i className="ion-ios-arrow-forward" /></a>
                </span>
                <span>City <i className="ion-ios-arrow-forward" /></span>
              </p>
              <h1 className="mb-0 bread">Add City</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5">
        <div className="row justify-content-center no-gutters">
          <div className="col-md-7" style={{ boxShadow: "0px 0px 15px gray" }}>
            <div className="contact-wrap w-100 p-md-5 p-4">
              <h3 className="mb-4">Add City</h3>
              <form onSubmit={handleForm} className="contactForm">
                <div className="row">
                  {/* City Name */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="label">City Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City Name"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="label">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="label">Image</label>
                      <input
                        type="file"
                        className="form-control"
                        value={imageName}
                        onChange={changeImage}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value="Submit"
                      />
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