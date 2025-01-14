import React, { useState } from "react";
import DeviceType from "../hooks/devicetype";
import "../styling/Home.css";
import "../styling/userinformation.css";

function UserInformation() {
  const isMobile = DeviceType(); // Hook to determine device type
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="userInformation">
      {isMobile ? (
        <>
          <button className="dropdownToggle" onClick={() => setIsOpen(!isOpen)}>
            Patient
          </button>
          {isOpen && (
            <div className="dropdownContent">
              <h4>Namn: </h4>
              <h4>Personnr: </h4>
              <h4>Datum: </h4>
              <h4>Undersökare: </h4>
            </div>
          )}
        </>
      ) : (
        <>
          <h4>Namn: </h4>
          <h4>Personnr: </h4>
          <h4>Datum: </h4>
          <h4>Undersökare: </h4>
        </>
      )}
    </div>
  );
}

export default UserInformation;
