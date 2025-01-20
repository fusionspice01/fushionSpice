import React from 'react';
import LazyLoad from 'react-lazyload';


function WithUs_Working(props) {

    return (
        <div className='container px-lg-5 px-md-5'>
            {/* SEO-optimized title */}
            <p className='display-5 text-center fw-bold pb-5'>{props.title}</p>
            
            <div className='row mt-2 pt-2 '>
                <div className='col-lg col-md' >
                    <div className='px-lg-5 px-md-0'>
                        {/* Lazy loading for images in props.col1 */}
                        <LazyLoad height={100} offset={100}>
                            {props.col1}
                        </LazyLoad>
                    </div>
                </div>
                <div className='col-lg col-md align-self-center mt-4 mt-lg-0 mt-md-0' >
                    <h1 className='display-5 fw-bold'>{props.head}</h1>
                    <p className='fs-5 pt-2'>{props.par1}</p>
                    <p className='fs-5'>{props.par2}</p>
                </div>
            </div>

            <div className='row pt-5 mt-5'>
                <div className='col-lg col-md d-lg-none d-sm-block d-print-block' >
                    <div className='px-lg-5 px-md-0'>
                        {/* Lazy loading for images in props.col2 */}
                        <LazyLoad height={200} offset={100}>
                            {props.col2}
                        </LazyLoad>
                    </div>
                </div>
                <div className='col-lg col-md align-self-center mt-5 mt-md-0 mt-lg-0' >
                    <h1 className='display-5 fw-bold'>{props.head1}</h1>
                    <p className='fs-5 pt-2'>{props.par3}</p>
                    <p className='fs-5'>{props.par4}</p>
                </div>
                <div className='col-lg col-md d-none d-lg-block d-print-block' >
                    <div className='px-lg-5 px-md-0'>
                        {/* Lazy loading for images in props.col2 */}
                        <LazyLoad height={200} offset={100}>
                            {props.col2}
                        </LazyLoad>
                    </div>
                </div>
            </div>

            <div className='row mt-5 pt-5' >
                <div className='col-lg col-md'>
                    <div className='px-lg-5 px-md-0'>
                        {/* Lazy loading for images in props.col3 */}
                        <LazyLoad height={200} offset={100}>
                            {props.col3}
                        </LazyLoad>
                    </div>
                </div>
                <div className='col-lg col-md align-self-center' >
                    <h1 className='display-5 fw-bold'>{props.head2}</h1>
                    <p className='fs-5 pt-2'>{props.par5}</p>
                </div>
            </div>
        </div>
    );
}

export default WithUs_Working;
