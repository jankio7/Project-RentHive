import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function AdminLayout(){
     let isLogin=sessionStorage.getItem("isLogin")
        let userType=sessionStorage.getItem("userType")
        let nav=useNavigate()
        return(
        <>
        <AdminHeader/>
           {/* <main style={{ marginTop: "80px", padding: "20px" }}> */}
        <Outlet/>
        {/* </main> */}
        <Footer/>
         
        </>
    );
}