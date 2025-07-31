import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import RoomCredHeader from "./RoomcredHeader";



export default function RoomcredLayout(){
    let isLogin=sessionStorage.getItem("isLogin")
        let userType=sessionStorage.getItem("userType")
        let nav=useNavigate()
    return(
        <>
     <RoomCredHeader/>
        <Outlet/>
       <Footer/>
            </>

    )
}