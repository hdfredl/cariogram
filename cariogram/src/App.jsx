import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import { ProtectedRoute } from "./components/ProtectedRoute";

import Home from "./pages/home";
import LandingPage from "./pages/landingpage";
// import navbar from "./components/navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
      </Router>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
     */}
    </>
  );
}

export default App;
