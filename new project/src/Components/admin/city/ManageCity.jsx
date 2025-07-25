import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../../Firebase";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";


export default function ManageCity() {
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
  //         id: doc.id,
  //         ...doc.data(),
  //       })

  //     );
  //   });
  // };

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
    
      {/* <section
                className="hero-wrap hero-wrap-2"
                style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
                data-stellar-background-ratio="0.5"
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
                        Breed <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Breed</h1>
                    </div>
                </div>
                </div>
            </section>

              :
                        <div className="row justify-content-center no-gutters">
                          <div className="col-md-12" style={{boxShadow:"0px 0px 15px gray"}}>
                            <div className="d-flex justify-content-end p-2">
                                <Link to={"/admin/city/AddC ity"} className="btn btn-outline-primary">Add New +</Link>
                            </div>
                            <div className="contact-wrap w-100 p-md-5 p-4">
                              <h3 className="mb-4">Manage city</h3>
                              <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">cityName</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Des</th>
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Actions</th>
            
                                                    </tr>
                                                </thead>
                              {
                                AllBreeds.map((el,index)=>{
                                    return <tbody>
                                                    <tr>
                                                    <th scope="row">{index+1}</th>
                                                    <td>{el.breedName}</td>
                                                    <td>{el.type}</td>
                                                    <td>{el.description}</td>
                                                     <td>
                                                        <img className="img-fluid" src={el.image} alt=""  style={{height:"50px", width:"50px"}}/></td>
                                                     <td>
                                                        <Link to={"/admin/city/edit/"+el.id} className="btn btn-outline-success mx-2">Edit</Link>
                                                        <button className="btn btn-danger" onClick={()=>{
                                                        DeleteCity(el.id)
                                                     }}>Delete </button></td>
            
                                                    </tr>
                                                   
                                                </tbody>
            
                                    
                                })
                              }
                                            </table>
                                            </div>
              </div>
             
            </div>
        

        </>
    )
} */}
    
    
   
  
       <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text align-items-end">
            <div className="col-md-9 ftco-animate pb-5">
              <p className="breadcrumbs mb-2">
                <span className="mr-2">
                  <a href="/">
                    Home <i className="ion-ios-arrow-forward" />
                  </a>
                </span>
                <span>
                  City <i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread">Manage City</h1>
            </div>
          </div>
        </div>
      </section> 
      

      <div className="container my-5">
        {load?
      <PulseLoader color="#4bc4daff" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
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
                    <th>description</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {AllCities.map((el, index) => (
                    <tr key={el.id}>
                      <td>{index + 1}</td>
                      <td>{el.cityName}</td>
                      <td>{el.description}</td>
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

    
     