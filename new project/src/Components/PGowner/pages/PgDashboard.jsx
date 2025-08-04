import { collection, getCountFromServer, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../Firebase";


export default function PgDashboard(){
    const [user, setUser]=useState(0)
    const [room, setRoom]=useState(0)
    const [booking, setBooking]=useState(0)
    useEffect(()=>{
        fetchUserCount()
        fetchRoomCount()
        fetchBookingCount()
    },[])
    const fetchUserCount=async ()=>{
        let usersCount= await getCountFromServer(collection(db,"users"))
        setUser(usersCount.data().count);
    }
    const fetchRoomCount=async ()=>{
        let q=query(collection(db,"property"),where("ownerId","==",sessionStorage.getItem("userId")))

        let RoomCount= await getCountFromServer(q)
        setRoom(RoomCount.data().count);
        
    }
    const fetchBookingCount=async ()=>{
        let q=query(collection(db,"payments"),where("ownerId","==",sessionStorage.getItem("userId")))
        let bookingCount= await getCountFromServer(q)
        setBooking(bookingCount.data().count);
        
    }
    return(
        <>
      <div className="page-title" style={{background:"url('/assets/img/hero-carousel/hero-carousel-3.jpg')"}} >
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="text-light">Dashbaord</h1>
              
            </div>
          </div>
        </div>
      </div>
   
    </div>
        <section className="ftco-section my-5  ftco-no-pt ftco-intro">
    <div className="container">
      <div className="row">
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
          <div className="d-block services text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-blind" />
            </div>
            <div className="media-body">
              <h3 className="heading">Total Booking </h3>
              <h1>{booking}</h1>
              <Link
                to={"/admin/booking/view"}
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
          <div className="d-block services text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-dog-eating" />
            </div>
            <div className="media-body">
              <h3 className="heading">PG Listing</h3>
              <h1>{room}</h1>
              <Link
               to={"/admin/roomcred/viewrooms"}
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
          <div className="d-block services text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-grooming" />
            </div>
            <div className="media-body">
              <h3 className="heading">Total Users</h3>
              <h1>{user}</h1>
              <a
                href="#"
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}