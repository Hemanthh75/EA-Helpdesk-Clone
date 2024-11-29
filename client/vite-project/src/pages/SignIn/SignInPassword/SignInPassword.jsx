import React, { useEffect, useState } from "react";
import "./signinpassword.css";
import { useLocation, useNavigate } from "react-router-dom";

const SignInPassword = () => {
  const [contact, setContact] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  //console.log(location);
  const inputValue = location.state?.inputValue;
  const countryCode = location.state?.dataFromChild.cc;
  //console.log(countryCode);

  //console.log(inputValue);

  useEffect(() => {
    const length = inputValue.length;
    if (/^\d+$/.test(inputValue)) {
      //Logic if the input value is mobile number and we wanna show hashed...
      //console.log(inputValue);
      const lastDigits = inputValue.substring(length - 4, length);
      const remainingDigitsLength = inputValue.substring(0, length - 4).length;
      const hashedDigits = Array.from({ length: remainingDigitsLength });
      hashedDigits.fill("*");
      //console.log(hashedDigits.join(""));
      setContact(`${countryCode}${hashedDigits.join("")}${lastDigits}`);
    } else {
      //This is for emailll...
      const split = inputValue.split("@");
      const emailLetters = `@${split[1]}`;
      const fisrtTwo = `${split[0]}`.substring(0, 2);
      const lengthFrom3rdLetter = split[0].substring(
        2,
        split[0].length - 1
      ).length;
      const hashedLetters = Array.from({ length: lengthFrom3rdLetter });
      hashedLetters.fill("*");
      setContact(`${fisrtTwo}${hashedLetters.join("")}${emailLetters}`);
    }
  }, [inputValue]);

  //console.log(`Email: ${email}`, `PhoneNumber: ${phoneNumber}`);

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

        <div className="sign-in-pass-panel">
          <h1 className="sign-in-pass-panel-heading">Enter your password</h1>
          <p
            className="sign-in-pass-panel-text"
            style={{ color: "white", textAlign: "center", fontSize: "18px" }}
          >
            {/^\d+$/.test(inputValue) ? (
              <>Enter your password for {contact}</>
            ) : (
              <>Enter your password for {contact}</>
            )}
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
