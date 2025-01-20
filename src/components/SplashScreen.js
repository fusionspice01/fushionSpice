import React from 'react';
import Lottie from 'lottie-react';
import '../assets/css/Splash.css';
import Load from '../assets/animations/Animation - 1735191747011.json'

function Splashscreen() {
  return (
    <div className="splash-screen">
      <Lottie
        autoplay
        loop
        animationData={Load}
        style={{ height: '150px', width: '150px' }}
      />
    </div>
  );
}

export default Splashscreen;
