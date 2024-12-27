import React, { useState } from "react";
import "../styling/Home.css";

function HomeRiskDropdown() {
  // useStates for triggering
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Pass argument later: not Landområde..

  return (
    <div className="riskDropdown">
      <p>Land område: </p>
      <select
        value={selectedOption}
        onChange={handleChange}
        className="dropdownSelect"
      >
        <option value="" disabled>
          Välj alternativ
        </option>
        <p>Land område: </p>
        <option value="landArea">Land Area</option>
        <p>Grupp: </p>
        <option value="riskArea">Risk Area</option>
      </select>
      {selectedOption && (
        <p className="dropdownMessage">
          Du har valt: <strong>{selectedOption}</strong>
        </p>
      )}
    </div>
  );
}

export default HomeRiskDropdown;
