import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/Home.css";
import HomeButtons from "../HomeFunctions/HomeButtons";

function Home() {
  // Test
  const CircleDiagram = () => {
    return (
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="100"
          cy="100"
          r="80"
          stroke="#3498db"
          strokeWidth="4"
          fill="none"
        />
        <text x="100" y="105" textAnchor="middle" fontSize="18" fill="#3498db">
          Circle Diagram
        </text>
      </svg>
    );
  };

  return (
    <div className="containerWrapper">
      <div className="anotherContainer">
        <div>
          <div className="leftBlock">
            <h4>Lägg Navbar här</h4>
          </div>
        </div>
        <div>
          <div className="centerBlock">
            <div classNane="diagramInformation">
              <p>All info om Diagram visas i denna div</p>
              <CircleDiagram></CircleDiagram>
            </div>
          </div>
        </div>
        <div className="topRightBlock"></div>
        <div className="rightBlock">
          <div className="scaleButtons">
            <h4>Alla 10 knappar visas här i denna div</h4>
            <HomeButtons />
            <HomeButtons />
            <HomeButtons />
            <HomeButtons />
            <HomeButtons />
            <HomeButtons />
            <HomeButtons />
            <HomeButtons />
            <HomeButtons />
            <HomeButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
