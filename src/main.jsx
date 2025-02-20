import App from "./App.jsx";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Home />
//   </StrictMode>,
// )

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home.jsx";
// import Gallery from "./pages/Gallery.jsx";
// import ContactUs from "./pages/ContactUs.jsx";
// import AboutUs from "./pages/AboutUs.jsx";
import "./styles/AboutUs.css";
import "./styles/ContactUs.css";
import "./styles/Home.css";
import "./styles/Gallery.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
