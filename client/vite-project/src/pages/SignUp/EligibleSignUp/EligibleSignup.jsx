import React from "react";
import "./eligiblesignup.css";

const EligibleSignup = () => {
  return (
    <div className="sign-in-pass-container">
      <div className="sign-in-pass-wrapper">
        <button
          className="sigin-pass-back-btn"
          onClick={() => navigate("/sign-in")}
        >
          &lt; BACK
        </button>

        <img
          className="sign-in-pass-logo"
          src="/Images/Signin/EALogo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default EligibleSignup;
