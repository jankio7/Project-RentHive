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
import AddCity from "./Components/admin/city/AddCity";
import ManageCity from "./Components/admin/city/ManageCity";
import Update from "./Components/admin/city/Update";
import ManagePGowners from "./Components/admin/ManagePGowner";
import ManageUsers from "./Components/admin/users/ManageUsers"
import Dashboard from "./Components/admin/Dashboard";
import RoomcredLayout from "./Components/Layout/RoomcredLayout";
import AddRoom from "./Components/admin/Roomcred/AddRoom";
import Viewrooms from "./Components/admin/roomcred/Viewrooms";






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
            <Route index element={<Dashboard/>}/>
             
             <Route path="city/add" element={<AddCity/>}/>
             <Route path="city/manage" element={<ManageCity/>}/>
             <Route path="city/update/:id" element={<Update/>}/>
            <Route path="ManagePGowners" element={<ManagePGowners/>}/>
             <Route path="users">
           <Route path="manageUsers" element={<ManageUsers/>} />
          </Route>
        </Route>


     
      <Route path="/admin/roomcred" element={<RoomcredLayout />}>
  <Route path="addroom" element={<AddRoom/>} />
  <Route path="viewroom" element={<Viewrooms/>}/>
</Route>
     
      
      
  

          



          <Route path="/*" element={<Error />} />


        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}
export default App