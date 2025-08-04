import { collection, Firestore, onSnapshot, query, where } from "firebase/firestore"
import { db } from "../../../Firebase"
import { useEffect } from "react"
import { useState } from "react"
import { PulseLoader } from "react-spinners"
import Swal from "sweetalert2"
import Switch from "react-switch"


export default function Users(){
    const [load, setLoad]=useState(true)
    const [users, setUsers]=useState([])
    // useEffect(fn, [dependency])
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=()=>{
        //getDoc, onsnapshot, getdocs
        let q = query(collection(db, "users"), where("userType","==",3))
        onSnapshot(q,(userCol)=>{
            setUsers(userCol.docs.map((el)=>{
                // console.log(el.data(), el.id);
                return {id:el.id, ...el.data()};
            }))
            setLoad(false)
        })
    }
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
    return(
<>
     <div className="page-title" style={{background:"url('/assets/img/hero-carousel/hero-carousel-3.jpg')"}} >
        <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="text-light">Users</h1>
              
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
              <h3 className="mb-4">Manage Users</h3>
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