import React from 'react';
import Homebutton from '../components/Homebutton';
import LazyLoad from 'react-lazyload';
import { useLocation } from 'react-router-dom';

function Working_Home(props) {
  const location = useLocation();

  // Map paths to names
  const pathNames = {
    '/': 'Home',
    '/about': 'About',
    '/contact': 'Contact',
    '/working': 'Working',
    '/manufacturing': 'Manufacturing',
    '/education': 'Education',
    '/eventspace': 'Event Space',
    '/corporate': 'Corporate',
  };

  // Get the current page name based on the pathname
  const currentPath = location.pathname;
  const pageName = pathNames[currentPath] || 'Page';

  return (
    <div className="container-fluid aboutBack px-lg-5 pt-5 mt-5 pb-5 rounded-bottom rounded position-relative">
      {/* Wave animation as background */}

      {/* Content */}
      <div className="row pt-3 content1">
        <div className="col-lg">
          {/* Lazy loading for the image */}
          <LazyLoad height={200} offset={100}>
            {props.img}
          </LazyLoad>
        </div>
        <div className="col-lg align-self-center mt-4 mt-md-4 mt-lg-0">
          <a href="/" className="px-lg-5 px-md-5 nav-link fw-bold pb-3" aria-label="Home">
            <span style={{ marginRight: '5px' }}>Home</span>
            <span style={{ margin: '0 8px' }}>{'>'}</span>
            <span>{pageName}</span>
          </a>
          <p className="display-4 px-lg-5 px-md-5 fw-bold">{props.head}</p>
          <div className="pt-2 px-lg-5 px-md-5">
            <Homebutton name={props.Bname} link={props.link} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Working_Home;
