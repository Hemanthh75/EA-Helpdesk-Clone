import React, { useEffect, useState } from "react";
import "./signin.css";
import Countries from "./Countries/Countries";

const SignIn = () => {
  const [inputValue, setInputValue] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [error, setError] = useState("");
  const [countriesList, setCountriesList] = useState(false);
  const [dataFromChild, setDataFromChild] = useState({
    src: "https://flagcdn.com/w320/in.png",
    cc: "+91",
  });

  //setting the inputvalue
  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setInputValue(value);
  };

  useEffect(() => {
    //Condition to check if the input value is purely numbers or consisting of strings.
    if (/^\d+$/.test(inputValue)) {
      setDropdown(true);
    } else {
      setDropdown(false);
      setCountriesList(false);
    }

    //console.log(inputValue, dropdown)
  }, [inputValue]);

  //setting countrieslist state

  const handleCountriesList = (event) => {
    event.preventDefault();
    setCountriesList(!countriesList);
  };

  useEffect(() => {
    console.log(countriesList);
  }, [countriesList]);

  //Function which triggers after clicking next button.

  const handleNext = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!dropdown && !emailRegex.test(inputValue)) {
      setError("Email address is invalid");
    } else if (dropdown && inputValue.length < 10) {
      setError("Phone number is invalid");
    } else {
      setError("");
      alert("form submitted");
    }
  };

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    setCountriesList(false);
  };

  // console.log("Hey Im Parent:", dataFromChild)

  return (
    <div className="sign-in-container">
      <div className="sign-in-wrapper">
        <img className="sign-in-logo" src="/Images/Signin/EALogo.png" alt="" />

        <div className="sign-in-panel">
          <h1 className="sign-in-panel-heading">Sign in to your EA Account</h1>

          <div className="social-logins">
            <img
              src="/Images/Signin/Google.png"
              alt=""
              className="social-login-logo"
            />
            <img
              src="/Images/Signin/fb.png"
              alt=""
              className="social-login-logo"
            />
            <img
              src="/Images/Signin/apple.png"
              alt=""
              className="social-login-logo"
            />
            <img
              src="/Images/Signin/Steam.png"
              alt=""
              className="social-login-logo"
            />
            <img
              src="/Images/Signin/xbox.png"
              alt=""
              className="social-login-logo"
            />
            <img
              src="/Images/Signin/ps.png"
              alt=""
              className="social-login-logo"
            />
          </div>

          <div className="social-logins-divider">
            <span>or</span>
          </div>
        </div>

        <form action="" className="signin-form">
          <label className="sigin-phone-email-label">PHONE OR EMAIL</label>

          <div className="sigin-mobile">
            {dropdown && (
              <div
                className="sigin-mobile-dropdown"
                onClick={handleCountriesList}
              >
                <img
                  src={dataFromChild.src}
                  style={{ width: "32px", height: "24px" }}
                />
                <span
                  style={{
                    color: "white",
                    padding: "5px 5px",
                    overflow: "hidden",
                  }}
                >
                  {dataFromChild.cc}
                </span>
              </div>
            )}
            <input
              type="text"
              value={inputValue}
              placeholder="Enter your phone or email"
              className="sigin-input"
              onChange={handleChange}
              style={{ color: "white" }}
            />
          </div>

          {countriesList && (
            <div style={{ zIndex: 999 }}>
              <Countries sendDataToParent={handleDataFromChild} />
            </div>
          )}

          <div className="sigin-checkbox">
            <input type="checkbox" className="signin-checkbox-input" />
            <label>Remember Me</label>
          </div>

          <button className="sigin-page-next-btn" onClick={handleNext}>
            NEXT
          </button>
          {/*Showing error message */}
        </form>

        {error && (
          <div className="error-message" style={{ color: "red" }}>
            {error.toUpperCase()}
          </div>
        )}

        <div className="sigin-forgot-newacc">
          <a href="">Forgot yout password, or need to create a new one?</a>
        </div>

        <button className="sigin-in-page-create-btn">CREATE ACCOUNT</button>
      </div>
    </div>
  );
};

export default SignIn;
