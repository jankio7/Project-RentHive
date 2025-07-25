import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Footer from "./Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminLayout(){
     let isLogin=sessionStorage.getItem("isLogin")
        let userType=sessionStorage.getItem("userType")
        let nav=useNavigate()
        // useEffect(()=>{
        //     if(!isLogin || userType!=1){
        //         toast.error("Please login")
        //         nav("/login")
        //     }
        // },[])
    return(
        <>
        <AdminHeader/>
           <main style={{ marginTop: "80px", padding: "20px" }}>
        <Outlet/>
        </main>
        <Footer/>
         
        </>
    );
}