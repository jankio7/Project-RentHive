import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { db } from "../../Firebase";

function CityCard({ name, imageUrl }) {
  const [load, setLoad]=useState(false)
  const [allCity, setAllCities]=useState([])
   const fetchCities = () => {
   const q = query(collection(db, "cities"));
 
   onSnapshot(q, (cityData) => {
     setAllCities(
       cityData.docs.map((el) => ({
         id: el.id,
         ...el.data(),
       }))
     );
     setLoad(false); 
   });
 };
 
   useEffect(() => {
     fetchCities();
   }, []);

  return (
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
      <div className="row">
        {allCity?.map((el,index)=>(
        <div className="col-md-4 p-3">
          <div className="card mt-5 " style={{  cursor: 'pointer' , boxShadow: "0px 0px 15px gray"}} 
            >
              <img src={el?.image} className="card-img-top w-100 rounded-circle" alt={''} style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title text-center">{el?.cityName}</h5>
                <Link className="btn btn-outline-primary d-block mx-auto" to={`/viewpg/${el.id}`}>Explore PG</Link>
              </div>
            </div>
        </div>
        ))}
      </div>
  
}
</div>
    </>
  );
}

export default CityCard;


