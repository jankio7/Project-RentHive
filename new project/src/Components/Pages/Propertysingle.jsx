export default function Propertysingle(){
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
            <a href="contact.html">Contact</a>
          </li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
      </nav>
    </div>
  </header> */}
  <main className="main">
    {/* Page Title */}
    <div className="page-title">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>Property Single</h1>
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
            <li className="current">Property Single</li>
          </ol>
        </div>
      </nav>
    </div>
    {/* End Page Title */}
    {/* Real Estate 2 Section */}
    <section id="real-estate-2" className="real-estate-2 section">
      <div className="container" >
        <div className="portfolio-details-slider swiper init-swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide">
              <img
                src="assets/img/property-slide/property-slide-1.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/property-slide/property-slide-2.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/property-slide/property-slide-3.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
          <div className="swiper-pagination" />
        </div>
        <div className="row justify-content-between gy-4 mt-4">
          <div className="col-lg-8" >
            <div className="portfolio-description">
              <h2>This is an example of propery details</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                itaque inventore commodi labore quia quia. Exercitationem
                repudiandae officiis neque suscipit non officia eaque itaque
                enim. Voluptatem officia accusantium nesciunt est omnis tempora
                consectetur dignissimos. Sequi nulla at esse enim cum deserunt
                eius.
              </p>
              <p>
                Amet consequatur qui dolore veniam voluptatem voluptatem sit.
                Non aspernatur atque natus ut cum nam et. Praesentium error
                dolores rerum minus sequi quia veritatis eum. Eos et doloribus
                doloremque nesciunt molestiae laboriosam.
              </p>
              <p>
                Impedit ipsum quae et aliquid doloribus et voluptatem quasi.
                Perspiciatis occaecati earum et magnam animi. Quibusdam non qui
                ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus
                deserunt assumenda tempore. Delectus voluptas necessitatibus
                est.
              </p>
              <p>
                Sunt voluptatum sapiente facilis quo odio aut ipsum repellat
                debitis. Molestiae et autem libero. Explicabo et quod
                necessitatibus similique quis dolor eum. Numquam eaque
                praesentium rem et qui nesciunt.
              </p>
              <div className="testimonial-item">
                <p>
                  <span>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore
                    eram velit sunt aliqua noster fugiat irure amet legam anim
                    culpa.
                  </span>
                </p>
                <div>
                  <img
                    src="assets/img/testimonials/testimonials-2.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Sara Wilsson</h3>
                  <h4>Agent</h4>
                </div>
              </div>
            </div>
            {/* End Portfolio Description */}
            {/* Tabs */}
            <ul className="nav nav-pills mb-3">
              <li>
                <a
                  className="nav-link active"
                  data-bs-toggle="pill"
                  href="#real-estate-2-tab1"
                >
                  Video
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  data-bs-toggle="pill"
                  href="#real-estate-2-tab2"
                >
                  Floor Plans
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  data-bs-toggle="pill"
                  href="#real-estate-2-tab3"
                >
                  Location
                </a>
              </li>
            </ul>
            {/* End Tabs */}
            {/* Tab Content */}
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="real-estate-2-tab1"
              ></div>
              {/* End Tab 1 Content */}
              <div className="tab-pane fade" id="real-estate-2-tab2">
                <img
                  src="assets/img/floor-plan.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              {/* End Tab 2 Content */}
              <div className="tab-pane fade" id="real-estate-2-tab3">
                <iframe
                  style={{ border: 0, width: "100%", height: 400 }}
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                  frameBorder={0}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              {/* End Tab 3 Content */}
            </div>
            {/* End Tab Content */}
          </div>
          <div className="col-lg-3" >
            <div className="portfolio-info">
              <h3>Quick Summary</h3>
              <ul>
                <li>
                  <strong>Property ID:</strong> 1134n
                </li>
                <li>
                  <strong>Location:</strong> Chicago, IL 606543
                </li>
                <li>
                  <strong>Property Type:</strong> House
                </li>
                <li>
                  <strong>Status:</strong> Sale
                </li>
                <li>
                  <strong>Area:</strong>{" "}
                  <span>
                    340m <sup>2</sup>
                  </span>
                </li>
                <li>
                  <strong>Beds:</strong> 4
                </li>
                <li>
                  <strong>Baths:</strong> 1
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Real Estate 2 Section */}
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
{/*        
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