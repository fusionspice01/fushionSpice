import React, { useState } from 'react';
import Image from '../assets/images/home/1.png';
import Image1 from '../assets/images/home/2.png';
import Image2 from '../assets/images/home/3.png';
import LazyLoad from 'react-lazyload';

function SuccessStories() {
  const [isLoaded, setIsLoaded] = useState({
    image1: false,
    image2: false,
    image3: false
  });

  // Function to handle image load event
  const handleImageLoad = (imageKey) => {
    setIsLoaded(prevState => ({ ...prevState, [imageKey]: true }));
  };

  return (
    <section className="container pb-lg-5 mb-lg-5 ">
      <h1 className="display-3 text-center">Success Stories</h1>
      <div className="row border-top border-3 pt-5">
        
        {/* Success Story 1: Growing Business */}
        <div className="col-lg zoom-in pb-4">
          <div className="card bg-transparent border-0">
            <LazyLoad height={200} offset={100}>
              <img 
                src={Image} 
                className={`img-fluid shadow-sm rounded ${isLoaded.image1 ? 'unblur' : 'blur'}`} 
                alt="Success story about growing business" 
                loading="lazy"
                onLoad={() => handleImageLoad('image1')} 
              />
            </LazyLoad>
            <div className="card-body">
              <h5 className="card-title">Growing Business</h5>
              <p className="card-text">
                From humble beginnings to serving thousands, our commitment to quality and service has driven our success.
              </p>
            </div>
          </div>
        </div>

        {/* Success Story 2: Satisfied Customers */}
        <div className="col-lg zoom-in pb-4">
          <div className="card bg-transparent border-0">
            <LazyLoad height={200} offset={100}>
              <img 
                src={Image2} 
                className={`img-fluid shadow-sm rounded ${isLoaded.image2 ? 'unblur' : 'blur'}`} 
                alt="Success story about satisfied customers" 
                loading="lazy"
                onLoad={() => handleImageLoad('image2')} 
              />
            </LazyLoad>
            <div className="card-body">
              <h5 className="card-title">Satisfied Customers</h5>
              <p className="card-text">
                Our dedication to customer satisfaction has created a loyal base of patrons who value our unique dining experience.
              </p>
            </div>
          </div>
        </div>

        {/* Success Story 3: Exceptional Teamwork */}
        <div className="col-lg zoom-in pb-4">
          <div className="card bg-transparent border-0">
            <LazyLoad height={200} offset={100}>
              <img 
                src={Image1} 
                className={`img-fluid shadow-sm rounded ${isLoaded.image3 ? 'unblur' : 'blur'}`} 
                alt="Success story about exceptional teamwork" 
                loading="lazy"
                onLoad={() => handleImageLoad('image3')} 
              />
            </LazyLoad>
            <div className="card-body">
              <h5 className="card-title">Exceptional Teamwork</h5>
              <p className="card-text">
                Our team's passion and cohesion have brought numerous accolades, proving that collaboration is key to our triumphs.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SuccessStories;
