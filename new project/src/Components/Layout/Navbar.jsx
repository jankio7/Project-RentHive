import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2";



export default function Navbar(){
  let isLogin=sessionStorage.getItem("isLogin")
  let name=sessionStorage.getItem("name")
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
          {/* <header id="header" className="header d-flex align-items-center fixed-top"> */}
    <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center">
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <h1 className="sitename">
          Rent<span>Hive</span>
        </h1>
      </a>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/users/viewcity">City</Link>
          </li>
          <li>
            <Link to="/viewpg">Rooms</Link>
          </li>
        
          {/* <li>
            <Link to="/agents">Agents</Link>
          </li>
     
          <li>
            <Link to ="contact">Contact</Link>
          </li> */}
          {
          isLogin?
          <>
          <li>
            <Link to="/my-booking">Booking</Link>
          </li>
          <li className="nav-item">
              <Link to={"#"} onClick={handleLogout} className="nav-link">
              Logout {name}
              </Link>
          </li>
          </>
                    :
                    <>
                    <li className="nav-item">
                        <Link to={"/login"} className="nav-link">
                        Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/register"} className="nav-link">
                        Register
                        </Link>
                    </li>
                    </>
          }
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
      </nav>
    </div>
  {/* </header> */}
        </>
    )
}