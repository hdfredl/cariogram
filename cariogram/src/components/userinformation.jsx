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
            User
          </button>
          {isOpen && (
            <div className="dropdownContent">
              <h4>Name: </h4>
              <h4>Personnr: </h4>
              <h4>Date: </h4>
              <h4>Investigator: </h4>
            </div>
          )}
        </>
      ) : (
        <>
          <h4>Name: </h4>
          <h4>Personnr: </h4>
          <h4>Date: </h4>
          <h4>Investigator: </h4>
        </>
      )}
    </div>
  );
}

export default UserInformation;
