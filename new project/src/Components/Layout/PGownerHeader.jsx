import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2";



export default function PgownerHeader(){
  let isLogin=sessionStorage.getItem("isLogin")
  const nav=useNavigate()
  const handleLogout=()=>{
     Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear()
        nav("/login")
        Swal.fire({
          title: "Logout!",
          text: "Logout successfully.",
          icon: "success"
        });
      }
    });
  }
    return(
        <>
          
      <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
              <a href="index.html" className="logo d-flex align-items-center">
       
        <h1 className="sitename">
          Rent<span>Hive</span>
        </h1>
      </a>
      <nav id="navmenu" className="navmenu">
        <ul>
           <li>
            <Link to="/pgowner">Home</Link>
          </li>
          <li className="dropdown">
                    <Link to = " ">   Property <i className="=bi bi-chevron-dropdown toggle-dropdown-indicator">
                      </i></Link>
                 
                
                    <ul>
                      <li><Link to="/Pgowner/property/add">Add property </Link></li>
                      <li><Link to="/Pgowner/property/manage">Manage property </Link></li>
                    </ul>
                    </li> 
            
        
          <li>
            <Link to="/Pgowner/Bookings">Bookings</Link>
          </li>
         
          {
          isLogin?
         <li className="nav-item">
                        <Link to={"#"} onClick={handleLogout} className="nav-link">
                        Logout {name}
                        </Link>
                    </li>
                    :
                    <li className="nav-item">
                        <Link to={"/login"} className="nav-link">
                        Login
                        </Link>
                    </li>
          }
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
      </nav>
    </div>
  </header>
        </>
    )
}