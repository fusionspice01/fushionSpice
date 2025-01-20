import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Client() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container  " >
        <h1 className="text-center pb-3 mt-5 display-3 animate__bounceIn " >Industries We Serve</h1>

        {/* Desktop View */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 border-top  border-3 pt-5 pb-5 d-none d-lg-flex d-md-flex d-print-none">
          {[
            {
              title: 'Corporate Companies',
              description: 'We cater to a wide range of corporate clients, including multinational companies and leading organizations.',
              iconSrc: 'https://cdn.lordicon.com/lxrsqlrx.json',
              iconColor: 'primary:#16c72e',
              animationDuration: 700,
            },
            {
              title: 'Manufacturing Facilities',
              description: 'Our services extend to various Manufacturing Units including Fashion, Automobile, Electronics.',
              iconSrc: 'https://cdn.lordicon.com/zzjjvkam.json',
              iconColor: 'primary:#000000,secondary:#08a88a',
              animationDuration: 1200,
            },
            {
              title: 'Event Spaces',
              description: 'Providing hospitality services for events, conferences, and gatherings at different venues.',
              iconSrc: 'https://cdn.lordicon.com/abfverha.json',
              iconColor: 'primary:#16c72e',
              animationDuration: 1700,
            },
            {
              title: 'Schools and Colleges',
              description: 'We specialize in offering cafeteria services tailored to the dynamic environment of educational institutions.',
              iconSrc: 'https://cdn.lordicon.com/eeouelif.json',
              iconColor: 'primary:#000000,secondary:#08a88a',
              animationDuration: 2200,
            },
          ].map((client, index) => (
            <div className="col zoom-in" key={index}>
              <div className="card bg-transparent B_CARD border-0 h-100 shadow-lg rounded" data-aos="flip-left" data-aos-duration={client.animationDuration}>
                <div className="card-body">
                  <lord-icon
                    src={client.iconSrc}
                    trigger="in"
                    colors={client.iconColor}
                    style={{ width: "50px", height: "50px" }}
                    className="mb-2"
                    aria-label={`${client.title} Icon`}
                  />
                  <p className="fw-bold">{client.title}</p>
                  <p className="card-text">{client.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 border-top border-bottom border-3 pt-5 pb-5 d-lg-none d-md-none d-print-none">
          {[
            {
              title: 'IT Companies',
              description: 'We cater to a wide range of corporate clients, including multinational companies and leading organizations.',
              iconSrc: 'https://cdn.lordicon.com/lxrsqlrx.json',
              iconColor: 'primary:#16c72e',
              animationDuration: 700,
            },
            {
              title: 'Manufacturing Facilities',
              description: 'Our services extend to various Manufacturing Units including Fashion, Automobile, Electronics.',
              iconSrc: 'https://cdn.lordicon.com/zzjjvkam.json',
              iconColor: 'primary:#000000,secondary:#08a88a',
              animationDuration: 1200,
            },
            {
              title: 'Event Spaces',
              description: 'Providing hospitality services for events, conferences, and gatherings at different venues.',
              iconSrc: 'https://cdn.lordicon.com/abfverha.json',
              iconColor: 'primary:#16c72e',
              animationDuration: 1700,
            },
            {
              title: 'Schools and Colleges',
              description: 'We specialize in offering cafeteria services tailored to the dynamic environment of educational institutions.',
              iconSrc: 'https://cdn.lordicon.com/eeouelif.json',
              iconColor: 'primary:#000000,secondary:#08a88a',
              animationDuration: 2200,
            },
          ].map((client, index) => (
            <div className="col zoom-in" key={index}>
              <div className="card bg-transparent B_CARD border-0 h-100 shadow-lg rounded" data-aos="zoom-in" data-aos-duration={client.animationDuration}>
                <div className="card-body">
                  <lord-icon
                    src={client.iconSrc}
                    trigger="in"
                    colors={client.iconColor}
                    style={{ width: "50px", height: "50px" }}
                    className="mb-2"
                    aria-label={`${client.title} Icon`}
                  />
                  <p className="fw-bold">{client.title}</p>
                  <p className="card-text">{client.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='pb-5 mb-5'></div>
    </>
  );
}

export default Client;
