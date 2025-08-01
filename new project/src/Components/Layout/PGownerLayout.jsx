import { Outlet, useNavigate } from "react-router-dom";
import PGownerHeader from "./PGownerHeader";
import Footer from "./Footer";

export default function PgownerLayout(){
     let isLogin=sessionStorage.getItem("isLogin")
        let userType=sessionStorage.getItem("userType")
        let nav=useNavigate
    return(
        <>
        <PGownerHeader/>
         <Outlet/>
         <Footer/>
        
        </>
    )
}