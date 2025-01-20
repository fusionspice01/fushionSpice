import React, { Suspense } from 'react';
import HomeImage from '../assets/images/Addon/1.png';
import '../assets/css/reviwe.css';
const VideoSection = React.lazy(() => import('../components/VideoSection'));
const MissionValues = React.lazy(() => import('../components/MissionValues'));
const TeamSection = React.lazy(() => import('../components/TeamSection'));
const SuccessStories = React.lazy(() => import('../components/SuccessStories'));
const SafetySection = React.lazy(() => import('../components/SafetySection'));
const ExpertiseSection = React.lazy(() => import('../components/ExpertiseSection'));
const Client = React.lazy(() => import('../components/Client'));
// const Testimonials = React.lazy(()=> import( '../components/Testimonials'));
function Home() {
    return (
        <>
            <Suspense fallback={<p>loading...</p>}>
                <VideoSection />
            </Suspense>
            <div className='container'>
                <div className='row mt-5 pt-5'>
                    <div className='col-md pt-lg-5'>
                        <h1 className='display-5 d-none d-lg-block '>Transforming the Mundane into Memorable Experiences</h1>
                        <h1 className='display-1 d-lg-none '>Transforming the Mundane into Memorable Experiences</h1>
                        <p className='mt-4' style={{ fontSize: '1.3rem' }}>Our mission is to transform everyday experiences into extraordinary moments. We are dedicated to enriching the lives of corporate professionals, students, healthcare workers, and employees in remote energy sectors by providing solutions that improve daily life and shape a brighter future. Our comprehensive offerings include food and catering services, facilities management, technical support, workplace enhancement, and energy optimization.</p>
                        <p className='' style={{ fontSize: '1.3rem' }}>We strive to create environments where every meal brings joy, every workspace inspires productivity, and every service exceeds expectations. At the heart of our approach is a commitment to fostering an inclusive, diverse, and equitable workplace that prioritizes the well-being and satisfaction of everyone we serve.</p>
                    </div>

                    <div className='col-md'>
                        <img src={HomeImage} className="img-fluid" alt="..." />
                    </div>
                </div>
            </div>
            <Suspense fallback={<p>loading...</p>}>
                <Client />
            </Suspense>
            <Suspense fallback={<p>loading...</p>}>
                <MissionValues />
            </Suspense>
            <Suspense fallback={<p>loading...</p>}>
                <TeamSection />
            </Suspense>
            <Suspense fallback={<p>loading...</p>}>
                <SuccessStories />
            </Suspense>
            <Suspense fallback={<p>loading...</p>}>
                <SafetySection />
            </Suspense >
            <Suspense fallback={<p>loading...</p>}>
                <ExpertiseSection />
            </Suspense>
            <Suspense fallback={<p>loading...</p>}>
                <div className='mt-5 pt-5'>
                    <section id="testimonial" className="testimonial-section img-bg pt-150 pb-40">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 pb-5">
                                    <div className="section-title mb-60 text-center">
                                        <span className="wow fadeInUp" data-wow-delay=".2s">Testimonials</span>
                                        <h1 className="wow display-3" data-wow-delay=".4s">What Our Client Says</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="responsive-container-block big-container">
                                <div class="responsive-container-block bg">
                                    <div class="responsive-container-block blocks">
                                        <div class="responsive-cell-block wk-desk-1 wk-tab-1 wk-mobile-1 wk-ipadp-1 content">
                                            <p class="text-blk info-block">
                                            The food quality and variety are simply outstanding! The service is always prompt, and the staff is incredibly friendly. A must-try!
                                            </p>
                                            <div class="responsive-container-block person">
                                                {/* <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 icon-block">
                                                    <img
                                                        className="profile-img"
                                                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors1.svg"
                                                        alt="Profile"
                                                    />

                                                </div> */}
                                                <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 text-block">
                                                    <p class="text-blk name">
                                                    — Rajesh Mehta, 
                                                    </p>
                                                    <p class="text-blk desig">
                                                    Regular Customer
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="responsive-cell-block wk-desk-1 wk-tab-1 wk-mobile-1 wk-ipadp-1 content">
                                            <p class="text-blk info-block">
                                            We’ve partnered with them for our office canteen, and it’s been a game-changer. Our team loves the delicious, hygienic meals served every day!
                                            </p>
                                            <div class="responsive-container-block person">
                                                {/* <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 icon-block">
                                                    <img
                                                        className="profile-img"
                                                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors1.svg"
                                                        alt="Profile"
                                                    />

                                                </div> */}
                                                <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 text-block">
                                                    <p class="text-blk name">
                                                    — Priya Sharma, 
                                                    </p>
                                                    <p class="text-blk desig">
                                                    Regular Customer
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="responsive-cell-block wk-desk-1 wk-tab-1 wk-mobile-1 wk-ipadp-1 content bottom">
                                            <p class="text-blk info-block">
                                            From their diverse menu to their excellent service, everything is top-notch. They truly understand the importance of good food and customer satisfaction!
                                            </p>
                                            <div class="responsive-container-block person">
                                                {/* <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 icon-block">
                                                    <img
                                                        className="profile-img"
                                                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors1.svg"
                                                        alt="Profile"
                                                    />

                                                </div> */}
                                                <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 text-block">
                                                    <p class="text-blk name">
                                                    — Amit Verma,
                                                    </p>
                                                    <p class="text-blk desig">
                                                    Regular Customer
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </section>
                </div>
            </Suspense>
        </>
    );
}

export default Home;
