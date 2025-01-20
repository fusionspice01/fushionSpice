import React from 'react';
import Homebutton from '../components/Homebutton';
import LazyLoad from 'react-lazyload';

function Working_Welcome(props) {
    return (
        <div className="container px-lg-5 px-md-5 position-relative">
           

            {/* Content Section */}
            <div className="row">
                <div className="col">
                    <h1 className="display-2 fw-bold">{props.head}</h1>
                    <p className="fs-5">{props.par}</p>
                    <div className="pt-2">
                        <Homebutton name="Take Your Next Step With Us" link={props.link} />
                    </div>
                </div>
            </div>

            {/* Optional Image Section */}
            {props.img && (
                <div className="row mt-4 ">
                    <div className="col">
                        <LazyLoad height={200} offset={100}>
                            {React.cloneElement(props.img, {
                                className: 'img-fluid rounded', // Ensure image responsiveness and style
                                alt: props.altText || 'Welcome Image', // Default alt text for SEO
                            })}
                        </LazyLoad>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Working_Welcome;
