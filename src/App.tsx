import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Screens/Login/Login";
import Dashboard from "./Screens/Dashboard/Dashboard";
import "./App.scss";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("username") === null) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
