import React, { useState } from 'react';
import S_Image from '../assets/images/tt.png';
import LazyLoad from 'react-lazyload';

function TeamSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Function to handle image load event
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section className="container mb-5 pb-5">
      <div className="row ">
        <div className="col-md mt-5">
      <h1 className="display-3">Our Team</h1>

          <p className="mission-text ">
            Our team is our greatest asset. At Fusion Spice Hospitality, our team is a dynamic force, 
            blending passion, talent, and expertise to create unforgettable experiences for our guests. 
            With over 300 dedicated professionals, our chefs innovate with flair, crafting culinary delights 
            that tantalize the taste buds and push boundaries. Our front-of-house staff embody grace and efficiency, 
            ensuring every guest feels welcomed and pampered from the moment they arrive. Behind the scenes, our management team 
            provides the strategic vision and support needed to uphold our standards of excellence, while our support staff 
            work tirelessly to maintain a seamless and inviting environment. Together, we form a family committed to delivering 
            exceptional hospitality at every turn.
          </p>
        </div>

        {/* Lazy-loaded image with blur effect */}
        <div className="col-md-6">
          <LazyLoad height={200} offset={100}>
            <img 
              src={S_Image} 
              className={`img-fluid ${isLoaded ? 'unblur' : 'blur'}`} 
              alt="Fusion Spice Hospitality Team" 
              loading="lazy" 
              onLoad={handleImageLoad}
            />
          </LazyLoad>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
