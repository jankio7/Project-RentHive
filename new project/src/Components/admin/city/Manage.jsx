import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../../Firebase";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";


export default function Manage() {
  const [AllCities, setAllCities] = useState([]);
  const[load, setLoad]=useState(true)

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

  const DeleteCity = (cityId) => {
     Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then(async(result)=>{
              if(result.isConfirmed){
                await deleteDoc(doc(db, "cities", cityId))
                  .then(()=>{
                                Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                                });
                
                            }).catch((error)=>{
                                            toast.error(error.message)
                                        })
                                       
                
              }
            })
    
          }

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
        <div className="row justify-content-center no-gutters">
          <div className="col-md-10" style={{ boxShadow: "0px 0px 15px gray" }}>
            <div className="contact-wrap w-100 p-md-5 p-4">
              <h3 className="mb-4">Manage Cities</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>City Name</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {AllCities.map((el, index) => (
                    <tr key={el.id}>
                      <td>{index + 1}</td>
                      <td>{el.cityName}</td>
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

    
     