import React, { useState } from "react";
import "../styling/Home.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import sourceData from "../data/sourceData.json";
import diagramDataTable from "../data/diagramDataTable.json";

ChartJS.register(ArcElement, Tooltip, Legend);

function HomeButtons({ onDataUpdate }) {
  const [number, setNumber] = useState(sourceData.map(() => 0));

  const calculateCategoryScores = () => {
    const categoryScores = diagramDataTable.map((category) => {
      const categoryItems = sourceData
        .map((item, index) => ({
          ...item,
          origIndex: index,
        }))
        .filter((data) => data.category === category.category);

      const categoryScore = categoryItems.reduce(
        (sum, item) => sum + number[item.origIndex] * item.weight,
        0
      );

      return {
        label: category.label,
        individualScore: categoryScore,
        color: category["background-color"],
      };
    });

    // count all scores in categories
    const totalScore = categoryScores.reduce(
      (sum, category) => sum + category.individualScore,
      0
    );

    // cap to 100%
    return categoryScores.map((category) => ({
      label: category.label,
      value:
        // if > 0
        totalScore > 0
          ? ((category.individualScore / totalScore) * 100).toFixed(1)
          : 0,
      color: category.color,
    }));
  };

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
    const categoryScores = calculateCategoryScores();
    onDataUpdate(categoryScores);
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
