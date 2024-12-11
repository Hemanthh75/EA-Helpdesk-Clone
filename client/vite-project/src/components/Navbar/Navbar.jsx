import React, { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isHamrburgerOpen, setIsHamburgerOpen] = useState(false);

  {
    /* function for hamburger functionality */
  }
  const handleHamburger = (event) => {
    event.preventDefault();
    setIsHamburgerOpen(true);
    console.log(isHamrburgerOpen);
  };

  {
    /*function for dropdown navigation */
  }
  const navigate = useNavigate();

  const handledropdownchange = (event) => {
    //console.log(event)
    const selectedvalue = event.target.value;
    console.log(selectedvalue);

    if (selectedvalue) {
      navigate(selectedvalue);
    }
  };

  return (
    <div className="navbar-container">
      {/* Creating navbar items */}
      <div>
        <Link to="/">
          <img
            className="navbar-items navbar-logo"
            src="/public/images/EA Help_logo.png"
          />
        </Link>
      </div>

      {/* Navbar for large screens */}
      <div className="navbar-non-logo-items">
        <span className="navbar-items navbar-text">
          <Link
            to="/my-cases"
            style={{ textDecoration: "none", color: "black" }}
          >
            My cases
          </Link>{" "}
          {/*Linking my cases path */}
        </span>

        <select
          className="navbar-items navbar-dropdown"
          onChange={handledropdownchange}
        >
          <option className="navbar-dropdown-item" hidden value="">
            Manage My Account
          </option>
          <option className="navbar-dropdown-item" value="/sign-in">
            Change or Recover Password
          </option>
          <option className="navbar-dropdown-item" value="/sign-in">
            Change Email Address
          </option>
          <option className="navbar-dropdown-item" value="/sign-in">
            Order Management
          </option>
          <option className="navbar-dropdown-item" value="/sign-in">
            Redeem a Code
          </option>
          <option className="navbar-dropdown-item" value="/sign-in">
            Account Security
          </option>
          <option className="navbar-dropdown-item" value="/sign-in">
            Link or Unlink my EA Account
          </option>
          <option className="navbar-dropdown-item" value="/my-ban-history">
            My ban History
          </option>
        </select>

        <span className="navbar-items navbar-login">
          <Link
            to="/sign-in"
            style={{ textDecoration: "none", color: "black" }}
          >
            Login/
          </Link>
        </span>
        <span className="navbar-items navbar-signup">
          <Link
            to="/sign-up"
            style={{ textDecoration: "none", color: "black" }}
          >
            Signup
          </Link>
        </span>
      </div>

      {/* Navbar for small screens */}
      <div className="navbar-non-logo-items-small-screens">
        <img
          className="hamburger-icon-navbar"
          src="/public/images/hamburger.png"
          alt="hamburgerlogo"
          onClick={handleHamburger}
        />
      </div>

      {isHamrburgerOpen && (
        <div className="navbar-menu-small-screens">
          <img
            src="/public/images/hamburger.png"
            className="menu-hamburger"
            alt="hamburgerlogo"
            onClick={() => setIsHamburgerOpen(!isHamrburgerOpen)}
          />
          <div className="navbar-menu-items-small-screens">
            <p className="navbar-items-small-screens">
              <Link to="/sign-in">Login/</Link>/
              <Link to="/sign-up">Signup</Link>
            </p>
            <p className="navbar-items-small-screens">
              {" "}
              <Link to="/my-cases">My cases</Link>{" "}
            </p>
            <select className="navbar-items-small-screens navbar-dropdown-small-screen">
              <option
                className="navbar-dropdown-item-small-screen"
                hidden
                value=""
              >
                Manage My Account
              </option>
              <option className="navbar-dropdown-item-small-screen" value="1">
                Change or Recover Password
              </option>
              <option className="navbar-dropdown-item-small-screen" value="2">
                Change Email Address
              </option>
              <option className="navbar-dropdown-item-small-screen" value="3">
                Order Management
              </option>
              <option className="navbar-dropdown-item-small-screen" value="4">
                Redeem a Code
              </option>
              <option className="navbar-dropdown-item-small-screen" value="5">
                Account Security
              </option>
              <option className="navbar-dropdown-item-small-screen" value="6">
                Link or Unlink my EA Account
              </option>
              <option className="navbar-dropdown-item-small-screen" value="7">
                My ban History
              </option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
