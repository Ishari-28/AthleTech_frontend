// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client';
// import Home from './pages/Home.jsx';
// import './styles/Home.css';



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Home />
//   </StrictMode>,
// )

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Gallery from './pages/Gallery.jsx';
import ContactUs from './pages/ContactUs.jsx';
import AboutUs from './pages/AboutUs.jsx';
import './styles/AboutUs.css';
import './styles/ContactUs.css';
import './styles/Home.css';
import './styles/Gallery.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs/>} />
      </Routes>
    </Router>
  </StrictMode>
);

