import { collection, doc, getDoc, onSnapshot, query, setDoc, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { db } from "../../Firebase";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export default function PGDetails() {
    let isLogin=sessionStorage.getItem("isLogin")
    let userType=sessionStorage.getItem("userType")
    let nav=useNavigate()
    useEffect(()=>{
        if(!isLogin){
            toast.error("please login")
            nav("/login")
        }
    },[])
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);
    const {id}=useParams()
    useEffect(() => {
        fetchData()
      }, []);
    const fetchData=async ()=>{
            let pgDoc=await getDoc(doc(db,"property",id))
            let pgData=pgDoc.data()
            let cityId=pgData.cityId 
            let cityDoc=await getDoc(doc(db,"cities", cityId))
            let cityData=cityDoc.data()
            let ownerId=pgData.ownerId 
            let ownerDoc=await getDoc(doc(db,"users", ownerId))
            let ownerData=ownerDoc.data()
            setData({...pgData, city:cityData, owner:ownerData});
            setLoad(false);
    }

     const handlePayment = (amount) => {
        let securityAmt=amount*20/100
        Swal.fire({
             title: "Are you sure you want to rent it?",
             text: "You want to delete this!",
             icon: "warning",
             showCancelButton: true,
             confirmButtonColor: "#3085d6",
             cancelButtonColor: "#d33",
             confirmButtonText: "Yes, Proceed!",
           }).then(async (result) => {
             if (result.isConfirmed) {
                const options = {
                key: "rzp_test_e420SYXn4cnXqq", // Razorpay Key ID
                amount: securityAmt*100, // Amount in paisa (₹500)
                currency: "INR",
                name: "SAVIOUR",
                description: "Product or Service",
                handler: async function (response) {
                    // Save payment ID to Firebase Firestore
                    const ref = doc(db, "payments", response.razorpay_payment_id);
                    let bookingData={
                    paymentId: response.razorpay_payment_id,
                    status: "Booked",
                    amount:amount,
                    securityAmt,
                    paymentStatus:1,
                    //1->securitypay, 
                    pgId:id,
                    ownerId:data?.ownerId,
                    userId:sessionStorage.getItem("userId"),
                    timestamp: Date.now(),
                    }
                    await setDoc(ref, bookingData);
                   await updateDoc(doc(db,"property", id), {status:"Booked"})
                    toast.success("Payment successful!");
                    nav("/my-booking")
                },
                prefill: {
                    name: "Test User",
                    email: "test@example.com",
                    contact: "9999999999",
                },
                theme: {
                    color: "#00bd56",
                },
                };

                const rzp = new window.Razorpay(options);
                rzp.open();
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
      :
      <section id="real-estate-2" className="real-estate-2 section">
      <div className="container" >
        <img src={data.image} style={{height:"500px"}} className="img-fluid w-100"/>
        <div className="row justify-content-between gy-4 mt-4">
          <div className="col-lg-8" >
            <div className="portfolio-description">
              <h2>{data?.title}</h2>
              <p>
               <ul>
                <li>Size: {data?.size || "N/A"} ft</li>
                <li>AC:{data?.ac}</li>
                <li>Food: {data?.food}</li>
                <li>Balcony: {data?.balcony}</li>
                <li>Type: {data?.type}</li>
                <li>City: {data?.city?.cityName}</li>
              
                </ul>
              </p>
           
                <p>{data?.description}</p>
            
              <div className="bg-light p-3">
                
                <div>
                  <i className="bi bi-person"> </i> 
                  <h3>{data?.owner?.name}</h3>
                  <p>{data?.owner?.email}</p>
                  <strong>PG-Owner</strong>
                </div>
              </div>
            </div>
            {/* End Portfolio Description */}
            {/* Tabs */}
            <ul className="nav nav-pills mb-3">
              <li>
                <a
                  className="nav-link active"
                  data-bs-toggle="pill"
                  href="#real-estate-2-tab1"
                >
                  Video
                </a>
              </li>
             
             
            </ul>
            {/* End Tabs */}
            {/* Tab Content */}
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="real-estate-2-tab1"
              ></div>
          
          
              {/* End Tab 2 Content */}
                <iframe
                  src={data?.video}
                  style={{width:"100%", height:"300px"}}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              {/* End Tab 3 Content */}
            </div>
            {/* End Tab Content */}
          </div>
          <div className="col-lg-3" >
            <div className="portfolio-info">
              <h3>Quick Summary</h3>
              <ul>
                <li>
                  <strong>Size:</strong> {data?.size}
                </li>
                <li>
                  <strong>Location:</strong> {data?.location}
                </li>
                <li>
                  <strong>PG Type:</strong> {data?.type}
                </li>
                <li>
                  <strong>Status:</strong> {data?.status}
                </li>
            
              </ul>
            </div>
            <h5>Rate: &#8377; {data?.price}</h5>
            {data?.status=="Available"  && userType==3 && 
            <>
            <p>You can Rent the PG via paying 20% security</p>
            <button className="btn btn-outline-primary" onClick={()=>{
                handlePayment(data?.price)
            }}>Rent Now @ &#8377;{data?.price*20/100}</button>
            </>
            }
          </div>
        </div>
      </div>
    </section>
  
}
</div>
    </>
  );
}



