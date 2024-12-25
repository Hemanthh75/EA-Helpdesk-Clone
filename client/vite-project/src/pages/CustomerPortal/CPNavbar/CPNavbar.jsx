import React from "react";
import "./cpnavbar.css";

const CPNavbar = () => {
  return (
    <div className="cp-navbar-container">
      <ul className="cp-navbar-items">
        <li className="cp-navbar-img-item">
          <img
            src="/public/Images/CP/cp-img.jpeg"
            alt=""
            className="cp-navbar-img"
          />
        </li>
        <li className="cp-navbar-text-item">
          <p className="cp-navbar-text">Welcome, FunkyGaming</p>
        </li>
        <li className="cp-navbar-vertical-line"></li>
        <li className="cp-navbar-logout-item">
          <a href="" className="cp-navbar-logout">Log Out</a>
        </li>
        <li className="cp-navbar-vertical-line-2"></li>
        <li className="cp-navbar-eahelp-item">
          <a href="" className="cp-navbar-eahelp">EA Help</a>
        </li>
        <li className="cp-navbar-eacom-item">
          <a href="" className="cp-navbar-eacom">ea.com</a>
        </li>
      </ul>
    </div>
  );
};

export default CPNavbar;
