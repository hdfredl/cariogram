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
import sourceData from "../data/sourceData.json";

function Home() {
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
              {/* Move out later and  refactor */}
              <Pie
                data={{
                  labels: sourceData.map((data) => data.label),
                  datasets: [
                    {
                      label: "Count",
                      data: sourceData.map((data) => data.value),
                      backgroundColor: [
                        "rgba(0, 128, 0, 0.8)",
                        "rgba(128, 0, 128, 0.8)",
                        "rgba(240, 128, 128, 0.8)",
                        "rgba(0, 128, 128, 0.8)",
                        "rgba(255, 255, 0, 0.8)",
                        "rgba(43, 63, 229, 0.8)",
                        "rgba(43, 63, 229, 0.8)",
                        "rgba(43, 63, 229, 0.8)",
                        "rgba(43, 63, 229, 0.8)",
                        "rgba(43, 63, 229, 0.8)",
                        "rgba(43, 63, 229, 0.8)",
                        "rgba(43, 63, 229, 0.8)",
                      ],
                      borderRadius: 5,
                    },
                  ],
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
            <HomeButtons />
            {/* <HomeButtons />
            <HomeButtons />
            <HomeButtons />
            <HomeButtons />
            <HomeButtons />
            <HomeButtons />
            <HomeButtons />
            <HomeButtons />
            <HomeButtons /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
