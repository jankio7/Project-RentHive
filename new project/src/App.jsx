import About from "./Components/Pages/About"
import Home from "./Components/Pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Services from "./Components/Pages/Services";
import Servicedetails from "./Components/Pages/Servicesdetails";
import Propertysingle from "./Components/Pages/Propertysingle";
import Properties from "./Components/Pages/Properties";
import Agents from "./Components/Pages/Agents";
import Contact from "./Components/Pages/Contact";
import Error from "./Components/Pages/Error";
import Login from "./Components/auth/Login";
import AdminLayout from "./Components/Layout/AdminLayout";
import Register from "./Components/auth/Register";
import { ToastContainer } from "react-toastify";
import PGowner from "./Components/auth/PGowner";

import Update from "./Components/admin/city/Update";
import Dashboard from "./Components/admin/Dashboard";
import RoomcredLayout from "./Components/Layout/RoomcredLayout";
import Viewrooms from "./Components/admin/roomcred/Viewrooms";
import PGowners from "./Components/admin/pages/PGowners";
import Property from "./Components/admin/pages/Property";
import Users from "./Components/admin/pages/Users";
import Bookings from "./Components/admin/pages/Bookings";
import Add from "./Components/admin/city/Add";
import Manage from "./Components/admin/city/Manage";
import PgownerLayout from "./Components/Layout/PGownerLayout";
import Addproperty from "./Components/PGowner/property/Addproperty";
import Manageproperty from "./Components/PGowner/property/Manageproperty";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
             <Route path="about" element={<About />} />
            <Route path="properties" element={<Properties />} />
            <Route path="properitysingle" element={<Propertysingle />} />
            <Route path="services" element={<Services />} />
            <Route path="servicesdetails" element={<Servicedetails />} />
            <Route path="agents" element={<Agents />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="pgowner" element={<PGowner />} />
           
          </Route>


        
        <Route path="/admin" element={<AdminLayout />}>
  <Route index element={<Dashboard />} />

  <Route path="city/add" element={<Add />} />
  <Route path="city/manage" element={<Manage />} />
  <Route path="city/update/:id" element={<Update />} />

 <Route path="users" element={<Users/>}/>

 
  <Route path="PGowners" element={<PGowners />} />
  <Route path="Property" element={<Property/>}/>
   <Route path="bookings" element={<Bookings/>}/>
</Route>

     
       <Route path="/admin/roomcred" element={<RoomcredLayout />}>

         <Route path="viewrooms" element={<Viewrooms/>}/>
        </Route> 
       
 
    
 
        <Route path="pgowner" element={<PgownerLayout />}>
  <Route index element={<Dashboard />} />

  <Route path="property/add property" element={<Addproperty/>} />
  <Route path="property/manage property" element={<Manageproperty/>}/>
  {/* <Route path="city/manage" element={<Manage />} /> */}
  {/* <Route path="city/update/:id" element={<Update />} /> */}
</Route>
          



          <Route path="/*" element={<Error />} />


        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}
export default App