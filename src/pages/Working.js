import React from 'react';
// import { Helmet } from 'react-helmet'; // Importing Helmet for SEO
import WorkingHome from '../components/Working_Home';
import WithUsWorking from '../components/WithUs_Working';
import WorkingWelcome from '../components/Working_Welcome';

import Work1 from '../assets/images/Work/Work1.png';
import Work2 from '../assets/images/Work/Work2.png';
import Work3 from '../assets/images/Work/Work3.png';
import Wimg from '../assets/images/Addon/7.png';

const CoreValues = () => (
  <div className='container pt-5 mt-5 ' >
    <div className='row px-lg-5 px-md-5'>
      <div className='col px-lg-5 px-md-5'>
        <h1 className='display-5 fw-bold'>Be Part of Something Greater</h1>
        <p className='fs-5 pt-4'>
          At Fusion Spice, you’re not just joining a team — you’re becoming part of a movement. A movement to enrich the everyday lives of those around you through meaningful actions that create a lasting impact.
        </p>
        <ul className='list-unstyled-dots fs-5'>
          <li className='pt-4'>
            <strong>We believe in small actions:</strong> Even the smallest actions can spark big changes, shaping a better world for everyone.
          </li>
          <li className='pt-4'>
            <strong>Purpose in every role:</strong> Here, you’ll find purpose in every role and the freedom to thrive in your own unique way.
          </li>
          <li className='pt-4'>
            <strong>Make a real difference:</strong> At Fusion Spice, you’ll have the opportunity to make a real difference — just like our dedicated teams who are already transforming lives every day.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

function Working() {

  return (
    <>
  

      <div >
      <WorkingHome 
          img={<img src={Work3} className="img-fluid rounded" alt="Working environment" loading="lazy" />} 
          head="We care about amazing people, like you" 
          Bname="Join our Team" 
          link="https://docs.google.com/forms/d/e/1FAIpQLSfDKSEv1rN2-AHMX2T6ju0AxlsvsYI3vsvu3U8CQ37U8Vk2Pg/viewform?usp=sf_link"
        />
      </div>
        
      

      {/* Core Values Section */}
      <CoreValues />

      {/* With Us Working Section */}
      <div className='pt-lg-5 mt-lg-5 pb-lg-5 mb-lg-5 pt-md-5 mt-md-5 pb-md-5 mb-md-5' >
        <WithUsWorking
          col1={<img src={Work1} className="img-fluid" alt="Work 1" loading="lazy" />}
          col2={<img src={Work2} className="img-fluid" alt="Work 2" loading="lazy" />}
          col3={<img src={Wimg} className="img-fluid shadow-lg rounded" alt="Work 3" loading="lazy" />} // Replace with actual image path
          head="With Us, You Truly Belong"
          head1="With Us, You Can Rightfully Act With A Purpose"
          par1="At Fusion Spice, you belong in a company that values you for who you are; where you are treated fairly, with respect, and can be yourself. Here, your ideas matter, your opinions count, and your perspectives are given due consideration, irrespective of your race, caste, background, ethnicity, sexuality, gender identity, or disability. Our strong inclusive culture gives you the freedom to bring your authentic self to work every day."
          head2="With Us, You Can Freely Thrive In Your Own Way"
          par2="It is only when you are happy, you can make others happy around you."
          par3="At Fusion Spice, you are encouraged to make a difference in the local community and pave the way toward a brighter, sustainable future through your everyday actions. Each day, we strive to uplift society by reducing environmental pollution, minimizing food waste, and giving back to the community by volunteering with our Stop Hunger Foundation."
          par4="Spread smiles and cheer with your work and see the magic of happiness unfold."
          par5="At Fusion Spice, you have the complete opportunity to perform and grow in your own way. You have the best tools at your disposal, the flexibility to learn and develop new skills, and the chance to unlock your potential in a whole new way. Here, you receive every possible support and opportunity to maintain a healthy work-life balance. For us, the safety and well-being of our employees is paramount."
        />
      </div>

      {/* Welcome Section */}
      <div className='mt-5 pt-5 pb-5 Work_background1 '>
        <WorkingWelcome 
          head="Welcome. You Are in Good Company." 
          par="Come be a part of something greater. It all starts with you." 
          link="https://docs.google.com/forms/d/e/1FAIpQLSfDKSEv1rN2-AHMX2T6ju0AxlsvsYI3vsvu3U8CQ37U8Vk2Pg/viewform?usp=sf_link"
        />
      </div>
      {/* <div className='mt-5 pt-5 pb-5 mb-5 Event_background1'>
        <WorkingWelcome head="Welcome. You Are in Good Company." par="Come be a part of something greater. It all starts with you." />
      </div> */}
    </>
  );
}

export default Working;
