import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/career";
// import Modal from "./Components/Modal";
import Assessment from "./pages/Assessment";
import CareerMapping from "./Components/CareerMapping";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/upload" element={<Assessment />} />
        <Route path="/career-mapping" element={<CareerMapping />} />
      </Routes>
    </div>
  );
};


export default App;

