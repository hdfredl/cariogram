import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import LandingPage from "./pages/landingpage";
import React, { useEffect } from "react";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
