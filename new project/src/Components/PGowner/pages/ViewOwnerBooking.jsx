import { collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { db } from "../../../Firebase";

export default function ViewOwnerBooking() {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        var q=query(collection(db, "payments"), where("ownerId","==", sessionStorage.getItem("userId")))
        
        const unsubscribe = onSnapshot(q, async (snapshot) => {
          const propertyList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          let updateData=[]
          for(let i=0;i<propertyList.length;i++){
            let pgId=propertyList[i].pgId 
            let pgDoc=await getDoc(doc(db,"property", pgId))
            let pgData=pgDoc.data()
            let ownerId=propertyList[i].ownerId 
            let ownerDoc=await getDoc(doc(db,"users", ownerId))
            let ownerData=ownerDoc.data()
            let userId=propertyList[i].userId 
            let userDoc=await getDoc(doc(db,"users", userId))
            let userData=userDoc.data()
            updateData.push({...propertyList[i],pg:pgData,  owner:ownerData, user:userData})
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
              <h1 className="text-light">Bookings</h1>
              
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
              <img src={el?.pg?.image} className="card-img-top w-100" alt={''} style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{el?.pg?.title}</h5>
                <h6 className="card-title">Total Payable: &#8377;{el?.pg?.price}</h6>
                <p>Security Amount:&#8377; {el?.securityAmt}</p>
                <p className="badge bg-success">{el?.status}</p>
                <p>{Date(el?.timestamp)}</p>
                <p>User Details:</p>
                <div><i className="bi bi-person"></i> {el?.user?.name}</div>
                <div><i className="bi bi-envelope"></i> {el?.user?.email}</div>
                <div><i className="bi bi-phone"></i> {el?.user?.contact}</div>
                <Link className="btn btn-outline-primary d-block mx-auto" to={`/PGowner/viewpgDetails/${el?.pgId}`}>View PG</Link>
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



