import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./assets/css/Style.css";
import './assets/bootstrap-5.3.3-dist/css/bootstrap.min.css';
// import "./assets/bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js";
import 'animate.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='roboto-thin'>
    <App />
    </div>
    

  </React.StrictMode>
);

