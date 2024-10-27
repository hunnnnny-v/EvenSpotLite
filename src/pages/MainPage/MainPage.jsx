// import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css"; // Import CSS file

const MainPage = () => {
  return (
    <div className="main-page">
      {/* // Main container for the page */}
      <header className="hero-section">
        {/* // Header section */}
        <h1 className="hero-title">Welcome to Event Spot Lite</h1>

        {/* // Main title of the page */}
        <p className="hero-subtitle">
          Discover and explore events that make every moment memorable! 
          {/* Subtitle explaining the purpose of the website */}
        </p>
        <Link to="/event-list">
          {/* // Link to the event list page */}
          <button className="cta-button">Explore Events</button>
          {/* // Button to trigger navigation to the event list */}
        </Link>
      </header>
    </div>
  );
};

export default MainPage;
