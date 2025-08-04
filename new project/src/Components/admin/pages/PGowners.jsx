import { collection, onSnapshot, deleteDoc, doc, query,where, updateDoc} from "firebase/firestore";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { db } from "../../../Firebase";
import { PulseLoader } from "react-spinners";
import Switch from "react-switch"
export default function PGowners() {
  const [pgowners, setPgowners] = useState([]);

  const [load, setLoad]=useState(true)
  useEffect(() => {
  const q = query(collection(db, "users"), where("userType", "==", 2));
  const unsub = onSnapshot(q, (snapshot) => {
    const owners = snapshot.docs.map((doc, index) => ({
      id: doc.id,
      sno: index + 1,
      ...doc.data(),
    }));
    setPgowners(owners);
    setLoad(false)
  });

  return () => unsub();
}, []);

   const changeStatus = (userId, status)=>{
                 
                  Swal.fire({
                  title: "Are you sure?",
                  text: "You want to block this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: `Yes, ${status?"block":"un-block"}`
                  }).then(async (result) => {
                  if (result.isConfirmed) {
                      let data={
                          status:!status
                      }
                      await updateDoc(doc(db,"users",userId), data)
                      .then(()=>{
                          Swal.fire({
                          title: `${status?"Blocked":"Un-blocked"}`,
                        icon: "success"
                          });
          
                      }).catch((error)=>{
                          toast.error(error.message)
                      })
                     
                  }
                  });
                          
              }

  return (
    <>
       <div className="page-title" style={{background:"url('/assets/img/hero-carousel/hero-carousel-3.jpg')"}} >
        <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="text-light">PG-Owners</h1>
              
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
      <div className="col-md-12">
        <div className="contact-wrap w-100 p-md-5 p-4">
          <h3 className="mb-4 text-center">Manage PG Owners</h3>
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pgowners.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    No PG Owners Found
                  </td>
                </tr>
              ) : (
                pgowners.map((owner) => (
                  <tr key={owner.id}>
                    <td>{owner.sno}</td>
                    <td>{owner.name}</td>
                    <td>{owner.email}</td>
                    <td>{owner.contact}</td>
                    <td>
                      <Switch checked ={owner?.status} onChange={()=>{
                                  changeStatus(owner?.id, owner?.status)
                      }}/>
                    </td>
                  </tr>
                ))
              )}
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
