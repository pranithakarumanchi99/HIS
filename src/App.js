import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import LandingRoute from "./routes/LandingRoute";

function App() {
  return (
    <div>
      <Router basename={process.env.REACT_APP_URL}>
        <LandingRoute />
      </Router>
    </div>
  );
}

export default App;
