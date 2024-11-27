import React, { useEffect, useState } from "react";
import "./signup.css";
import axios from "axios";

const SignUp = () => {
  const [countries, setCountries] = useState([]);

  //Fetching the countriesss

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name"
      );

      const data = response.data;
      data.sort((a, b) => {
        a.name.common.localeCompare(b.name.common);
      });
      console.log(data);
    };

    fetchCountries();
  }, []);

  return (
    <div className="sign-up-container">
      <div className="sign-up-wrapper">
        <img className="sign-up-logo" src="/Images/Signin/EALogo.png" alt="" />

        <div className="sign-up-panel">
          <h1 className="sign-up-panel-heading">Create your EA Account</h1>

          <p className="sign-up-panel-text" style={{ color: "white" }}>
            Use one of your existing accounts below, or start from the
            beginning.
          </p>

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

          <form className="social-logins-signup-form">
            <label className="social-logins-signup-label">COUNTRY/REGION</label>
            <div className="social-logins-signup-country">
              <select className="social-logins-signup-dropdown">
                <option value="1">India</option>
                <option value="2">Indonesia</option>
              </select>
            </div>

            <label className="social-logins-signup-label">DATE OF BIRTH</label>
            <div className="social-logins-signup-dob">
              <select className="social-logins-signup-dob-month" name="" id="">
                <option value="1" hidden>
                  Month
                </option>
                <option value="2">January</option>
              </select>
              <select className="social-logins-signup-dob-date" name="" id="">
                <option value="1" hidden>
                  Date
                </option>
                <option value="2">1</option>
              </select>
              <select className="social-logins-signup-dob-year" name="" id="">
                <option value="1" hidden>
                  Year
                </option>
                <option value="2">2024</option>
              </select>
            </div>

            <button className="social-logins-signup-next-button">NEXT</button>
          </form>

          <div className="sign-up-bottom-links">
            <p
              style={{
                color: "white",
                fontSize: "18px",
                marginTop: "20px",
              }}
            >
              Already have an account?{" "}
              <a href="" style={{ color: "#235fe3" }}>
                Sign in
              </a>
            </p>

            <a
              href=""
              style={{
                color: "#235fe3",
                fontSize: "18px",
              }}
            >
              Do you want to create an EA Account for your child?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
