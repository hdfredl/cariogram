import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  return (
    <div className="container">
      <div>
        <div>
          <div>
            <h4>Lägg Navbar här</h4>
          </div>
        </div>
        <div>
          <h1>HEJ!!!!!!!!!</h1>
        </div>
        <div></div>
        <div className="scaleButtons">
          <h4>Alla 10 knappar visas här i denna div</h4>
        </div>
        <div classNane="diagramInformation">
          <p>All info om Diagram visas i denna div</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
