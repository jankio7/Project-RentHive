import { collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { db } from "../../Firebase";

export default function PGCard() {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);
    const {cityId}=useParams()
    useEffect(() => {
        if(!cityId){
        var q=query(collection(db, "property"))
        }else{
            var q=query(collection(db, "property"), where("cityId","==", cityId))
        }
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
      </div>
  
}
</div>
    </>
  );
}



