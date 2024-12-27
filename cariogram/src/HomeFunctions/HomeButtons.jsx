import React, { useState } from "react";
import "../styling/Home.css";
import sourceData from "../data/sourceData.json";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function HomeButtons({ onDataUpdate }) {
  const [number, setNumber] = React.useState(sourceData.map(() => 0));

  const increaseNumber = (index) => {
    setNumber((prev) => {
      const updated = [...prev];
      if (updated[index] < 3) {
        updated[index] += 1;
      }
      return updated;
    });
  };

  const decreaseNumber = (index) => {
    setNumber((prev) => {
      const updated = [...prev];
      if (updated[index] > 0) {
        updated[index] -= 1;
      }
      return updated;
    });
  };

  React.useEffect(() => {
    onDataUpdate(number);
  }, [number]);

  return (
    <div className="numberControlContainer">
      {sourceData.map((data, index) => (
        <div key={index} className="numberControl">
          <p>{data.label}</p>
          <button onClick={() => decreaseNumber(index)}>-</button>
          <div className="numberBox">{number[index]}</div>
          <button onClick={() => increaseNumber(index)}>+</button>
          <p>0-3</p>
        </div>
      ))}
    </div>
  );
}

export default HomeButtons;
