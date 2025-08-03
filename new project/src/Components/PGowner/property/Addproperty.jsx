import { use, useState } from "react";
import {toast } from "react-toastify";
import axios from "axios";
import { db } from "../../../Firebase";
import { Timestamp, addDoc, collection } from "firebase/firestore";

export default function Addproperty() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [size, setSize] = useState("");
  const [ac, setAc] = useState("No");
  const [city, setCity] = useState([]);
  const [balcony, setBalcony] = useState("No");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [owner, setowner] = useState([]);
  const [food, setFood] = useState("No");
  const [status, setStatus]= useState("booked");

  const handleImageChange = (e) => {
    setImageName(e.target.value);
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "images");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dqhhessok/image/upload",
        formData
      );

      const imageUrl = res.data.secure_url;

      const propertyData = {
        owner,
        title,
        
        image: imageUrl,
        size,
        status,
        ac,
        food,
        city,
        balcony,
        type,
        price,
       
        createdAt: Timestamp.now(),
      };

      await addDoc(collection(db, "property"), propertyData);
      toast.success("Property added successfully!");
    } catch (error) {
      toast.error("Error uploading property: " + error.message);
    } 
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: 'url("/assets/img/hero-carousel/hero-carousel-1.jpg")' }}
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
                <span>Property <i className="ion-ios-arrow-forward" /></span>
              </p>
              <h1 className="mb-0 bread">Add Property</h1>
            </div>
          </div>
        </div>
      </section>

       
          <div className="row justify-content-center no-gutters">
            <div className="col-md-7 mt-5" style={{ boxShadow: "0px 0px 15px gray" }}>
              <div className="contact-wrap w-100 p-md-5 p-4">
                <h3 className="mb-4 text-center">Add Property</h3>
                <form onSubmit={handleSubmit} className="contactForm">
                  <div className="row">
                    {/* Title */}
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Image */}
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label">Image</label>
                        <input
                          type="file"
                          className="form-control"
                          value={imageName}
                          onChange={handleImageChange}
                          accept="image/*"
                          required
                        />
                      </div>
                    </div>

                    {/* Size */}
                    <div className="col-md-12">
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
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="label">Status</label>
                        <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                          <option value="Booked">Booked</option>
                          <option value="Available">Available</option>
                        </select>
                      </div>
                    </div>

                    {/* AC */}
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="label">AC Room</label>
                        <select className="form-control" value={ac} onChange={(e) => setAc(e.target.value)}>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>

                    {/*Food */}
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="label">Food</label>
                        <select className="form-control" value={food} onChange={(e) => setFood(e.target.value)}>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                   
                    {/* Balcony */}
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="label">Balcony</label>
                        <select className="form-control" value={balcony} onChange={(e) => setBalcony(e.target.value)}>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>

                    {/* Type */}
                    <div className="col-md-4">
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
                         <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. cityname"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* owner*/}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="label">Owner</label>
                         <input
                          type="text"
                          className="form-control"
                          placeholder="e.g ownername"
                          value={owner}
                          onChange={(e) => setowner(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Submit */}
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
        
    </>
  );
}
