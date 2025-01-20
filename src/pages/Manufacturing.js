import React from 'react';
import { Helmet } from 'react-helmet'; // Importing Helmet for SEO
import WorkingHome from '../components/Working_Home';
import WithUsWorking from '../components/WithUs_Working';
import WorkingWelcome from '../components/Working_Welcome';
import img1 from  '../assets/images/Addon/5.png'
import img2 from  '../assets/images/Addon/2.png'
import img3 from  '../assets/images/Addon/3.png'
function EnergyandResources() {
    return (
        <>
            <Helmet>
                <title>Energy & Resources | Fusion Spice</title>
                <meta name="description" content="Fusion Spice provides comprehensive support services to the energy sector, ensuring safety, comfort, and satisfaction for your teams." />
                <meta name="keywords" content="energy services, remote support, food services, camp management, facility management" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            
            <WorkingHome
              img={<img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid  rounded"  alt="Working environment" loading="lazy" />} 
             head="Making Remote Living Safe and Enjoyable" Bname="Contact Us" link="/contact" />

            <div className='container pt-5 mt-5'>
                <div className='row px-lg-5 px-md-5'>
                    <div className='col px-lg-5 px-md-5'>
                        <h1 className='Working_font fw-bold'>Powering Your Operations</h1>
                        <p className='fs-5 pt-4'>
                        We provide customized support services that cater to the dynamic needs of today's energy leaders and their teams. Whether you're at a refinery, offshore, onshore, or in an office, our 24/7 dedication to excellence guarantees that your teams stay comfortable, safe, and resilient.
                        </p>
                        <p className='fs-5'>
                            Our comprehensive services cover everything from food, laundry, and housekeeping to health and wellness, camp construction, and maintenance. We also manage landscaping, technical services, and infrastructure needs, including internet connectivity and sports arena maintenance.
                        </p>
                        <p className='fs-5'>
                        With an unwavering commitment to zero accidents, safety is integrated into every aspect of our operations. Partner with Fusion Spice to experience the pride and confidence of working with a team that understands the unique demands of the energy sector and delivers solutions that enhance efficiency and satisfaction.
                        </p>
                    </div>
                </div>
            </div>

            <div className='pt-5 mt-5 pb-5 mb-5'>
                <WithUsWorking 
                    title="Our Range of Services"
                    col1={<img src={img2} className="img-fluid rounded "  alt="Delightful Dining" loading="lazy" />} 
                    col2={<img src={img3} className="img-fluid rounded" alt="Seamless Site Functionality" loading="lazy" />}
                    col3={<img src={img1} className="img-fluid rounded" alt="Total Workforce Support" loading="lazy" />} 
                    head="Delightful Dining"
                    head1="Seamless Site Functionality" 
                    par1="At Fusion Spice, we provide a diverse range of food options to delight every palate, including globally inspired cuisines, hearty comfort foods, and classic favorites. Our commitment extends beyond variety to ensure comfort and satisfaction. With food trucks, micro markets, and popular fast-casual brands, we bring indulgence and enjoyment to your workforce, boosting morale and productivity."
                    head2="Total Workforce Support"
                    par3="Fusion Spice leads in constructing, maintaining, and managing camps in remote locations. Our Integrated Camp Management solutions cover all aspects of facility management, from janitorial services and HVAC construction to landscaping, technical maintenance, pest control, internet connections, and waste management. We ensure smooth day-to-day operations and comprehensive support."
                    par5="At Fusion Spice, we offer comprehensive support for your teams, whether they’re offshore or finishing a shift at a plant. Our services include accommodation management, recreation, travel planning, and logistics. We enhance well-being with social activities, state-of-the-art fitness centers, and virtual telehealth. We deliver the comfort of home, even in the most remote locations."
                />
            </div>

            <div className='mt-5 pt-5 pb-5 mb-5'>
                <WorkingWelcome head="Welcome. You Are in Good Company." par="Come be a part of something greater. It all starts with you."  link="/contact" />
            </div>
        </>
    );
}

export default EnergyandResources;
