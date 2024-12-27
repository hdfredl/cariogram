import React, { useState } from "react";
import "../styling/Home.css";

function UserInformation() {
  return (
    <div className="userInformation">
      <h4>Namn: </h4>
      <h4>Personnr: </h4>
      <h4>Datum: </h4>
      <h4>Undersökare: </h4>
    </div>
  );
}

export default UserInformation;
