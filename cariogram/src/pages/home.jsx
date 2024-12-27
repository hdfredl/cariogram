import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/Home.css";
import HomeButtons from "../HomeFunctions/HomeButtons";
import HomeRiskDropdown from "../HomeFunctions/HomeRiskDropdown";
import HomeDiagramInformation from "../HomeFunctions/HomeDiagramInformation";
import Navbar from "../components/navbar";
import UserInformation from "../components/userinformation";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import sourceData from "../data/sourceData.json";
// import diagramDataTable"../data/diagramDataTable.json";

ChartJS.register(ChartDataLabels);

function Home() {
  const [chartData, setChartData] = React.useState([]);
  const [selectedLabels, setSelectedLabels] = React.useState([]);

  const handleDataUpdate = (numbers) => {
    const total = numbers.reduce((sum, num) => sum + num, 0);
    const filteredData = numbers
      .map((value, index) => ({
        label: sourceData[index].label,
        value: (value / total) * 100 || 0,
      }))
      .filter((item) => item.value > 0);

    setChartData(filteredData.map((item) => item.value));
    setSelectedLabels(filteredData.map((item) => item.label));
  };

  return (
    <div className="containerWrapper">
      <div className="navBar">
        <Navbar />
      </div>

      {/* sections */}
      <div className="anotherContainer">
        <div className="displayUser">
          <UserInformation />
        </div>
        {/* Left */}
        <div className="startWrapper">
          <div className="leftBlock">
            <HomeDiagramInformation />
          </div>
        </div>

        <div className="spaceDividerOne"></div>

        {/* center */}
        <div className="centerWrapper">
          <div className="centerBlock">
            <div className="diagramInformation">
              <Pie
                data={{
                  // labels: selectedLabels,
                  datasets: [
                    {
                      data: chartData,
                      backgroundColor: [
                        "rgba(0, 128, 0, 0.8)",
                        "rgba(128, 0, 128, 0.8)",
                        "rgba(240, 128, 128, 0.8)",
                        "rgba(0, 128, 128, 0.8)",
                        "rgba(255, 255, 0, 0.8)",
                      ],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    tooltip: {
                      callbacks: {
                        label: function (tooltipItem) {
                          const value = tooltipItem.raw; // percntage value
                          const label = selectedLabels[tooltipItem.dataIndex];
                          return `${label}: ${value.toFixed(1)}%`;
                        },
                      },
                    },
                    datalabels: {
                      display: true,
                      formatter: (value) => `${value.toFixed(1)}%`,
                      color: "#fff",
                      font: {
                        weight: "bold",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* right */}
        <div className="rightBlock">
          <div className="scaleButtons">
            <div className="endWrapper">
              <div className="topRightBlock">
                <HomeRiskDropdown />
              </div>
              <div className="topRightBlockChild">
                <HomeRiskDropdown />
              </div>
            </div>
            <HomeButtons onDataUpdate={handleDataUpdate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
