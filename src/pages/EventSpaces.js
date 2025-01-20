import React from 'react';
// import ED1 from '../assets/images/Eduction/ed1.png'; 
// import ED2 from '../assets/images/Eduction/ed2.png';
// import WorkingHome from '../components/Working_Home';
// import Homebutton from '../components/Homebutton';
import '../assets/css/gall.css'

const Success = () => (
  <div className='container mt-4 mt-md-5 mt-lg-5 mb-lg-5 mb-md-5 rounded px-4'>
    <div className='row p-lg-5 p-md-5 border border-2'>
      <div className='col-lg col-md align-self-center'>
        <img src='https://images.unsplash.com/photo-1464047736614-af63643285bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='img-fluid w-100' alt='A beautifully set event space managed by Fusion Spice' />
      </div>
      <div className='col-lg col-md ms-lg-5'>
        <h2 className='display-4'>Unlock the Key to Event Space Success</h2>
        <p className='fs-5'>
          There are venues, and then there are Fusion Spice-managed event spaces. What sets us apart is our deep understanding of what works best for event organizers and guests.
        </p>
        <p className='fs-5'>
          Our extensive experience and commitment to creating unforgettable experiences drive the difference. Explore how Fusion Spice’s transformative services are reshaping event experiences. From innovative catering solutions to dynamic event management, we ensure every aspect of your event is seamless, exciting, and memorable.
        </p>
        <p className='fs-5'>
          Dive into behind-the-scenes stories of our chefs, discover new trends in event catering, and see how our solutions make a tangible impact. Get a glimpse of our success stories and upcoming projects that are set to redefine event hosting.
        </p>
      </div>
    </div>
  </div>
);

const HappyUs = () => (
  <div className='container my-5 px-lg-5'>
    <div className='row'>
      <div className='col'>
        <h2 className='display-4 fw-bold py-md-4 py-lg-4'>Happy Clients, Happy Us</h2>
        <p className='fs-3 pt-4 pt-lg-0 pt-md-0'>
        We are excited to unveil a transformative collaboration with Fusion Spice, designed to reshape our educational landscape and reimagine event spaces. Together, we aim to create innovative solutions that make gatherings more dynamic, safe, and enjoyable for all.
        </p>
        {/* <div className='border-start border-primary border-2 mt-lg-5 mt-md-5'>
          <p className='ps-4'>
            <span className='fs-5 fw-bold'>Prof. Deepak Kumar Srivastava</span><br />
            <span>Director, IIM Ranchi</span>
          </p>
        </div> */}
      </div>
    </div>
  </div>
);

function EventSpaces() {
  return (
    <>
      <div className='Event_background'>
        <div className="container-fluid px-3 px-lg-5 pt-5 mt-5 pb-5 rounded-bottom rounded position-relative">
          {/* Wave animation as background */}

          {/* Content */}
          <div className="row pt-3 px-3 p-5 border border-3">
            <div className="col-lg p-3 align-self-center mt-4 mt-md-4 mt-lg textbg shadow-lg">
              <p className="display-2 px-lg-5 px-md-5 fw-bold  text-capitalize" style={{ color: "black" }}>
                A perfect space for all your special occasions
              </p>
            </div>
          </div>
        </div>
      </div>

      <Success /> 

      <div className='container d-flex justify-content-center'>
        <div className="album1">
          <div className="responsive-container-block1 bg">
            <div className="responsive-container-block1 img-cont">
              <img className="img" src="https://images.unsplash.com/photo-1653821355793-80142f9c5063?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Widget 1"/>
              <img className="img" src="https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Widget 2"/>
            <img className="img" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" alt="Widget 7"/>
              
              <img className="img img-last" src="https://images.unsplash.com/photo-1653821355168-144695e5c0e6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Widget 3"/>
            </div>
            <div className="responsive-container-block1 img-cont">
              <img className="img img-big" src="https://images.unsplash.com/photo-1648297346835-8a7f7dd44528?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" alt="Widget 4"/>
              <img className="img img-big img-last" src="https://images.unsplash.com/photo-1485178075098-49f78b4b43b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" alt="Widget 5"/>
            </div>
            <div className="responsive-container-block1 img-cont">
            <img className="img" src="https://images.unsplash.com/photo-1628578569073-8ee77295315d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" alt="Widget 6"/>
            <img className="img" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" alt="Widget 7"/>
            <img className="img" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" alt="Widget 8"/>
            <img className="img" src="https://images.unsplash.com/photo-1628578569073-8ee77295315d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" alt="Widget 6"/>
            
            </div>
          </div>
        </div>
      </div>

      <HappyUs />
    </>
  );
}

export default EventSpaces;
