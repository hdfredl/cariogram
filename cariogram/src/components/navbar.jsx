import React, { useContext, useEffect, useState } from "react";
import "../styling/navbar.css";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Dropdown, Modal } from "react-bootstrap";

function Navbar() {
  // Create navbar options from cariogram
  const [activeComponent, setActiveComponent] = useState("Hem");

  // Dummy data
  const Hem = () => <div>Welcome to Hem!</div>;
  const Nytt = () => <div>Explore Nytt!</div>;
  const OmOss = () => <div>About us in Om oss!</div>;
  const Hjalp = () => <div>Need help? Check Hjälp!</div>;
  const Tolkning = () => <div>Analyze in Tolkning!</div>;
  const Utskrift = () => <div>Print section in Utskrift!</div>;
  const Anteckningar = () => <div>Notes go in Anteckningar!</div>;

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Hem":
        return <Hem />;
      case "Nytt":
        return <Nytt />;
      case "Om oss":
        return <OmOss />;
      case "Hjälp":
        return <Hjalp />;
      case "Tolkning":
        return <Tolkning />;
      case "Utskrift":
        return <Utskrift />;
      case "Anteckningar":
        return <Anteckningar />;
      default:
        return <Hem />;
    }
  };

  return (
    <div className="navbarWrapper">
      <nav className="navbar">
        <ul className="navbarList">
          {[
            "Hem",
            "Nytt",
            "Om oss",
            "Hjälp",
            "Tolkning",
            "Utskrift",
            "Anteckningar",
          ].map((option, index) => (
            <li
              key={index}
              className={`navbarItem ${
                activeComponent === option ? "active" : ""
              }`}
              onClick={() => setActiveComponent(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </nav>
      {/* <div className="contentWrapper">{renderActiveComponent()}</div> */}
    </div>
  );
}

export default Navbar;
