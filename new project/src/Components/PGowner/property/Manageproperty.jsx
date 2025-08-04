import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDoc, onSnapshot, query, where } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../../Firebase";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";

export default function Manageproperty() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    let q=query(collection(db, "property"), where("ownerId","==",sessionStorage.getItem("userId")))
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
        updateData.push({...propertyList[i], city:cityData})
      }
      setData(updateData);
      setLoad(false);
    });

    return () => unsubscribe();
  }, []);

  const DeleteProperty = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteDoc(doc(db, "property", id));
          toast.success("Deleted successfully!");
        } catch (err) {
          toast.error("Delete failed: " + err.message);
        }
      }
    });
  };

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
           : (
          <div className="row justify-content-center no-gutters">
            <div className="col-md-12 table-responsive" style={{ boxShadow: "0px 0px 15px gray" }}>
              <div className="contact-wrap w-100 p-md-5 p-4">
                <h3 className="mb-4">Properties</h3>
                <table className="table table-striped">
                  <thead>
                    <tr className="">
                      <th>#</th>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Details</th>
                      <th>Price</th>
                      <th>Location</th>
                      <th>City</th>
                       <th>Status</th>
                      <th>Action</th>
                    </tr>
                     </thead>
                    <tbody>
                    {data.map((el, index) => (
                 <tr key={el.id}>
                            <td>{index + 1}</td>
                            <td>
                                    {el.image ? (
                                  <img
                                  src={el.image}
                                  alt={el.title}
                                  style={{ width: "100px", height: "auto" }}
                                  />
                                  ) : (
                                  "No Image"
                                )}
                            </td> 
                            <td>{el.title || "N/A"}</td>
                            <td>
                              <ul>
                              <li>Size: {el.size || "N/A"} ft</li>
                              <li>AC:{el.ac}</li>
                              <li>Food: {el.food}</li>
                              <li>Balcony: {el.balcony}</li>
                              <li>Type: {el.type}</li>
                              <li>
                                <Link to={el?.video} target="_blank">Video</Link>
                              </li>
                              </ul>
                            </td>    
                            <td>&#8377; {el.price}</td> 
                            <td>{el.location}</td>    
                            <td>{el.city?.cityName}</td>    
                            <td>{el.status}</td>
                           
                    <td>
                    <Link
                  to={`/Pgowner/property/update/${el.id}`}
                  className="btn btn-outline-success mx-2"
                   >
                 Edit
                  </Link>
                <button
                className="btn btn-danger"
               onClick={() => DeleteProperty(el.id)}
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
        )}
      </div>
    </>
  );
}

  
