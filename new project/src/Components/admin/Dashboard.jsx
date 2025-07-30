import { collection, getCountFromServer } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";


export default function Dashboard(){
    const [user, setUser]=useState(0)
    const [room, setRoom]=useState(0)
    useEffect(()=>{
        fetchUserCount()
        fetchBreedCount()
    },[])
    const fetchUserCount=async ()=>{
        let usersCount= await getCountFromServer(collection(db,"users"))
        setUser(usersCount.data().count);
    }
    const fetchBreedCount=async ()=>{
        let breedCount= await getCountFromServer(collection(db,"room"))
        setBreed(breedCount.data().count);
        
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
                        <Link to={"/admin"}>
                            Dashboard <i className="ion-ios-arrow-forward" />
                        </Link>
                        </span>{" "}
                        <span>
                         <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread"></h1>
                    </div>
                </div>
                </div>
            </section>
        <section className="ftco-section bg-light ftco-no-pt ftco-intro">
    <div className="container">
      <div className="row">
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
          <div className="d-block services text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-blind" />
            </div>
            <div className="media-body">
              <h3 className="heading">Total Rooms</h3>
              <h1>{room}</h1>
              <Link
                to={"/admin/city/manage"}
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
              <h1>50</h1>
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