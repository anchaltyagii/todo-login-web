import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import { todo } from "./Components/helperTodo";
import Login from "./Screens/Login/Login";
import Dashboard from "./Screens/Dashboard/Dashboard";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("fullName") === null) {
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
