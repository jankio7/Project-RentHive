import { useEffect, useState } from "react";
import {toast } from "react-toastify";
import axios from "axios";
import { db } from "../../../Firebase";
import { Timestamp, getDoc, doc, collection, onSnapshot, query, updateDoc } from "firebase/firestore";
import { PulseLoader } from "react-spinners";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Updateproperty() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [size, setSize] = useState("");
  const [ac, setAc] = useState("No");
  const [cityId, setCityId] = useState([]);
  const [balcony, setBalcony] = useState("No");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [food, setFood] = useState("No");
  const [status, setStatus]= useState("booked");
  const [load, setLoad]=useState(true)
  const [video, setVideo]=useState("")
  const [description, setDescription]=useState("")
  const [location, setLocation]=useState("")
  const [cities, setAllCities]=useState([])
  const [previousImg, setPreviousImg]=useState("")
  const [previousVideo, setPreviousVideo]=useState("")
  const {id}=useParams()
  const nav=useNavigate()
  const handleImageChange = (e) => {
    setImageName(e.target.value);
    setImage(e.target.files[0]);
  };

  const fetchCities = () => {
    const q = query(collection(db, "cities"));
  
    onSnapshot(q, (cityData) => {
      setAllCities(
        cityData.docs.map((el) => ({
          id: el.id,
          ...el.data(),
        }))
      );
    });
  };
  
    useEffect(() => {
      fetchCities();
    }, []);
  
    useEffect(() => {
            fetchData()
          }, []);
        const fetchData=async ()=>{
                let pgDoc=await getDoc(doc(db,"property",id))
                let pgData=pgDoc.data()
                setAc(pgData?.ac)
                setCityId(pgData?.cityId)
                setBalcony(pgData?.balcony)
                setFood(pgData?.food)
                setPrice(pgData?.price)
                setSize(pgData?.size)
                setStatus(pgData?.status)
                setTitle(pgData?.title)
                setType(pgData?.type)
                setVideo(pgData?.video)
                setLocation(pgData?.location)
                setDescription(pgData?.description)
                setPreviousImg(pgData?.image)
                setPreviousVideo(pgData?.video)
                setLoad(false);
        }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true)

    try {
        if(!!imageName){
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "images");

        const res = await axios.post(
            "https://api.cloudinary.com/v1_1/dqhhessok/image/upload",
            formData
        );

        var imageUrl = res.data.secure_url;
        saveData(imageUrl)
        }else{
            saveData(previousImg)
        }
    }
    catch(err){
        toast.error(err.message)
        setLoad(false)
    }
   

  };
   const saveData=async (imageUrl)=>{
        try{
        const propertyData = {
            title,
            image: imageUrl,
            size,
            status,
            ac,
            food,
            cityId,
            balcony,
            type,
            price,
            description, 
            video,
            location,
        };

        await updateDoc(doc(db, "property",id), propertyData);
        toast.success("Property updated successfully!");
        nav("/pgowner/property/manage")
        
        } catch (error) {
        toast.error("Error uploading property: " + error.message);
        } 
        finally{
        setLoad(false)
        }
    }

  return (
    <>
      <div className="page-title" style={{background:"url('/assets/img/hero-carousel/hero-carousel-3.jpg')"}} >
        <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="text-light">PG</h1>
              
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
            <div className="col-md-7 mt-5" style={{ boxShadow: "0px 0px 15px gray" }}>
              <div className="contact-wrap w-100 p-md-5 p-4">
                <h3 className="mb-4 text-center">Update PG </h3>
                <img src={previousImg} style={{height:"100px", width:"100px"}} className="d-block mx-auto rounded-circle" alt={""} />

                <form onSubmit={handleSubmit} className="contactForm">
                  <div className="row">
                    {/* Title */}
                    <div className="col-md-12 my-2">
                      <div className="form-group">
                        <label className="label">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="PG title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Image */}
                    <div className="col-md-12 my-2">
                      <div className="form-group">
                        <label className="label">Image</label>
                        <input
                          type="file"
                          className="form-control"
                          value={imageName}
                          onChange={handleImageChange}
                          accept="image/*"
                          
                        />
                      </div>
                    </div>

                    {/* Size */}
                    <div className="col-md-12 my-2">
                      <div className="form-group">
                        <label className="label">Size (in Sqft)</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. 300"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                        
                          {/* status */}
                    <div className="col-md-4 my-2">
                      <div className="form-group">
                        <label className="label">Status</label>
                        <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                          <option value="Booked">Booked</option>
                          <option value="Available">Available</option>
                        </select>
                      </div>
                    </div>

                    {/* AC */}
                    <div className="col-md-4 my-2">
                      <div className="form-group">
                        <label className="label">AC Room</label>
                        <select className="form-control" value={ac} onChange={(e) => setAc(e.target.value)}>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>

                    {/*Food */}
                    <div className="col-md-4 my-2">
                      <div className="form-group">
                        <label className="label">Food</label>
                        <select className="form-control" value={food} onChange={(e) => setFood(e.target.value)}>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                   
                    {/* Balcony */}
                    <div className="col-md-6 my-2">
                      <div className="form-group">
                        <label className="label">Balcony</label>
                        <select className="form-control" value={balcony} onChange={(e) => setBalcony(e.target.value)}>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>

                    {/* Type */}
                    <div className="col-md-6 my-2">
                      <div className="form-group">
                        <label className="label">Type</label>
                        <select className="form-control" value={type} onChange={(e) => setType(e.target.value)} required>
                          <option disabled value="">Select Type</option>
                          <option value="Boys">Boys</option>
                          <option value="Girls">Girls</option>
                        </select>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="label">Price (monthly)</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. ₹6000"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                               
                    {/* city */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="label">City </label>
                         <select
                          type="text"
                          className="form-control"
                          placeholder="e.g. cityname"
                          value={cityId}
                          onChange={(e) => setCityId(e.target.value)}
                          required
                        >
                          <option value={""} disabled selected>Choose city</option>
                          {cities?.map((el,index)=>(
                            <option value={el?.id} key={index}>{el?.cityName}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label">Video</label>
                        <br/>
                        <Link to={previousVideo}>Watch</Link>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Video Link"
                          value={video}
                          onChange={(e) => setVideo(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label">Location</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label">Description</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                               
                    {/* Submit */}
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
  );
}
