import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminHeader(){
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
                    <Link to="/admin">Home</Link>
                  </li>
                  
                  <li className="dropdown">
                    <Link to = " "> City <i className="=bi bi-chevron-dropdown toggle-dropdown-indicator">
                      </i></Link>
                 
                
                    <ul>
                      <li><Link to="/admin/city/add">Add </Link></li>
                      <li><Link to="/admin/city/manage">Manage</Link></li>
                    </ul>
                    </li>

   <li className="dropdown">
                    <Link to = " ">Manage<i className="=bi bi-chevron-dropdown toggle-dropdown-indicator">
                      </i></Link>
                 
                
                    <ul>
                      <li><Link to="/admin/PGowners">PGowners</Link></li>
                      <li><Link to="/admin/property">Property</Link></li>
                      <li><Link to="/admin/bookings">Bookings</Link></li>
                    </ul>
                    </li>

                    
  {/* <li> */}
                    {/* <Link to="/admin/ManagePGowners">Manage PGowners</Link>
                  </li>
                  <li>
                    <Link to="/admin/Manageproperty">Manage property</Link>
                  </li> */}
                  <li>
                    <Link to="/admin/Users">Users</Link>
                  </li>
                 
                      {/* <li>
                    <Link to="/admin/Managebookings">Manage Bookings</Link>
                  </li> */}
                   {
                    isLogin? (
                    <li className="nav-items">
                    <Link to ={"#"} onClick={handleLogout} className="nav-link">Logout</Link>
                  </li>      )
                  : (
                  <li className="nav-items">
                    <Link to ="/login">Login</Link>
                  </li>
                   )  }
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list" />
              </nav>
            </div>
          </header>
                </>
       
    )
}