function App() {
  return (
    <>
  {/*====== HEADER PART START ======*/}
  <header id="home" className="header-area">
    <div className="navigation fixed-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="index.html">
                <img src="assets/images/logo.png" alt="Logo" />
              </a>{" "}
              {/* Logo */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon" />
                <span className="toggler-icon" />
                <span className="toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="page-scroll" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#service">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#work">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#blog">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>{" "}
              {/* navbar collapse */}
            </nav>{" "}
            {/* navbar */}
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
    </div>{" "}
    {/* navigation */}
    <div id="parallax" className="header-content d-flex align-items-center">
      <div className="header-shape shape-one layer" data-depth="0.10">
        <img src="assets/images/banner/shape/shape-1.png" alt="Shape" />
      </div>{" "}
      {/* header shape */}
      <div className="header-shape shape-tow layer" data-depth="0.30">
        <img src="assets/images/banner/shape/shape-2.png" alt="Shape" />
      </div>{" "}
      {/* header shape */}
      <div className="header-shape shape-three layer" data-depth="0.40">
        <img src="assets/images/banner/shape/shape-3.png" alt="Shape" />
      </div>{" "}
      {/* header shape */}
      <div className="header-shape shape-fore layer" data-depth="0.60">
        <img src="assets/images/banner/shape/shape-2.png" alt="Shape" />
      </div>{" "}
      {/* header shape */}
      <div className="header-shape shape-five layer" data-depth="0.20">
        <img src="assets/images/banner/shape/shape-1.png" alt="Shape" />
      </div>{" "}
      {/* header shape */}
      <div className="header-shape shape-six layer" data-depth="0.15">
        <img src="assets/images/banner/shape/shape-4.png" alt="Shape" />
      </div>{" "}
      {/* header shape */}
      <div className="header-shape shape-seven layer" data-depth="0.50">
        <img src="assets/images/banner/shape/shape-5.png" alt="Shape" />
      </div>{" "}
      {/* header shape */}
      <div className="header-shape shape-eight layer" data-depth="0.40">
        <img src="assets/images/banner/shape/shape-3.png" alt="Shape" />
      </div>{" "}
      {/* header shape */}
      <div className="header-shape shape-nine layer" data-depth="0.20">
        <img src="assets/images/banner/shape/shape-6.png" alt="Shape" />
      </div>{" "}
      {/* header shape */}
      <div className="header-shape shape-ten layer" data-depth="0.30">
        <img src="assets/images/banner/shape/shape-3.png" alt="Shape" />
      </div>{" "}
      {/* header shape */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="header-content-right">
              <h4 className="sub-title">Hello, I’m</h4>
              <h1 className="title">Mark Parker</h1>
              <p>A Freelance UI Designer &amp; Web Developer</p>
              <a className="main-btn" href="#work">
                View my Work
              </a>
            </div>{" "}
            {/* header content right */}
          </div>
          <div className="col-lg-6 offset-xl-1">
            <div className="header-image d-none d-lg-block">
              <img src="assets/images/banner/hero.png" alt="hero" />
            </div>{" "}
            {/* header image */}
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
      <div className="header-social">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-social-icon">
                <ul>
                  <li>
                    <a href="#">
                      <i className="lni-facebook-filled" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-twitter-original" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-behance-original" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-linkedin-original" />
                    </a>
                  </li>
                </ul>
              </div>{" "}
              {/* header social */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </div>{" "}
      {/* header social */}
    </div>{" "}
    {/* header content */}
  </header>
  {/*====== HEADER PART ENDS ======*/}
  {/*====== ABOUT PART START ======*/}
  <section id="about" className="about-area pt-125 pb-130">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title text-center">
            <h2 className="title">About Me</h2>
            <p>
              Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam
              tempus, nunc id efficitur sagittis, urna est ultricies eros, ac
              porta sem turpis quis leo.
            </p>
          </div>{" "}
          {/* section title */}
        </div>
      </div>{" "}
      {/* row */}
      <div className="row">
        <div className="col-lg-6">
          <div className="about-content mt-50">
            <h5 className="about-title">Hi There! I'm Mark Parker</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul className="clearfix">
              <li>
                <div className="single-info d-flex align-items-center">
                  <div className="info-icon">
                    <i className="lni-calendar" />
                  </div>
                  <div className="info-text">
                    <p>
                      <span>Date of birth:</span> 8 June 1995
                    </p>
                  </div>
                </div>{" "}
                {/* single info */}
              </li>
              <li>
                <div className="single-info d-flex align-items-center">
                  <div className="info-icon">
                    <i className="lni-envelope" />
                  </div>
                  <div className="info-text">
                    <p>
                      <span>Email:</span> parker@mysite.com
                    </p>
                  </div>
                </div>{" "}
                {/* single info */}
              </li>
              <li>
                <div className="single-info d-flex align-items-center">
                  <div className="info-icon">
                    <i className="lni-phone-handset" />
                  </div>
                  <div className="info-text">
                    <p>
                      <span>Phone:</span> +1-202-555-0138
                    </p>
                  </div>
                </div>{" "}
                {/* single info */}
              </li>
              <li>
                <div className="single-info d-flex align-items-center">
                  <div className="info-icon">
                    <i className="lni-map-marker" />
                  </div>
                  <div className="info-text">
                    <p>
                      <span>Location:</span> 4373, El Centro, CA
                    </p>
                  </div>
                </div>{" "}
                {/* single info */}
              </li>
            </ul>
          </div>{" "}
          {/* about content */}
        </div>
        <div className="col-xl-5 offset-xl-1 col-lg-6">
          <div className="about-skills pt-25">
            <div className="skill-item mt-25">
              <div className="skill-header">
                <h6 className="skill-title">HTML</h6>
                <div className="skill-percentage">
                  <div className="count-box counted">
                    <span className="counter">80</span>
                  </div>
                  %
                </div>
              </div>
              <div className="skill-bar">
                <div className="bar-inner">
                  <div className="bar progress-line" data-width={80} />
                </div>
              </div>
            </div>{" "}
            {/* skill item */}
            <div className="skill-item mt-25">
              <div className="skill-header">
                <h6 className="skill-title">CSS</h6>
                <div className="skill-percentage">
                  <div className="count-box counted">
                    <span className="counter">60</span>
                  </div>
                  %
                </div>
              </div>
              <div className="skill-bar">
                <div className="bar-inner">
                  <div className="bar progress-line" data-width={60} />
                </div>
              </div>
            </div>{" "}
            {/* skill item */}
            <div className="skill-item mt-25">
              <div className="skill-header">
                <h6 className="skill-title">Photoshop</h6>
                <div className="skill-percentage">
                  <div className="count-box counted">
                    <span className="counter">50</span>
                  </div>
                  %
                </div>
              </div>
              <div className="skill-bar">
                <div className="bar-inner">
                  <div className="bar progress-line" data-width={50} />
                </div>
              </div>
            </div>{" "}
            {/* skill item */}
            <div className="skill-item mt-25">
              <div className="skill-header">
                <h6 className="skill-title">Sketch</h6>
                <div className="skill-percentage">
                  <div className="count-box counted">
                    <span className="counter">90</span>
                  </div>
                  %
                </div>
              </div>
              <div className="skill-bar">
                <div className="bar-inner">
                  <div className="bar progress-line" data-width={90} />
                </div>
              </div>
            </div>{" "}
            {/* skill item */}
          </div>{" "}
          {/* about skills */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== ABOUT PART ENDS ======*/}
  {/*====== SERVICES PART START ======*/}
  <section id="service" className="services-area gray-bg pt-125 pb-130">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title text-center pb-30">
            <h2 className="title">My Services</h2>
            <p>
              Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam
              tempus, nunc id efficitur sagittis, urna est ultricies eros, ac
              porta sem turpis quis leo.
            </p>
          </div>{" "}
          {/* section title */}
        </div>
      </div>{" "}
      {/* row */}
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="single-service text-center mt-30">
            <div className="service-icon">
              <i className="lni-code-alt" />
            </div>
            <div className="service-content">
              <h4 className="service-title">
                <a href="#">Web Design</a>
              </h4>
              <p>
                Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum
                lacus quis blandit enimdicta sunt.
              </p>
            </div>
          </div>{" "}
          {/* single service */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="single-service text-center mt-30">
            <div className="service-icon">
              <i className="lni-color-pallet" />
            </div>
            <div className="service-content">
              <h4 className="service-title">
                <a href="#contact">Graphic Design</a>
              </h4>
              <p>
                Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum
                lacus quis blandit enimdicta sunt.
              </p>
            </div>
          </div>{" "}
          {/* single service */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="single-service text-center mt-30">
            <div className="service-icon">
              <i className="lni-mobile" />
            </div>
            <div className="service-content">
              <h4 className="service-title">
                <a href="#">App Design</a>
              </h4>
              <p>
                Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum
                lacus quis blandit enimdicta sunt.
              </p>
            </div>
          </div>{" "}
          {/* single service */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="single-service text-center mt-30">
            <div className="service-icon">
              <i className="lni-vector" />
            </div>
            <div className="service-content">
              <h4 className="service-title">
                <a href="#">Illustration Design</a>
              </h4>
              <p>
                Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum
                lacus quis blandit enimdicta sunt.
              </p>
            </div>
          </div>{" "}
          {/* single service */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="single-service text-center mt-30">
            <div className="service-icon">
              <i className="lni-website" />
            </div>
            <div className="service-content">
              <h4 className="service-title">
                <a href="#">Web Development</a>
              </h4>
              <p>
                Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum
                lacus quis blandit enimdicta sunt.
              </p>
            </div>
          </div>{" "}
          {/* single service */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="single-service text-center mt-30">
            <div className="service-icon">
              <i className="lni-support" />
            </div>
            <div className="service-content">
              <h4 className="service-title">
                <a href="#">Consultancy and Support</a>
              </h4>
              <p>
                Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum
                lacus quis blandit enimdicta sunt.
              </p>
            </div>
          </div>{" "}
          {/* single service */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== SERVICES PART ENDS ======*/}
  {/*====== CALL TO ACTION PART START ======*/}
  <section
    id="call-to-action"
    className="call-to-action pt-125 pb-130 bg_cover"
    style={{ backgroundImage: "url(assets/images/call-to-action.jpg)" }}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-9">
          <div className="call-action-content text-center">
            <h2 className="action-title">
              You are Using Free Lite Version of Unfold
            </h2>
            <p>
              Please, purchase full version of Unfold to get all pages and
              features. Including credits removal, permission to use in
              commercial projects, working contact from, docs and support
            </p>
            <ul>
              <li>
                <a
                  className="main-btn custom"
                  rel="nofollow"
                  href="https://rebrand.ly/unfold-ud"
                >
                  Get Full Version
                </a>
              </li>
              <li>
                <a
                  className="main-btn custom-2"
                  rel="nofollow"
                  href="https://rebrand.ly/unfold-ud"
                >
                  View Details
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* call action content */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== CALL TO ACTION PART ENDS ======*/}
  {/*====== WORK PART START ======*/}
  <section id="work" className="work-area pt-125 pb-130">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="section-title pb-25">
            <h2 className="title">My Recent Works</h2>
            <p>
              Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam
              tempus, nunc id efficitur sagittis, urna est ultricies eros, ac
              porta sem turpis quis leo.
            </p>
          </div>{" "}
          {/* section title */}
        </div>
      </div>{" "}
      {/* row */}
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="single-work text-center mt-30">
            <div className="work-image">
              <img src="assets/images/work/w-1.jpg" alt="work" />
            </div>
            <div className="work-overlay">
              <div className="work-content">
                <h3 className="work-title">Product Design</h3>
                <ul>
                  <li>
                    <a
                      className="image-popup"
                      href="assets/images/work/w-1.jpg"
                    >
                      <i className="lni-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          {/* single work */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="single-work text-center mt-30">
            <div className="work-image">
              <img src="assets/images/work/w-2.jpg" alt="work" />
            </div>
            <div className="work-overlay">
              <div className="work-content">
                <h3 className="work-title">Product Design</h3>
                <ul>
                  <li>
                    <a
                      className="image-popup"
                      href="assets/images/work/w-2.jpg"
                    >
                      <i className="lni-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          {/* single work */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="single-work text-center mt-30">
            <div className="work-image">
              <img src="assets/images/work/w-3.jpg" alt="work" />
            </div>
            <div className="work-overlay">
              <div className="work-content">
                <h3 className="work-title">Product Design</h3>
                <ul>
                  <li>
                    <a
                      className="image-popup"
                      href="assets/images/work/w-3.jpg"
                    >
                      <i className="lni-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          {/* single work */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="single-work text-center mt-30">
            <div className="work-image">
              <img src="assets/images/work/w-4.jpg" alt="work" />
            </div>
            <div className="work-overlay">
              <div className="work-content">
                <h3 className="work-title">Product Design</h3>
                <ul>
                  <li>
                    <a
                      className="image-popup"
                      href="assets/images/work/w-4.jpg"
                    >
                      <i className="lni-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          {/* single work */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="single-work text-center mt-30">
            <div className="work-image">
              <img src="assets/images/work/w-5.jpg" alt="work" />
            </div>
            <div className="work-overlay">
              <div className="work-content">
                <h3 className="work-title">Product Design</h3>
                <ul>
                  <li>
                    <a
                      className="image-popup"
                      href="assets/images/work/w-5.jpg"
                    >
                      <i className="lni-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          {/* single work */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="single-work text-center mt-30">
            <div className="work-image">
              <img src="assets/images/work/w-6.jpg" alt="work" />
            </div>
            <div className="work-overlay">
              <div className="work-content">
                <h3 className="work-title">Product Design</h3>
                <ul>
                  <li>
                    <a
                      className="image-popup"
                      href="assets/images/work/w-6.jpg"
                    >
                      <i className="lni-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          {/* single work */}
        </div>
      </div>{" "}
      {/* row */}
      <div className="row">
        <div className="col-lg-12">
          <div className="work-more text-center mt-50">
            <a className="main-btn" href="#">
              more works
            </a>
          </div>{" "}
          {/* work more */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== WORK PART ENDS ======*/}
  {/*====== PRICING PART START ======*/}
  <section id="pricing" className="pricing-area gray-bg pt-125 pb-130">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title text-center pb-25">
            <h2 className="title">My Pricing Plans</h2>
            <p>
              Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam
              tempus, nunc id efficitur sagittis, urna est ultricies eros, ac
              porta sem turpis quis leo.
            </p>
          </div>{" "}
          {/* section title */}
        </div>
      </div>{" "}
      {/* row */}
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-8 col-sm-9">
          <div className="single-pricing text-center mt-30">
            <div className="pricing-package">
              <h4 className="package-title">Basic</h4>
            </div>
            <div className="pricing-body">
              <div className="pricing-text">
                <p>Simple project management for teams and small businesses.</p>
                <span className="price">$19.00</span>
              </div>
              <div className="pricing-list">
                <ul>
                  <li>Unlimited Tasks</li>
                  <li>Unlimited Public</li>
                  <li>Private Projects</li>
                  <li>Unlimited Teams</li>
                  <li>All Integrations</li>
                  <li>Public API</li>
                </ul>
              </div>
              <div className="pricing-btn">
                <a className="main-btn" href="#contact">
                  get quote
                </a>
              </div>
            </div>
          </div>{" "}
          {/* single pricing */}
        </div>
        <div className="col-lg-4 col-md-8 col-sm-9">
          <div className="single-pricing active text-center mt-30">
            <div className="pricing-package">
              <h4 className="package-title">Standard</h4>
            </div>
            <div className="pricing-body">
              <div className="pricing-text">
                <p>Simple project management for teams and small businesses.</p>
                <span className="price">$39.00</span>
              </div>
              <div className="pricing-list">
                <ul>
                  <li>Unlimited Tasks</li>
                  <li>Unlimited Public</li>
                  <li>Private Projects</li>
                  <li>Unlimited Teams</li>
                  <li>All Integrations</li>
                  <li>Public API</li>
                </ul>
              </div>
              <div className="pricing-btn">
                <a className="main-btn" href="#contact">
                  get quote
                </a>
              </div>
            </div>
          </div>{" "}
          {/* single pricing */}
        </div>
        <div className="col-lg-4 col-md-8 col-sm-9">
          <div className="single-pricing text-center mt-30">
            <div className="pricing-package">
              <h4 className="package-title">Premium</h4>
            </div>
            <div className="pricing-body">
              <div className="pricing-text">
                <p>Simple project management for teams and small businesses.</p>
                <span className="price">$29.00</span>
              </div>
              <div className="pricing-list">
                <ul>
                  <li>Unlimited Tasks</li>
                  <li>Unlimited Public</li>
                  <li>Private Projects</li>
                  <li>Unlimited Teams</li>
                  <li>All Integrations</li>
                  <li>Public API</li>
                </ul>
              </div>
              <div className="pricing-btn">
                <a className="main-btn" href="#contact">
                  get quote
                </a>
              </div>
            </div>
          </div>{" "}
          {/* single pricing */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== PRICING PART ENDS ======*/}
  {/*====== BLOG PART START ======*/}
  <section id="blog" className="blog-area pt-125 pb-130">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title text-center pb-25">
            <h2 className="title">From The Blog</h2>
            <p>
              Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam
              tempus, nunc id efficitur sagittis, urna est ultricies eros, ac
              porta sem turpis quis leo.
            </p>
          </div>{" "}
          {/* section title */}
        </div>
      </div>{" "}
      {/* row */}
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-8 col-sm-9">
          <div className="single-blog mt-30">
            <div className="blog-image">
              <img src="assets/images/blog/b-1.jpg" alt="Blog" />
            </div>
            <div className="blog-content">
              <h4 className="blog-title">
                <a href="blog-details.html">
                  Hired Releases 2023 Brand Health.
                </a>
              </h4>
              <span>July 26, 2022</span>
            </div>
          </div>{" "}
          {/* single blog */}
        </div>
        <div className="col-lg-4 col-md-8 col-sm-9">
          <div className="single-blog mt-30">
            <div className="blog-image">
              <img src="assets/images/blog/b-2.jpg" alt="Blog" />
            </div>
            <div className="blog-content">
              <h4 className="blog-title">
                <a href="blog-details.html">
                  Hired Releases 2023 Brand Health.
                </a>
              </h4>
              <span>July 26, 2022</span>
            </div>
          </div>{" "}
          {/* single blog */}
        </div>
        <div className="col-lg-4 col-md-8 col-sm-9">
          <div className="single-blog mt-30">
            <div className="blog-image">
              <img src="assets/images/blog/b-3.jpg" alt="Blog" />
            </div>
            <div className="blog-content">
              <h4 className="blog-title">
                <a href="blog-details.html">
                  Hired Releases 2023 Brand Health.
                </a>
              </h4>
              <span>July 26, 2022</span>
            </div>
          </div>{" "}
          {/* single blog */}
        </div>
      </div>{" "}
      {/* row */}
      <div className="row">
        <div className="col-lg-12">
          <div className="blog-more text-center mt-50">
            <a className="main-btn" href="#">
              More posts
            </a>
          </div>{" "}
          {/* blog more */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== BLOG PART ENDS ======*/}
  {/*====== CONTACT PART START ======*/}
  <section id="contact" className="contact-area pt-125 pb-130 gray-bg">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title text-center pb-25">
            <h2 className="title">Get In Touch</h2>
            <p>
              Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam
              tempus, nunc id efficitur sagittis, urna est ultricies eros, ac
              porta sem turpis quis leo.
            </p>
          </div>{" "}
          {/* section title */}
        </div>
      </div>{" "}
      {/* row */}
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-7">
          <div className="contact-box text-center mt-30">
            <div className="contact-icon">
              <i className="lni-map-marker" />
            </div>
            <div className="contact-content">
              <h6 className="contact-title">Address</h6>
              <p>123 Stree New York City , United States Of America 750</p>
            </div>
          </div>{" "}
          {/* contact box */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-7">
          <div className="contact-box text-center mt-30">
            <div className="contact-icon">
              <i className="lni-phone" />
            </div>
            <div className="contact-content">
              <h6 className="contact-title">Phone</h6>
              <p>+931 2222 5555</p>
              <p>+547 5554 6663</p>
            </div>
          </div>{" "}
          {/* contact box */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-7">
          <div className="contact-box text-center mt-30">
            <div className="contact-icon">
              <i className="lni-envelope" />
            </div>
            <div className="contact-content">
              <h6 className="contact-title">Email</h6>
              <p>support@yourmail.com</p>
              <p>info@helpline.com</p>
            </div>
          </div>{" "}
          {/* contact box */}
        </div>
      </div>{" "}
      {/* row */}
      <div className="row">
        <div className="col-lg-6">
          <div className="contact-form pt-30">
            <form id="contact-form" action="assets/contact.php">
              <div className="single-form">
                <input type="text" name="name" placeholder="Name" />
              </div>{" "}
              {/* single form */}
              <div className="single-form">
                <input type="email" name="email" placeholder="Email" />
              </div>{" "}
              {/* single form */}
              <div className="single-form">
                <textarea
                  name="message"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>{" "}
              {/* single form */}
              <p className="form-message" />
              <div className="single-form">
                <button className="main-btn" type="submit">
                  Send Message
                </button>
              </div>{" "}
              {/* single form */}
            </form>
          </div>{" "}
          {/* contact form */}
        </div>
        <div className="col-lg-6">
          <div className="contact-map mt-60">
            <div className="gmap_canvas">
              <iframe
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
              />
            </div>
          </div>{" "}
          {/* contact map */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== CONTACT PART ENDS ======*/}
  {/*====== FOOTER PART START ======*/}
  <footer id="footer" className="footer-area">
    <div className="footer-widget pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="footer-content text-center">
              <a href="index.html">
                <img src="assets/images/logo-2.png" alt="Logo" />
              </a>
              <p className="mt-">
                Please, purchase full version of Unfold to get all pages and
                features. Including credits removal, permission to use in
                commercial projects, working contact from, docs and support
              </p>
              <ul>
                <li>
                  <a href="#">
                    <i className="lni-facebook-filled" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni-twitter-original" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni-pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni-linkedin-original" />
                  </a>
                </li>
              </ul>
            </div>{" "}
            {/* footer content */}
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
    </div>{" "}
    {/* footer widget */}
    <div className="footer-copyright pb-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright-text text-center pt-20">
              <p>
                Template by{" "}
                <a href="https://uideck.com" rel="nofollow">
                  UIdeck
                </a>
              </p>
            </div>{" "}
            {/* copyright text */}
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
    </div>{" "}
    {/* footer widget */}
  </footer>
  {/*====== FOOTER PART ENDS ======*/}
  {/*====== BACK TOP TOP PART START ======*/}
  <a href="#" className="back-to-top">
    <i className="lni-chevron-up" />
  </a>
  {/*====== BACK TOP TOP PART ENDS ======*/}
  {/*====== jquery js ======*/}
  {/*====== Bootstrap js ======*/}
  {/*====== Magnific Popup js ======*/}
  {/*====== Parallax js ======*/}
  {/*====== Counter Up js ======*/}
  {/*====== Ajax Contact js ======*/}
  {/*====== Appear js ======*/}
  {/*====== Scrolling js ======*/}
  {/*====== Validator js ======*/}
  {/*====== Main js ======*/}
</>

  )
}

export default App
