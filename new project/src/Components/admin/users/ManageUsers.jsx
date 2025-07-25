import { collection, Firestore, onSnapshot, query } from "firebase/firestore"
import { db } from "../../../Firebase"
import { useEffect } from "react"
import { useState } from "react"
import { PulseLoader } from "react-spinners"
import Swal from "sweetalert2"
import Switch from "react-switch"


export default function ManageUsers(){
    const [load, setLoad]=useState(false)
    const [users, setUsers]=useState([])
    // useEffect(fn, [dependency])
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=()=>{
        //getDoc, onsnapshot, getdocs
        let q = query(collection(db, "users"))
        onSnapshot(q,(userCol)=>{
            setUsers(userCol.docs.map((el)=>{
                // console.log(el.data(), el.id);
                return {id:el.id, ...el.data()};
            }))
        })
    }
    const changeStatus = (userId, status)=>{
               
                Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
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
                        // text: "Your file has been deleted.",
                        icon: "success"
                        });
        
                    }).catch((error)=>{
                        toast.error(error.message)
                    })
                   
                }
                });
                        
            }
    return(
<>
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
              <h1 className="mb-0 bread"> City</h1>
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
                    <th>Sno.</th>
                    <th>Full name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {users?.map((el,index)=>{
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{el?.name}</td>
                                 <td>{el?.email}</td>
                                  <td>{el?.contact}</td>
                                  <td>
                                    {el?.status?"Active":"In-active"}
                                  </td>
                                  <td>
                                    <Switch checked ={el?.status} onChange={()=>{
                                                changeStatus(el?.id, el?.status)
                                    }}/>
                                  </td>
                            </tr>
                        )
                    })}
          
                </tbody>
              </table>
            </div>
          </div>
        </div>
        }
      </div>

</>
    )
}