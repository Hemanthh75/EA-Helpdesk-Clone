import React from "react";
import "./ineligiblesignup.css";
import { useNavigate } from "react-router-dom";

const IneligibleSignup = () => {
  const navigate = useNavigate();
  return (
    <div className="ineligible-container">
      <div className="ineligible-wrapper">
        <button
          className="ineligible-back-btn"
          onClick={() => navigate("/sign-up")}
        >
          &lt; BACK
        </button>

        <img
          className="ineligible-logo"
          src="/Images/Signin/EALogo.png"
          alt=""
        />

        <h1
          style={{ color: "white", textAlign: "center" }}
          className="ineligible-heading"
        >
          Your account can't be created
        </h1>
        <p
          style={{ color: "white", textAlign: "center" }}
          className="ineligible-text"
        >
          we're sorry, but you are not eligible to create an EA Account at this
          time
        </p>

        <button className="ineligible-btn" onClick={() => navigate("/sign-up")}>
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default IneligibleSignup;
