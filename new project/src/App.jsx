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
import Register from "./Components/auth/UserRegister";
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
import ViewCity from "./Components/users/ViewCity";
import PGCard from "./Components/users/ViewPg";
import PGDetails from "./Components/users/PgDetails";
import ViewBooking from "./Components/users/ViewBooking";
import ViewOwnerBooking from "./Components/PGowner/pages/ViewOwnerBooking";
import PgDashboard from "./Components/PGowner/pages/PgDashboard";
import Updateproperty from "./Components/PGowner/property/Updateproperty";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
             {/* <Route path="about" element={<About />} />
            <Route path="properties" element={<Properties />} />
            <Route path="properitysingle" element={<Propertysingle />} />
            <Route path="services" element={<Services />} /> */}
            {/* <Route path="servicesdetails" element={<Servicedetails />} />
            <Route path="agents" element={<Agents />} />
            <Route path="contact" element={<Contact />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="pg-register" element={<PGowner />} />
             <Route path="users/viewcity" element={<ViewCity/>}/>
             <Route path="viewpg/:cityId" element={<PGCard/>}/>
             <Route path="viewpg" element={<PGCard/>}/>
             <Route path="viewpgdetails/:id" element={<PGDetails/>}/>
             <Route path="my-booking" element={<ViewBooking/>}/>
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
    <Route path="viewpgdetails/:id" element={<PGDetails/>}/>
</Route>

     
       <Route path="/admin/roomcred" element={<RoomcredLayout />}>

         <Route path="viewrooms" element={<Viewrooms/>}/>
        </Route> 
       
 
    
 
        <Route path="pgowner" element={<PgownerLayout />}>
          <Route index element={<PgDashboard />} />

          <Route path="property/add" element={<Addproperty/>} />
          <Route path="property/manage" element={<Manageproperty/>}/>
          <Route path="property/update/:id" element={<Updateproperty/>}/>
          {/* <Route path="city/manage" element={<Manage />} /> */}
          {/* <Route path="city/update/:id" element={<Update />} /> */}
          <Route path="bookings" element={<ViewOwnerBooking/>}/>
        <Route path="viewpgdetails/:id" element={<PGDetails/>}/>
      </Route>
          



          <Route path="/*" element={<Error />} />


        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}
export default App