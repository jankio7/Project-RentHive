import { collection, doc, getDoc, limit, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { db } from "../../Firebase";
import { PulseLoader } from "react-spinners";
export default function Home(){
   const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        var q=query(collection(db, "property"), limit(3))
       
        const unsubscribe = onSnapshot(q, async (snapshot) => {
          const propertyList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          let updateData=[]
          for(let i=0;i<propertyList.length;i++){
            let cityId=propertyList[i].cityId 
            let cityDoc=await getDoc(doc(db,"cities", cityId))
            let cityData=cityDoc.data()
            let ownerId=propertyList[i].ownerId 
            let ownerDoc=await getDoc(doc(db,"users", ownerId))
            let ownerData=ownerDoc.data()
            updateData.push({...propertyList[i], city:cityData, owner:ownerData})
          }
          setData(updateData);
          setLoad(false);
        });
    
        return () => unsubscribe();
      }, []);
    return(
        <>
  
  <main className="main">
    {/* Hero Section */}
    <section id="hero" className="hero section dark-background">
      <div
        id="hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval={5000}
      >
        <div className="carousel-item active">
          <img src="/assets/img/hero-carousel/hero-carousel-1.jpg" alt="" />
          <div className="carousel-container">
            <div>
              <p>Get the Best PGs.</p>
              <h2>
                <span>Check-Out</span> Now
              </h2>
              <Link to="/viewpg" className="btn-get-started">
                View Property
              </Link>
            </div>
          </div>
        </div>
        {/* End Carousel Item */}
        <a
          className="carousel-control-prev"
          href="#hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          />
        </a>
        <a
          className="carousel-control-next"
          href="#hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          />
        </a>
        <ol className="carousel-indicators" />
      </div>
    </section>
    {/* /Hero Section */}
 

  
  </main>
      <div className="container my-5">
      {load? 
      <div className="d-flex justify-content-center">
      <PulseLoader  size={30} loading={load} color="#00bd56" />
      </div>
      :
      <div className="row">
        {data?.map((el,index)=>(
        <div className="col-md-4 p-3">
          <div className="card mt-5 " style={{  cursor: 'pointer' , boxShadow: "0px 0px 15px gray"}} 
            >
              <img src={el?.image} className="card-img-top w-100" alt={''} style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title text-center">{el?.title}</h5>
                <h6 className="card-title text-center">&#8377;{el?.price}</h6>
                <Link className="btn btn-outline-primary d-block mx-auto" to={`/viewpgDetails/${el.id}`}>Explore</Link>
              </div>
            </div>
        </div>
        ))}
        <Link to={"/viewpg"} className="d-block w-25 mx-auto btn btn-primary">View More</Link>
      </div>
}
</div>
  {/* Scroll Top */}
  <a
    href="#"
    id="scroll-top"
    className="scroll-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
</>

    )

}