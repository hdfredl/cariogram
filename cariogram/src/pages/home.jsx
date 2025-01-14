import React, { useState } from "react";
import "../styling/Home.css";
import HomeButtons from "../HomeFunctions/HomeButtons";
import HomeRiskDropdown from "../HomeFunctions/HomeRiskDropdown";
import HomeDiagramInformation from "../HomeFunctions/HomeDiagramInformation";
import Navbar from "../components/navbar";
import UserInformation from "../components/userinformation";
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import DeviceType from "../hooks/devicetype";

ChartJS.register(ChartDataLabels);

function Home() {
  const [chartData, setChartData] = useState([]);
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [chartColors, setChartColors] = useState([]);
  const isMobile = DeviceType();

  const handleDataUpdate = (categoryScores) => {
    setChartData(categoryScores.map((item) => parseFloat(item.value)));
    setSelectedLabels(categoryScores.map((item) => item.label));
    setChartColors(categoryScores.map((item) => item.color));
  };
  return (
    <div className={`containerWrapper ${isMobile ? "mobile" : "desktop"}`}>
      <div className="navBar">
        <Navbar />
      </div>
      <div className="anotherContainer">
        {isMobile ? (
          <div className="phoneView">
            <div className="centerWrapper">
              <Pie
                data={{
                  datasets: [
                    {
                      data: chartData,
                      backgroundColor: chartColors,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    tooltip: {
                      callbacks: {
                        label: (tooltipItem) =>
                          `${selectedLabels[tooltipItem.dataIndex]}: ${
                            tooltipItem.raw
                          }%`,
                      },
                    },
                    datalabels: {
                      formatter: (value) => `${value}%`,
                      color: "#fff",
                      font: { weight: "bold" },
                    },
                  },
                }}
              />
            </div>
            <HomeButtons onDataUpdate={handleDataUpdate} />
          </div>
        ) : (
          // PC
          <>
            <div className="displayUser">
              <UserInformation />
            </div>
            <div className="startWrapper">
              <div className="leftBlock">
                <HomeDiagramInformation />
              </div>
            </div>
            <div className="centerWrapper">
              <div className="centerBlock">
                <Pie
                  data={{
                    datasets: [
                      {
                        data: chartData,
                        backgroundColor: chartColors,
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      tooltip: {
                        callbacks: {
                          label: (tooltipItem) =>
                            `${selectedLabels[tooltipItem.dataIndex]}: ${
                              tooltipItem.raw
                            }%`,
                        },
                      },
                      datalabels: {
                        formatter: (value) => `${value}%`,
                        color: "#fff",
                        font: { weight: "bold" },
                      },
                    },
                  }}
                />
              </div>
            </div>
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
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
