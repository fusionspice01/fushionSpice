import React, { Suspense, useEffect } from 'react';
import About_Image from "../assets/images/Logo/Logo.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

function About() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Suspense fallback={<p>loading..</p>}>
                <div className="container-fluid mt-5 pt-4 mb-5 pb-5" >

                    <div className="row justify-content-center align-items-center g-2 ">
                        {/* Text Section */}
                        <div className="col-md-7 col-12" data-aos="fade-up" data-aos-duration="1000" >
                            <p className="fs-5">
                                <h1 className=" display-3  pb-3 pt-5 animate__bounceIn ">About Us</h1>

                                Fusion Spice has been setting the bar for unmatched hospitality and
                                culinary expertise for more than 25 years. Our unwavering commitment to
                                excellence has made us a highly regarded eating destination all around
                                the country. Fusion Spice has a magnetic pull on visitors, who are
                                attracted in by our delicious food as well as the promise of faultless
                                service and unforgettable experiences. With unwavering commitment,
                                we've built strong relationships with our clients, who come back time and
                                time again to indulge in our culinary delights and create new chapters in
                                their treasured memories with every visit.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="col-md-3 col-12 mt-4 mt-md-0" data-aos="fade-down" data-aos-duration="1000">

                            <LazyLoadImage src={About_Image}
                                alt="Fusion Spice Company Logo"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </Suspense>

            <div className='container-fluid aboutBack mt-5 pt-5 '>
                <div className='row px-2 px-lg-5 pt-lg-4 pb-5 content1'>
                    <div className='col-md-5 px-lg-5'>
                        <h1 className='display-1 fw-bold  '>Our mission</h1>
                    </div>
                    <div className='col-md col-lg'>
                        <p className='fs-4  '>Our goal is to enhance the quality of life for our employees and those we serve, while fostering economic, social, and environmental progress in the communities we operate in.</p>
                    </div>
                </div>
            </div>
            <div className="container mt-5 pt-lg-5 mb-5 pb-5">
                <div className="row ">
                    <div className=" mb-5 ">
                        <h1 className="display-4">Our Ethical Principles</h1>
                        <hp className="fs-5">Our ethical principles guide every business decision.</hp>
                    </div>
                    <div className="col-md ">
                        <div className="row">
                            <div className="col-md pt-2">
                                <i className="fa-regular fa-heart display-1"></i>
                                <h3 className="fs-3 fw-bold mt-4">Loyalty</h3>
                                <p className="fs-5">We place trust at the heart of our relationships with both clients and employees.</p>
                            </div>
                            <div className="col-md pt-2">
                                <i className="fa-solid fa-user-group display-2"></i>
                                <h3 className="fs-3 fw-bold mt-4">Respect for people</h3>
                                <p className="fs-5">We prioritize respect, dignity, and empathy for everyone, embracing diversity in backgrounds, ages, genders, beliefs, and life choices.</p>
                            </div>

                        </div>
                        <div className="row pt-lg-5 ">
                            <div className="col-md pt-2">
                                <i className="fa-solid fa-circle-check display-1"></i>
                                <h3 className="fs-3 fw-bold mt-4">Transparency</h3>
                                <p className="fs-5">We are committed to providing our customers, employees, and shareholders with clear and accurate information about our products and services.</p>
                            </div>
                            <div className="col-md pt-2">
                                <i className="fa-solid fa-briefcase display-1"></i>
                                <h3 className="fs-3 fw-bold mt-4">Business integrity</h3>
                                <p className="fs-5">We strongly oppose any practices that lack honesty, integrity, or fairness.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* <Scroller/> */}
        </>
    );
}

export default About;
