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
import './styles/Home.css';
import './styles/Gallery.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  </StrictMode>
);

