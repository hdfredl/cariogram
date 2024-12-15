import React, { useState } from "react";
import "../styling/Home.css";

function HomeButtons() {
  // useStates for triggering
  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    if (number < 3) setNumber(number + 1);
  };

  const decreaseNumber = () => {
    if (number > 0) setNumber(number - 1);
  };

  return (
    <div className="numberControl">
      <p>*Pass argument as names*</p>

      <button onClick={decreaseNumber} className="controlButton">
        -
      </button>
      <div className="numberBox">{number}</div>
      <button onClick={increaseNumber} className="controlButton">
        +
      </button>
      <p>0-3</p>
    </div>
  );
}

export default HomeButtons;
