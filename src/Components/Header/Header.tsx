import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");
  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };
  return (
    <div className="header__container">
      <div>
        Welcome <b>{username}</b>
      </div>
      <button className="btn btn-primary logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Header;
