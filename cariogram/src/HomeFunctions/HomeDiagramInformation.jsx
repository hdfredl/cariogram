import React, { useState } from "react";
import DeviceType from "../hooks/devicetype";
import "../styling/Home.css";
import "../styling/homediagraminformation.css";
import diagramDataTable from "../data/diagramDataTable.json";

function HomeDiagramInformation() {
  const isMobile = DeviceType();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isMobile ? "phoneInformation" : "homeDiagramInformation"}>
      {isMobile ? (
        <>
          <button className="dropdownToggle" onClick={() => setIsOpen(!isOpen)}>
            Information
          </button>
          {isOpen && (
            <div className="dropdownContent">
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
          )}
        </>
      ) : (
        <>
          {diagramDataTable.map((data, index) => (
            <h4 key={index}>
              <span
                className="colorBox"
                style={{ backgroundColor: data["background-color"] }}
              ></span>
              {data.label}
            </h4>
          ))}
        </>
      )}
    </div>
  );
}
export default HomeDiagramInformation;
