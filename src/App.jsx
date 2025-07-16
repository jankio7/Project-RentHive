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
import Register from "./Components/auth/Register";

function App(){
  return(
    <>
    <BrowserRouter>
        <Routes>
             <Route path="/" element={<Layout/>}>
               <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
             <Route path="/properties" element={<Properties/>}/>
              <Route path="/properitysingle" element={<Propertysingle/>}/>
              <Route path="/services" element={<Services/>}/>
              <Route path="/servicesdetails" element={<Servicedetails/>}/>
              <Route path="/agents" element={<Agents/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              </Route>
           
             <Route path="/*" element={<Error/>}/>

            
          </Routes>
        </BrowserRouter>
    </>
  )
}
export default App