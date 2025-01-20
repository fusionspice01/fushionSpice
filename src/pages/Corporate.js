import React from 'react';

import WorkingHome from '../components/Working_Home';



const HappyUs = () => (
  <div className="container mt-5 mb-5 pb-5 px-lg-5">
    <div className='row'>
      <div className='col-md'>
        <h2 className='display-4 fw-bold py-md-4 py-lg-4'>Happy Clients, Happy Us</h2>
        <p className='fs-3 pt-4 pt-lg-0 pt-md-0'>The Fusion Spice team maintains a strong connection with our employees, understanding their food preferences and prioritizing their comfort and satisfaction. They consistently deliver next-level customer convenience, ensuring our employees are well cared for by experienced, attentive, and capable professionals. We are grateful for their dedication and exceptional service.</p>
      </div>
    </div>
  </div>
);

function Corporate() {
  return (
    <>
<WorkingHome
  img={
    <img
      src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Workplace environment"
      className='image-fluid ms-lg-5 px-lg-5 rounded'
      style={{width:'100%'}}
    />
  }
  head="Your People, Our Priority"
  Bname="Contact Us"
  link="/contact"
/>
      <div className='container '>
        <div className='row'>
          <h1 className='display-3 pb-5 pt-5'>Creating People-Centric and Sustainable Workplace Environments</h1>
          <p className='fs-5'>People are at the heart of everything we do.</p>
          <p className='fs-5'>In today’s work environment, creating an exceptional workplace experience is essential for enhancing employee productivity. With a deep understanding of consumer behavior and expectations, Fusion Spice integrates innovative food, hospitality, and facility services to empower employees to reach their full potential.</p>
          <p className='fs-5'>We focus on aligning space design and services with employee expectations, boosting talent attraction and retention, while optimizing resource utilization, managing costs, and achieving sustainability goals. Our services span various industries, from remote manufacturing environments to bustling urban corporate offices. Our food offerings, tailored by expert dieticians, food handlers, and culinary specialists, are customized to meet every need, whether through onsite or offsite kitchens.</p>
          <p className='fs-5'>As specialists in workplace experience, we prioritize improving quality of life, ensuring that your teams stay engaged, healthy, and ready to excel.</p>
        </div>

      </div>
      <div className="container mt-5 pt-lg-5 mb-5 pb-5">
                <div className="row d-flex align-items-center ">
                    <div className=" col-md pb-4 ">
                        <h1 className="display-2">Environments We Serve</h1>
                    </div>
                    <div className="col-md ">
                        <div className="row">
                            <div className="col-md pt-3 p-4 ">
                            <i class="fa-solid fa-industry display-1"></i>
                                <h3 className="fs-3 fw-bold mt-4">Industries and Manufacturing Facilities</h3>
                            </div>
                            <div className="col-md pt-3 p-4">
                            <i class="fa-solid fa-gears display-1"></i>
                                <h3 className="fs-3 fw-bold mt-4">Automotive and Auto Components</h3>
                            </div>

                        </div>
                        <div className="row pt-lg-5 ">
                            <div className="col-md pt-3 p-4">
                            <i class="fa-solid fa-laptop display-1"></i>
                                <h3 className="fs-3 fw-bold mt-4">IT/ITES & Global Delivery Centers</h3>
                            </div>
                            <div className="col-md pt-3 p-4">
                                <i className="fa-solid fa-briefcase display-1"></i>
                                <h3 className="fs-3 fw-bold mt-4">Large Corporate Conglomerates</h3>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
      {/* <Success /> */}
      <div className='container-fluid aboutBack mt-5 pt-5 '>
                <div className='row px-2 px-lg-5 pt-lg-4 pb-5 content1'>
                    <div className='col-md px-lg-5'>
                        <h1 className='display-4 fw-bold text-center px-lg-5 text-capitalize lead'>Spreading joy through our expertly crafted food brands and personalized services.</h1>
                    </div>
                    
                </div>
            </div>


        <HappyUs />
    </>
  );
}

export default Corporate;
