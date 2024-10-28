import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/career";
import Modal from "./Components/Modal";
import Assessment from "./pages/Assessment";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Career />} />
        <Route path="/upload" element={<Assessment />} />
      </Routes>
    </div>
  );
};


export default App;

