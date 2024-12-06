import React, { useEffect, useState } from "react";
import "./eligiblesignup.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const EligibleSignup = () => {
  const [email, setEmail] = useState("");
  const [eaid, setEaid] = useState("");
  const [isPassActive, setIsPassActive] = useState(false);
  const [password, setPassword] = useState("");
  const [isactive, setIsActive] = useState(false);
  const [passwordChecker, setPasswordChecker] = useState({
    characters: false,
    lowerCase: false,
    upperCase: false,
    number: false,
  });

  const navigate = useNavigate();

  const hasLowerCase = (str) => {
    for (let char of str) {
      if (char >= "a" && char <= "z") {
        return true;
      }
    }
    return false;
  };

  const hasUpperCase = (str) => {
    for (let char of str) {
      if (char >= "A" && char <= "Z") {
        return true;
      }
    }
    return false;
  };

  const hasNumber = (str) => {
    for (let char of str) {
      if (!isNaN(char) && char !== " ") {
        return true;
      }
    }
    return false;
  };

  console.log(hasNumber("H"));

  useEffect(() => {
    //Checking all fields are filled
    if (!email || !eaid || !password || !email.includes(".c")) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }

    setPasswordChecker((prev) => ({
      ...prev,
      characters: password.length >= 8 && password.length <= 64,
      lowerCase: hasLowerCase(password),
      upperCase: hasUpperCase(password),
      number: hasNumber(password),
    }));
  }, [email, password, eaid]);

  console.log(passwordChecker);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNextbtn = (e) => {
    e.preventDefault();
    if (isactive) {
      navigate("/t&c");
    }
  };
  return (
    <div className="sign-in-pass-container">
      <div className="sign-in-pass-wrapper">
        <button
          className="signin-pass-back-btn"
          onClick={() => navigate("/sign-up")}
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

        <form className="eligible-sign-up-form" onSubmit={handleSubmit}>
          <p>
            EMAIL ADDRESS{" "}
            <span title="Avoid using emails you may lose access to, like school abd work addresses">
              <InfoOutlinedIcon />
            </span>
          </p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>EA ID</p>
          <input
            type="text"
            name="eaid"
            placeholder="Enter your EA ID"
            onChange={(e) => setEaid(e.target.value)}
          />
          <p style={{ color: "gray" }}>
            This is how your friends can find you in the EA app or in EA games.
            Your EA ID must be 4-16 characters long.
          </p>
          <p className="eligible-sign-up-password">PASSWORD</p>
          <input
            type="password"
            placeholder="Enter your password"
            className="eligible-sign-up-password-input"
            onChange={(e) => setPassword(e.target.value)}
            onFocus={(e) => setIsPassActive(true)}
          />

          {isPassActive && (
            <div
              className="sign-up-password-checker"
              style={{ color: "white" }}
            >
              <p style={{ color: "gray" }}>
                Your password must contain the following:
              </p>
              <p>
                {passwordChecker.characters ? (
                  <CheckIcon style={{ color: "green" }} />
                ) : (
                  <CloseIcon style={{ color: "red" }} />
                )}
                8-64 characters
              </p>
              <p>
                {passwordChecker.lowerCase ? (
                  <CheckIcon style={{ color: "green" }} />
                ) : (
                  <CloseIcon style={{ color: "red" }} />
                )}{" "}
                At least 1 lowercase letter
              </p>
              <p>
                {passwordChecker.upperCase ? (
                  <CheckIcon style={{ color: "green" }} />
                ) : (
                  <CloseIcon style={{ color: "red" }} />
                )}{" "}
                At least 1 uppercase letter
              </p>
              <p>
                {passwordChecker.number ? (
                  <CheckIcon style={{ color: "green" }} />
                ) : (
                  <CloseIcon style={{ color: "red" }} />
                )}{" "}
                At least 1 number
              </p>
            </div>
          )}
          <button
            className={isactive ? "active-next-btn" : "inactive-next-button"}
            onClick={handleNextbtn}
          >
            NEXT
          </button>
        </form>
      </div>
    </div>
  );
};

export default EligibleSignup;
