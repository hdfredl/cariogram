import React, { useState } from "react";
import "../styling/Home.css";

function HomeDiagramInformation() {
  return (
    <div className="homeDiagramInformation">
      <h4>
        Magic number: <span className="colorBox greenColor"></span>
      </h4>
      <h4>
        Magic number: <span className="colorBox purpleColor"></span>
      </h4>
      <h4>
        Magic number: <span className="colorBox lightredColor"></span>
      </h4>
      <h4>
        Magic number: <span className="colorBox tealColor"></span>
      </h4>
      <h4>
        Magic number: <span className="colorBox yellowColor"></span>
      </h4>
    </div>
  );
}

export default HomeDiagramInformation;
