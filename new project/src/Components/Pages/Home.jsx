export default function Home(){
    return(
        <>
  {/* <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center">
        <h1 className="sitename">
          Estate<span>Agencysss</span>
        </h1>
      </a>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a href="/index" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/about">About</a>
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
    {/* Hero Section */}
    <section id="hero" className="hero section dark-background">
      <div
        id="hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval={5000}
      >
        <div className="carousel-item active">
          <img src="/assets/img/hero-carousel/hero-carousel-1.jpg" alt="" />
          <div className="carousel-container">
            <div>
              <p>Doral, Florida</p>
              <h2>
                <span>204</span> Olive Road Two
              </h2>
              <a href="property-single.html" className="btn-get-started">
                rent | $ 12.000
              </a>
            </div>
          </div>
        </div>
        {/* End Carousel Item */}
        <div className="carousel-item">
          <img src="/assets/img/hero-carousel/hero-carousel-2.jpg" alt="" />
          <div className="carousel-container">
            <div>
              <p>Doral, Florida</p>
              <h2>
                <span>247</span> Venda Road Five
              </h2>
              <a href="property-single.html" className="btn-get-started">
                sale | $ 356.000
              </a>
            </div>
          </div>
        </div>
        {/* End Carousel Item */}
        <div className="carousel-item">
          <img src="/assets/img/hero-carousel/hero-carousel-3.jpg" alt="" />
          <div className="carousel-container">
            <div>
              <p>Doral, Florida</p>
              <h2>
                <span>247</span> Vitra Road three
              </h2>
              <a href="property-single.html" className="btn-get-started">
                rent | $ 3.000
              </a>
            </div>
          </div>
        </div>
        {/* End Carousel Item */}
        <a
          className="carousel-control-prev"
          href="#hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          />
        </a>
        <a
          className="carousel-control-next"
          href="#hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          />
        </a>
        <ol className="carousel-indicators" />
      </div>
    </section>
    {/* /Hero Section */}
    {/* Services Section */}
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" >
        <h2>Our Services</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6"
            
          >
            <div className="service-item  position-relative">
              <div className="icon">
                <i className="bi bi-activity" />
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Nesciunt Mete</h3>
              </a>
              <p>
                Provident nihil minus qui consequatur non omnis maiores. Eos
                accusantium minus dolores iure perferendis tempore et
                consequatur.
              </p>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6"
          
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-broadcast" />
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Eosle Commodi</h3>
              </a>
              <p>
                Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
                Libero corrupti neque eum hic non ut nesciunt dolorem.
              </p>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6"
            
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-easel" />
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Ledo Markt</h3>
              </a>
              <p>
                Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus
                ea aut. Vel qui id voluptas adipisci eos earum corrupti.
              </p>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6"
           
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-bounding-box-circles" />
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Asperiores Commodit</h3>
              </a>
              <p>
                Non et temporibus minus omnis sed dolor esse consequatur.
                Cupiditate sed error ea fuga sit provident adipisci neque.
              </p>
              <a href="service-details.html" className="stretched-link" />
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6"
        
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-calendar4-week" />
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Velit Doloremque</h3>
              </a>
              <p>
                Cumque et suscipit saepe. Est maiores autem enim facilis ut aut
                ipsam corporis aut. Sed animi at autem alias eius labore.
              </p>
              <a href="service-details.html" className="stretched-link" />
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6"
         
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-chat-square-text" />
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Dolori Architecto</h3>
              </a>
              <p>
                Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque
                non et debitis iure. Corrupti recusandae ducimus enim.
              </p>
              <a href="service-details.html" className="stretched-link" />
            </div>
          </div>
          {/* End Service Item */}
        </div>
      </div>
    </section>
    {/* /Services Section */}
    {/* Agents Section */}
    <section id="agents" className="agents section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>Our Agents</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row gy-5">
          <div
            className="col-lg-4 col-md-6"
            
          >
            <div className="member">
              <div className="pic">
                <img
                  src="/assets/img/team/team-1.jpg"
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
          
          >
            <div className="member">
              <div className="pic">
                <img
                  src="/assets/img/team/team-2.jpg"
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
            
          >
            <div className="member">
              <div className="pic">
                <img
                  src="/assets/img/team/team-3.jpg"
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
    {/* Testimonials Section */}
    <section id="testimonials" className="testimonials section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>Testimonials</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" >
        <div className="swiper init-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>
                <p>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                </p>
                <div className="profile mt-auto">
                  <img
                    src="/assets/img/testimonials/testimonials-1.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </div>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>
                <p>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                </p>
                <div className="profile mt-auto">
                  <img
                    src="/assets/img/testimonials/testimonials-2.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>
                <p>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                </p>
                <div className="profile mt-auto">
                  <img
                    src="/assets/img/testimonials/testimonials-3.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                </div>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>
                <p>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                </p>
                <div className="profile mt-auto">
                  <img
                    src="a/ssets/img/testimonials/testimonials-4.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                </div>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>
                <p>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                </p>
                <div className="profile mt-auto">
                  <img
                    src="/assets/img/testimonials/testimonials-5.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div>
            </div>
            {/* End testimonial item */}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
    {/* /Testimonials Section */}
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