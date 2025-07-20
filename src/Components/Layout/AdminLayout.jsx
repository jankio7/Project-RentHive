import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Footer from "./Footer";

export default function AdminLayout(){
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