import { Timestamp, doc, getDoc, updateDoc } from "firebase/firestore"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "../../../Firebase"
import axios from "axios"
// import { PulseLoader } from "react-spinners"


export default function Update(){
    const {id} = useParams
     const[cityName, setCityName]=useState("")
    const[description, setDescription]=useState("")
    const[image,setImage]=useState([])
    const[imageName,setImageName]=useState("")
     const [previousImg, setPreviousImg]=useState("")
     const[load, setLoad]=useState("")
     const[AllCities, setAllCities]=useState("")

     useEffect(()=>{
        fetchData()
     },[])
   const fetchData = async () => {
  let cityDoc = await getDoc(doc(db, "cities", id));
  let cityData = cityDoc.data();
  setCityName(cityData.cityName);
  setDescription(cityData.description);
  setImage(cityData.image); 
}

      
     const handleForm= async (e)=>{
            e.preventDefault()
            if (!!imageName) {
                
            
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
    }else{
        saveData(previousImg)
    }
        }
         const changeImage =(e)=>{
        setImageName(e.target.value)
        setImage(e.target.files[0]);
    }
   const nav = useNavigate()
     const saveData= async (imageUrl)=>{
        try { 
            let data={
                cityName,
                description,
                image:imageUrl,
                status:true,
                createdAt:Timestamp.now(),
                   };
    
                
                  await updateDoc(doc(db,"cities", id), data)
          toast.success("City updated successfully!");
        nav("admin/City/Manage")
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
                  <a href="/">
                    Home <i className="ion-ios-arrow-forward" />
                  </a>
                </span>
                <span>
                  City <i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread">Manage City</h1>
            </div>
          </div>
        </div>
      </section> 
      

      <div className="container my-5">
        {load?
      <PulseLoader color="#4bc4daff" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
            :
        <div className="row justify-content-center no-gutters">
          <div className="col-md-10" style={{ boxShadow: "0px 0px 15px gray" }}>
            <div className="contact-wrap w-100 p-md-5 p-4">
              <h3 className="mb-4">Manage Cities</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>City Name</th>
                    <th>description</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {AllCities.map((el, index) => (
                    <tr key={el.id}>
                      <td>{index + 1}</td>
                      <td>{el.cityName}</td>
                      <td>{el.description}</td>
                      <td>
                        <img
                          src={el.image}
                          alt={el.cityName}
                          style={{ width: "100px", height: "auto" }}
                        />
                      </td>
                      <td>
                       <Link to={`/admin/city/update/${el.id}`} className="btn btn-outline-success mx-2">Edit</Link>

                        <button
                          className="btn btn-danger"
                          onClick={() => DeleteCity(el.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        }
      </div>
    </>
  );
}
