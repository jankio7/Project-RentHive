import { addDoc, collection, doc, getDoc, Timestamp, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function Update(){
    const {id}=useParams()
    const [cityName, setCityName]=useState("")
    const [description, setDescription]=useState("")
    const [type, setType]=useState("")
    const [image, setImage]=useState({})
    const [imageName, setImageName]=useState("")
    const [previousImg, setPreviousImg]=useState("")
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async ()=>{
       let cityDoc=await getDoc(doc(db, "city", id))
       let cityData=cityDoc.data()
       setCityName(cityData.CityName)
       setDescription(cityData.description)
       setType(cityData.type)
       setPreviousImg(cityData.image)
    }
    const handleForm=async (e)=>{
        e.preventDefault()
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
                description,
                image:imageUrl,
                type, 
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
    }
    return(
        <>
        <section
                
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
                        city<i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">city</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container my-5">

                {/* contact form  */}
            <div className="row justify-content-center no-gutters">
              <div className="col-md-7" style={{boxShadow:"0px 0px 15px gray"}}>
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Edit City</h3>
                  <img src={previousImg} style={{height:"100px", width:"100px"}} className="d-block mx-auto rounded-circle" alt="" />
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
                            <option>Room</option>
                            <option>Full house</option>
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
            </div>
        </>
    )
}  









// import { Timestamp, doc, getDoc, updateDoc } from "firebase/firestore"
// import { useEffect } from "react"
// import { useState } from "react"
// import { useNavigate, useParams } from "react-router-dom"
// import { toast } from "react-toastify"
// import { db } from "../../../Firebase"
// import axios from "axios"
// import { PulseLoader } from "react-spinners"


// export default function Update(){
//     const {id} = useParams();
//      const[cityName, setCityName]=useState("")
//     const[description, setDescription]=useState("")
//     const[image,setImage]=useState([])
//     const[imageName,setImageName]=useState("")
//      const [previousImg, setPreviousImg]=useState("")
//      const[load, setLoad]=useState("")
//      const[AllCities, setAllCities]=useState([])

//      useEffect(()=>{
//         fetchData()
//      },[])
//    const fetchData = async () => {
//   let cityDoc = await getDoc(doc(db, "cities", id));
//   console.log(cityDoc.data());
//   let cityData = cityDoc.data();
//   setCityName(cityData.cityName);
//   setDescription(cityData.description);
//   setImage(cityData.image); 
// }

      
//      const handleForm= async (e)=>{
//             e.preventDefault()
//             if (!!imageName) {
                
            
//             const formData= new FormData();
//             formData.append("file", image)
//             formData.append("upload_preset","images");
        
//         try{
//             const response = await axios.post(
//                `https://api.cloudinary.com/v1_1/dydsmxjpx/image/upload`,formData
//             );
//             saveData(response.data.secure_url)
//         } catch(error){
//             toast.error("Error uploading image:", error.message);
//         }
//     }else{
//         saveData(previousImg)
//     }
//         }
//          const changeImage =(e)=>{
//         setImageName(e.target.value)
//         setImage(e.target.files[0]);
//     }
//    const nav = useNavigate()
//      const saveData= async (imageUrl)=>{
//         try { 
//             let data={
//                 cityName,
//                 description,
//                 image:imageUrl,
//                 status:true,
//                 createdAt:Timestamp.now(),
//                    };
    
                
//                   await updateDoc(doc(db,"cities", id), data)
//           toast.success("City updated successfully!");
//         nav("/admin/City/Manage")
//             } catch (err) {
//             toast.error(err.message);
//         }
//        };
        
//     return(
//         <>
        
//           <section
//         className="hero-wrap hero-wrap-2"
//         style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
//         data-stellar-background-ratio="0.5"
//       >
//         <div className="overlay" />
//         <div className="container">
//           <div className="row no-gutters slider-text align-items-end">
//             <div className="col-md-9 ftco-animate pb-5">
//               <p className="breadcrumbs mb-2">
//                 <span className="mr-2">
//                   <a href="/">
//                     Home <i className="ion-ios-arrow-forward" />
//                   </a>
//                 </span>
//                 <span>
//                   City <i className="ion-ios-arrow-forward" />
//                 </span>
//               </p>
//               <h1 className="mb-0 bread">Manage City</h1>
//             </div>
//           </div>
//         </div>
//       </section> 
      

//       {/* <div className="container my-5">
//         {load?
//       <PulseLoader color="#4bc4daff" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
//             :
//         <div className="row justify-content-center no-gutters">
//           <div className="col-md-10" style={{ boxShadow: "0px 0px 15px gray" }}>
//             <div className="contact-wrap w-100 p-md-5 p-4">
//               <h3 className="mb-4">Manage Cities</h3>
//               <table className="table table-striped">
//                 <thead>
//                   <tr>
//                     <th>#</th>
//                     <th>City Name</th>
//                     <th>description</th>
//                     <th>Image</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead> */}
//                 {/* <tbody>
//                   {AllCities.map((el, index) => (
//                     <tr key={el.id}>
//                       <td>{index + 1}</td>
//                       <td>{el.cityName}</td>
//                       <td>{el.description}</td>
//                       <td>
//                         <img
//                           src={el.image}
//                           alt={el.cityName}
//                           style={{ width: "100px", height: "auto" }}
//                         />
//                       </td>
//                       <td>
//                        <Link to={`/admin/city/update/${el.id}`} className="btn btn-outline-success mx-2">Edit</Link>

//                         <button
//                           className="btn btn-danger"
//                           onClick={() => DeleteCity(el.id)}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody> */}
//               {/* </table>
//             </div>
//           </div>
//         </div>
//         }
//       </div> */}
//     </>
//   );
// }
