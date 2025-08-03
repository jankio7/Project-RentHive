export default function Agents(){
    return(
        <>
  {/* <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center">
      
        <h1 className="sitename">
          Estate<span>Agency</span>
        </h1>
      </a>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="services.html">Services</a>
          </li>
          <li>
            <a href="properties.html">Properties</a>
          </li>
          <li>
            <a href="agents.html" className="active">
              Agents
            </a>
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
            <a href="contact.html">Contact</a>
          </li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
      </nav>
    </div>
  </header> */}
  <main className="main">
    {/* Page Title */}
    <div className="page-title" data-aos="fade">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>Agents</h1>
              <p className="mb-0">
                Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                quaerat ipsum dolorem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="current">Agents</li>
          </ol>
        </div>
      </nav>
    </div>
    {/* End Page Title */}
    {/* Agents Section */}
    <section id="agents" className="agents section">
      <div className="container">
        <div className="row gy-5">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="member">
              <div className="pic">
                <img
                  src="assets/img/team/team-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Member */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="member">
              <div className="pic">
                <img
                  src="assets/img/team/team-2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Rent Manager</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Member */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="member">
              <div className="pic">
                <img
                  src="assets/img/team/team-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>
                  Sale manager
                  <br />
                </span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Member */}
        </div>
      </div>
    </section>
    {/* /Agents Section */}
  </main>
  {/* <footer id="footer" className="footer light-background">
    <div className="container">
      <div className="row gy-3">
        <div className="col-lg-3 col-md-6 d-flex">
          <i className="bi bi-geo-alt icon" />
          <div className="address">
            <h4>Address</h4>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p />
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex">
          <i className="bi bi-telephone icon" />
          <div>
            <h4>Contact</h4>
            <p>
              <strong>Phone:</strong> <span>+1 5589 55488 55</span>
              <br />
              <strong>Email:</strong> <span>info@example.com</span>
              <br />
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex">
          <i className="bi bi-clock icon" />
          <div>
            <h4>Opening Hours</h4>
            <p>
              <strong>Mon-Sat:</strong> <span>11AM - 23PM</span>
              <br />
              <strong>Sunday</strong>: <span>Closed</span>
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4>Follow Us</h4>
          <div className="social-links d-flex">
            <a href="#" className="twitter">
              <i className="bi bi-twitter-x" />
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram" />
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="container copyright text-center mt-4">
      <p>
        © <span>Copyright</span>{" "}
        <strong className="px-1 sitename">EstateAgency</strong>{" "}
        <span>All Rights Reserved</span>
      </p>
      <div className="credits">
        
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer> */}
  {/* Scroll Top */}
  <a
    href="#"
    id="scroll-top"
    className="scroll-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
</>

    )
}