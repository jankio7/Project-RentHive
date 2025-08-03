export default function Contact(){
    return(
        <>
  <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center">
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
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
            <a href="agents.html">Agents</a>
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
            <a href="contact.html" className="active">
              Contact
            </a>
          </li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
      </nav>
    </div>
  </header>
  <main className="main">
    {/* Page Title */}
    <div className="page-title" data-aos="fade">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>Contact</h1>
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
            <li className="current">Contact</li>
          </ol>
        </div>
      </nav>
    </div>
    {/* End Page Title */}
    {/* Contact Section */}
    <section id="contact" className="contact section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="mb-4" data-aos="fade-up" data-aos-delay={200}>
          <iframe
            style={{ border: 0, width: "100%", height: 270 }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
            frameBorder={0}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        {/* End Google Maps */}
        <div className="row gy-4">
          <div className="col-lg-4">
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <i className="bi bi-geo-alt flex-shrink-0" />
              <div>
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            {/* End Info Item */}
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <i className="bi bi-telephone flex-shrink-0" />
              <div>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            {/* End Info Item */}
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <i className="bi bi-envelope flex-shrink-0" />
              <div>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>
            {/* End Info Item */}
          </div>
          <div className="col-lg-8">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section>
    {/* /Contact Section */}
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
      <div className="credits"> */}
       
        {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
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