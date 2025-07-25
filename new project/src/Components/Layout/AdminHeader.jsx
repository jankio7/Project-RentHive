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
                {/* Uncomment the line below if you also wish to use an image logo */}
                {/* <img src="assets/img/logo.png" alt=""> */}
                <h1 className="sitename">
                  Rent<span>Hive</span>
                </h1>
              </a>
              <nav id="navmenu" className="navmenu">
                <ul>
                  {/* <li>
                    <Link to="index.html" className="active">
                      Home
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/admin/dashboard">AdminDashboard</Link>
                  </li>
                  <li>
                    <Link to="/admin/Addcity">Add City</Link>
                  </li>
                  <li>
                    <Link to="/admin/Managecity">Manage city</Link>
                  </li>
                  <li>
                    <Link to="/admin/ManagePGowners">Manage PGowner</Link>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Dropdown</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul>
                      <li>
                        <a href="#">Dropdown 1</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">
                          <span>Deep Dropdown</span>{" "}
                          <i className="bi bi-chevron-down toggle-dropdown" />
                        </a>
                        <ul>
                          <li>
                            <a href="#">Deep Dropdown 1</a>
                          </li>
                          <li>
                            <a href="#">Deep Dropdown 2</a>
                          </li>
                          <li>
                            <a href="#">Deep Dropdown 3</a>
                          </li>
                          <li>
                            <a href="#">Deep Dropdown 4</a>
                          </li>
                          <li>
                            <a href="#">Deep Dropdown 5</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Dropdown 2</a>
                      </li>
                      <li>
                        <a href="#">Dropdown 3</a>
                      </li>
                      <li>
                        <a href="#">Dropdown 4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to ="/admin/Manage property">Manage property</Link>
                  </li>
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