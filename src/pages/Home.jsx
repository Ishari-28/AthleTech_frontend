import React from 'react';
import '../styles/Home.css';



// Main Section
const Main = () => {
  return (
        <div className="main">
            <div className="container">
                <p className="itext1">University Of Moratuwa | Sri  Lanka</p>   
                <p className="itext2">Unleash the Champion <br></br> in You!</p>
                <p className="itext3">Mora Kid Athlete – The Ultimate Track & Field Meet for <br></br>Rising Stars</p>
                <p className="itext4">Run, Jump, Throw | Build Your Legacy</p>
            </div>
        </div>
  );
};

// Cards Section
const Cards = () => {
    return (
        <div className="topic">
            <h1>Explore</h1>
        <div className="cards-container">
            <a href="/entry-form" className="card" style={{ backgroundImage: "url('./src/assets/images/Entryform.svg')" }}>
                <h3>Entry Form</h3>
                <p>Closing date: 25-02-2025</p>
            </a>
            <a href="/handbook" className="card" style={{ backgroundImage: "url('./src/assets/images/Handbook.svg')" }}>
                <h3>Hand Book</h3>
                <p>Details about MORA KID Athletic meet programs.</p>
            </a>
            <a href="/schedule" className="card" style={{ backgroundImage: "url('./src/assets/images/Schedule.svg')" }}>
                <h3>Schedule</h3>
                <p>2-day event. Schedule will be announced soon!</p>
            </a>
        </div>
        </div>
  );
};


// Content Section
const Content = () => {
  return (
    <div className="content-container">
      <div className="text-section">
        <h1>MORA Kid Athletic</h1>
        <p>
          Welcome to the official home of "Mora Kid Athlete" – where the future champions of Sri Lanka make their debut!
          Here, young athletes can register for the exciting competition, and parents can easily access event details.
          This platform is dedicated to bringing you the latest updates on the all-island kids’ athletic meet, organized
          by the University of Moratuwa Athletic Team. Stay connected as we share event highlights, results, and inspiring
          stories of young athletes as they strive for greatness. Explore more about our university’s proud athletic
          heritage, meet the athletes, and join us in celebrating the next generation of sporting talent!
        </p>
      </div>
      <div className="image-section">
        <img src="./src/assets/images/Home page body.svg" alt="Kids Athletic Event" />
      </div>
    </div>
  );
};

// Partners Section
const Partners = () => {
    return (
    <div className="partners-container">
    <div className="topic">
        <h1>Our Partners</h1>   
      <div className="partners-table">
        <a href="https://www.crampguardplus.com" target="_blank" rel="noopener noreferrer">
          <img src="./src/assets/images/Cramp guard plus.svg" alt="Crampguard Logo" className="partner-logo" />
        </a>
        <a href="https://www.samaposha.com" target="_blank" rel="noopener noreferrer">
          <img src="./src/assets/images/Samaposha.svg" alt="Samaposha Logo" className="partner-logo" />
        </a>
        <a href="https://www.pickme.lk" target="_blank" rel="noopener noreferrer">
          <img src="./src/assets/images/Pick_me.svg" alt="PickMe Logo" className="partner-logo" /> 
        </a>
        <a href="https://www.partner4.com" target="_blank" rel="noopener noreferrer">
          <img src="./src/assets/images/partners 2.svg" alt="Partner 4 Logo" className="partner-logo" />
        </a>
        <a href="https://www.moraspirit.com" target="_blank" rel="noopener noreferrer">
          <img src="./src/assets/images/Moraspirit.svg" alt="MoraSpirit Logo" className="partner-logo" />
        </a>
        <a href="https://www.partner6.com" target="_blank" rel="noopener noreferrer">
          <img src="./src/assets/images/Ncinga.svg" alt="Partner 6 Logo" className="partner-logo" />
        </a>
      </div>
    </div>
    </div>
  );
};

// Main Home Component
const Home = () => {
  return (
    <div>  
      <Main />
      <Cards />
      <Content />
      <Partners />
    </div>
  );
};

export default Home;
