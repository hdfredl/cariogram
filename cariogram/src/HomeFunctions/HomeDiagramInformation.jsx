import React, { useState } from "react";
import "../styling/Home.css";
import diagramDataTable from "../data/diagramDataTable.json";

function HomeDiagramInformation() {
  return (
    <div className="homeDiagramInformation">
      {diagramDataTable.map((data, index) => (
        <h4 key={index}>
          <span
            className="colorBox"
            style={{ backgroundColor: data["background-color"] }}
          ></span>
          {data.label}
        </h4>
      ))}
    </div>
  );
}

export default HomeDiagramInformation;
