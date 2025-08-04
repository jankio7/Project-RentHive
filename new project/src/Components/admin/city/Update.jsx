import { addDoc, collection, doc, getDoc, Timestamp, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"
import { PulseLoader } from "react-spinners"

export default function Update(){
    const {id}=useParams()
    const [cityName, setCityName]=useState("")
    const [image, setImage]=useState({})
    const [imageName, setImageName]=useState("")
    const [previousImg, setPreviousImg]=useState("")
    const [load, setLoad]=useState(true)
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async ()=>{
       let cityDoc=await getDoc(doc(db, "cities", id))
       let cityData=cityDoc.data()
       setCityName(cityData.cityName)
       setPreviousImg(cityData.image)
       setLoad(false)
    }
    const handleForm=async (e)=>{
        e.preventDefault()
        setLoad(true)
        if(!!imageName){
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", "images"); // Replace with your upload preset

            try {
                const response = await axios.post(
                  `https://api.cloudinary.com/v1_1/dydsmxjpx/image/upload`,
                    formData
                );
                saveData(response.data.secure_url)
            } catch (error) {
                toast.error("Error uploading image:", error.message);
                // saveData("No_image")
                setLoad(false)

            }
        }else{
            saveData(previousImg)
        }
    }
    const changeImage=(e)=>{
        setImageName(e.target.value)
        setImage(e.target.files[0]);
    }
    const nav=useNavigate()
    const saveData=async (imageUrl)=>{
         try{
            //insertion 
            let data={
                cityName,
                image:imageUrl,
                status:true,
                createdAt:Timestamp.now()
            }
            // console.log(data);
            //addDoc(collection(db, "collectionName"), data)
            await updateDoc(doc(db, "cities", id), data)
            toast.success("City updated successfully!")
            nav("/admin/city/manage")
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
              <div className="col-md-7" style={{boxShadow:"0px 0px 15px gray"}}>
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4 text-center">Edit City</h3>
                  <img src={previousImg} style={{height:"100px", width:"100px"}} className="d-block mx-auto rounded-circle" alt={cityName} />
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
                            City Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="description"
                            id="cityName"
                            placeholder="city Name"
                            value={cityName}
                            onChange={(e)=>{
                                setCityName(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-12 my-2">
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
}
            </div>
        </>
    )
}  






