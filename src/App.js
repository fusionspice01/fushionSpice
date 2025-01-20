import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Working from './pages/Working.js';
import Manufacturing from './pages/Manufacturing.js';
import Education from './pages/Education.js';
import Eventspace from './pages/EventSpaces.js';
import Corporate from './pages/Corporate.js';

import Nav from './layouts/Nav.js';
import Footer from './layouts/Footer.js';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen.js';

import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="working" element={<Working />} />
        <Route path="manufacturing" element={<Manufacturing />} />
        <Route path="education" element={<Education />} />
        <Route path="eventspace" element={<Eventspace />} />
        <Route path="corporate" element={<Corporate />} />
      </Routes>

      {/* Floating Social Media Button at the Right Bottom */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px', // Position at the bottom of the screen
          right: '20px', // Position on the right side
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          zIndex: 1000,
        }}
      >
        <Tooltip title="WhatsApp">
        <Fab
          size="medium"
          href="https://wa.me/1234567890" // Replace with your WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: '#25D366',
            color: 'white',
            '&:hover': {
              backgroundColor: '#128C7E',
            },
          }}
        >
          <WhatsAppIcon />
        </Fab>
      </Tooltip>

     

      {/* LinkedIn */}
      <Tooltip title="LinkedIn">
        <Fab
          size="medium"
          href="https://www.linkedin.com/company/fusion-spice/" // Replace with your LinkedIn profile link
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: '#0077B5',
            color: 'white',
            '&:hover': {
              backgroundColor: '#005582',
            },
          }}
        >
          <LinkedInIcon />
        </Fab>
      </Tooltip>

      {/* Gmail */}
      <Tooltip title="Email">
        <Fab
          size="medium"
          href="mailto:fusionspice.tanishq@gmail.com" // Replace with your email
          sx={{
            backgroundColor: '#D44638',
            color: 'white',
            '&:hover': {
              backgroundColor: '#B23121',
            },
          }}
        >
          <EmailIcon />
        </Fab>
      </Tooltip>

      {/* Facebook */}
      <Tooltip title="Facebook">
        <Fab
          size="medium"
          href="https://www.facebook.com/fusionspice11/" // Replace with your Facebook profile link
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: '#1877F2',
            color: 'white',
            '&:hover': {
              backgroundColor: '#155BC0',
            },
          }}
        >
          <FacebookIcon />
        </Fab>
      </Tooltip>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
