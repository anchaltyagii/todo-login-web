import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [incorrectPass, setIncorrectPass] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (username && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [username, password]);

  // handle submit
  const handleSubmit = () => {
    if (username === "anchaltyagi" && password === "Test@123") {
      localStorage.setItem("username", username);
      navigate("/");
      setIncorrectPass(false);
    } else {
      setIncorrectPass(true);
    }
  };

  return (
    <div className="login__container">
      <div>
        <h4>Login to your account</h4>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your username"
            onChange={(e: any) => setUsername(e.target.value)}
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
        {incorrectPass && <p className="error-msg">Incorrect password</p>}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={disabled}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
