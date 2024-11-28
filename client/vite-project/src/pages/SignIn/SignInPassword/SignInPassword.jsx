import React from "react";
import "./signinpassword.css";

const SignInPassword = () => {
  return (
    <div className="sign-in-pass-container">
      <div className="sign-in-pass-wrapper">
        <img
          className="sign-in-pass-logo"
          src="/Images/Signin/EALogo.png"
          alt=""
        />

        <div className="sign-in-pass-panel">
          <h1 className="sign-in-pass-panel-heading">Enter your password</h1>
          <p
            className="sign-in-pass-panel-text"
            style={{ color: "white", textAlign: "center", fontSize: "18px" }}
          >
            Enter your password for +91******1439
          </p>
        </div>

        <form className="sign-in-pass-form">
          <label className="sign-in-pass-password">PASSWORD</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="sign-in-pass-input"
          />

          <button className="sign-in-pass-button">SIGN IN</button>
        </form>

        <div className="sigin-forgot-newacc">
          <a href="">Forgot yout password, or need to create a new one?</a>
        </div>
      </div>
    </div>
  );
};

export default SignInPassword;
