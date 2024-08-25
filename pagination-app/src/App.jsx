import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import AddAadhar from "./components/aadhar/AddAadhar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-aadhar" element={<AddAadhar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
