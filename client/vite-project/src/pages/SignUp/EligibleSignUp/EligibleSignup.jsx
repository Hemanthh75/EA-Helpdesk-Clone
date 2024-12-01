import React from "react";
import "./eligiblesignup.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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

        <h1 style={{ color: "white", textAlign: "center" }}>
          Create your EA account
        </h1>

        <form className="eligible-sign-up-form">
          <p>
            EMAIL ADDRESS <InfoOutlinedIcon />
          </p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
          />
          <p>EA ID</p>
          <input type="text" name="eaid" placeholder="Enter your EA ID" />
          <p style={{ color: "gray" }}>
            This is how your friends can find you in the EA app or in EA games.
            Your EA ID must be 4-16 characters long.
          </p>
          <p className="eligible-sign-up-password">PASSWORD</p>
          <input type="password" placeholder="Enter your password" className="eligible-sign-up-password-input"/>
          <button>NEXT</button>
        </form>
      </div>
    </div>
  );
};

export default EligibleSignup;
