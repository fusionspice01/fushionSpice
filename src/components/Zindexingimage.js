import React from 'react';
import LazyLoad from 'react-lazyload';

function Zindexingimage(props) {
    return (
        <div className='container mt-5 pt-5 px-lg-5 px-md-5'>
            <div className='row d-flex justify-content-center zindexing'>
                <div className='col-lg-9 col-md-9 text-center'>
                    {props.img && (
                        <LazyLoad height={200} offset={100}>
                            {React.cloneElement(props.img, {
                                className: 'img-fluid', // Ensure the image is responsive
                                alt: props.altText || 'Descriptive Image' // Default alt text for SEO
                            })}
                        </LazyLoad>
                    )}
                </div>
            </div>
            <div className='p-lg-5 pd-md-5 pt-4'>
                <div className='px-lg-5 px-md-5'>
                    <h1 className='display-6 fw-bold'>{props.head}</h1>
                    <p className='fs-5'>{props.par}</p>
                </div>
            </div>
        </div>
    );
}

export default Zindexingimage;
