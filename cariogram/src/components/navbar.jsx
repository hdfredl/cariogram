import React, { useContext, useEffect, useState } from "react";
import DeviceType from "../hooks/devicetype";
import UserInformation from "../components/userinformation";
import HomeDiagramInformation from "../HomeFunctions/HomeDiagramInformation";
import "../styling/navbar.css";
import "../styling/homediagraminformation.css";

function Navbar() {
  const [activeComponent, setActiveComponent] = useState("Hem");

  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = DeviceType();

  // Temp
  const navOptions = [
    { name: "Hem" },
    { name: "Nytt" },
    { name: "Om oss" },
    { name: "Hjälp" },
    { name: "Tolkning" },
    { name: "Utskrift" },
    { name: "Anteckningar" },
  ];

  return (
    <div className="navbarWrapper">
      <nav className="navbar">
        {isMobile && (
          <div className="displayUserPhone2">
            <HomeDiagramInformation />
          </div>
        )}
        {isMobile && (
          <div className="displayUserPhone">
            <UserInformation />
          </div>
        )}
        {isMobile && (
          <button
            className="hamburgerMenu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        )}
        <ul
          className={`navbarList ${
            isMobile && menuOpen ? "showMenu" : "hideMenu"
          }`}
        >
          {navOptions.map((option, index) => (
            <li
              key={index}
              className={`navbarItem ${
                activeComponent === option.name ? "active" : ""
              }`}
              onClick={() => {
                setActiveComponent(option.name);
                if (isMobile) setMenuOpen(false); // close
              }}
            >
              {option.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
