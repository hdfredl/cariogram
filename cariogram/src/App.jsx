import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import LandingPage from "./pages/landingpage";
import React from "react";

function App() {
  return (
    <>
      <Router basename="/cariogram">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
