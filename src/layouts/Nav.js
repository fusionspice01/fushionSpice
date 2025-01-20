import React, { useEffect } from 'react';
import Logo1 from "../assets/images/Logo/Logo.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { Button } from '@mui/material';

function Nav() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <header className='nav_sticky'>
      <nav className="navbar navbar-expand-lg body shadow-lg fixed-top ">
        <div className="container">
          <a className="navbar-brand fw-bold animate__bounceIn" href="/" aria-label="Fusion Spice - Home">
            <img src={Logo1} alt="Fusion Spice Logo" width="50" height="50" />
            Fusion Spice
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <a className="navbar-brand fw-bold animate__bounceIn fs-6" id="offcanvasNavbarLabel" href="/" aria-label="Fusion Spice - Home">
                <img src={Logo1} alt="Fusion Spice Logo " width="40" height="40" />
                Fusion Spice
              </a>
              <div className="d-lg-none ms-auto" style={{width:'35%'}}>
            <a className="nav-link active fw-bold text-light rounded-pill bg-danger text-center zoom-out fs-6 " href="/contact">
              Contact Us
            </a>
          </div>

              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body text-center">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item pe-3 pb-1 pb-md-0 pb-lg-0">
                  <a className="nav-link active fw-bold nav_a animate__bounceIn" aria-current="page" href="/about">About Us</a>
                </li>
                {/* <li className="nav-item pe-3 pb-1 pb-md-0 pb-lg-0">
                  <a className="nav-link active fw-bold nav_a animate__bounceIn" href="/services">Our Services</a>
                </li> */}
                <li className="nav-item pe-3 pb-1 pb-md-0 pb-lg-0">
                  <a className="nav-link active fw-bold nav_a animate__bounceIn" href="/working">Working at Fusion Spice</a>
                </li>
                <li className="nav-item dropdown pe-3">
                  <span className="nav-link active dropdown-toggle fw-bold animate__bounceIn" role="button" aria-expanded="false" aria-haspopup="true">
                    Industries we serve
                  </span>
                  <ul className="dropdown-menu fw-bold">
                    <li><a className="dropdown-item" href="/education">Education</a></li>
                    <li><a className="dropdown-item" href="/manufacturing">Manufacturing Facilities</a></li>
                    <li><a className="dropdown-item" href="/eventspace">Event Space</a></li>
                    <li><a className="dropdown-item" href="/corporate">Corporate Companies</a></li>
                  </ul>
                </li>
                <li className="nav-item bgbg rounded-pill text-center zoom-out animate__bounceIn d-none d-lg-block d-print-block" style={{ width: "100px" }}>
                  <a className="nav-link active fw-bold text-light" aria-current="page" href="/contact">Contact Us</a>
                </li>


              </ul>
              
            </div>
            
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
