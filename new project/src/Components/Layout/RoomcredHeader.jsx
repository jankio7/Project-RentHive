import { Link, useNavigate } from "react-router-dom";

export default function RoomCredHeader() {
  let isLogin = sessionStorage.getItem("isLogin");
  const nav = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    nav("/login");
  };

  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="#" className="logo d-flex align-items-center">
            <h1 className="sitename">
              Rent<span>Hive</span>
            </h1>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link to="admin/roomcred/view">View Rooms</Link>
              </li>

              {isLogin ? (
                <li className="nav-items">
                  <Link to="#" onClick={handleLogout} className="nav-link">
                    Logout
                  </Link>
                </li>
              ) : (
                <li className="nav-items">
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
        </div>
      </header>
    </>
  );
}
