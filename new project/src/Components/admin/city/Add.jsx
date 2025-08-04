import { addDoc, collection, Timestamp } from "firebase/firestore"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { db } from "../../../Firebase"
import { PacmanLoader, PulseLoader } from "react-spinners"

export default function Add(){
    const[cityName,setCityName]=useState("")
    const[description, setDescription]=useState("")
    const[image,setImage]=useState([])
    const[imageName,setImageName]=useState("")
    const [load, setLoad]=useState(false)
    const handleForm= async (e)=>{
        e.preventDefault();
        setLoad(true)
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
        setLoad(true)
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
    finally{
      setLoad(false)
    }
   };
    return(
        <>
        
    <div className="page-title" style={{background:"url('/assets/img/hero-carousel/hero-carousel-3.jpg')"}} >
        <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="text-light">City</h1>
              
            </div>
          </div>
        </div>
      </div>
   
    </div>
     
      <div className="container my-5">
      {load? 
      <div className="d-flex justify-content-center">
      <PulseLoader  size={30} loading={load} color="#00bd56" />
      </div>
      :
        <div className="row justify-content-center no-gutters">
          <div className="col-md-7" style={{ boxShadow: "0px 0px 15px gray" }}>
            <div className="contact-wrap w-100 p-md-5 p-4">
              <h3 className="mb-4">Add City</h3>
              <form onSubmit={handleForm} className="contactForm">
                <div className="row">
                  {/* City Name */}
                  <div className="col-md-12 my-2">
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

                  {/* Image Upload */}
                  <div className="col-md-12 my-2">
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
                  <div className="col-md-12 my-2">
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-primary d-block mx-auto"
                        value="Submit"
                      />
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