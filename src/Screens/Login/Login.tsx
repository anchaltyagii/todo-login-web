import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // handle submit
  const handleSubmit = () => {
    if (email === "abc@gmail.com" && password === "Test@123") {
      localStorage.setItem("fullName", email);
      localStorage.setItem("access_token", "acvfvergfiehri");
      navigate("/");
    } else {
      alert("Incorrect Password");
    }
  };
  return (
    <div className="login__container">
      <h4>Login to your account</h4>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          onChange={(e: any) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
