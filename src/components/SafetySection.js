import React, { useState } from 'react';
import Img2 from '../assets/images/food/food home/rr.png';
import LazyLoad from 'react-lazyload';

function SafetySection() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Function to handle image load event
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section className="container mt-lg-5">
      <div className="row pt-5 pb-4">
        <div className="col-md-5 mb-4">
          <LazyLoad height={200} offset={100}>
            <img
              src={Img2}
              className={`img-fluid ${isLoaded ? 'unblur' : 'blur'}`}
              alt="Ensuring Food Safety at Fusion Spice"
              loading="lazy"
              onLoad={handleImageLoad}
            />
          </LazyLoad>
        </div>
        <div className="col-md ">
      <h1 className="display-2">Putting Your Safety First: Our Top Priority</h1>
          <p className="safety-text">
            At Fusion Spice, we ensure the highest standards of food safety and hygiene. Our
            entire team follows guidelines set by the Food Safety Standards Authority of
            India (FSSAI), guaranteeing that every dish we serve meets stringent safety
            standards. We also adhere to the guidelines provided by Environment
            Health and Safety (EHS), prioritizing the well-being of our customers and staff.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SafetySection;
