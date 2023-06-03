import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem("fullName");
  const handleLogout = () => {
    localStorage.removeItem("fullName");
    navigate("/login");
  };
  return (
    <div className="header__container">
      <div>Welcome {username}</div>
      <div onClick={handleLogout}>Logout</div>
    </div>
  );
};

export default Header;
