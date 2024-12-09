import React, { useState } from "react";
import "./termsconditions.css";
import { useNavigate } from "react-router-dom";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const TermsConditions = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="t-c-container">
      <div className="t-c-wrapper">
        <button
          className="t-c-back-btn"
          onClick={() => navigate("/eligible-sign-up")}
        >
          &lt; BACK
        </button>

        <img className="t-c-logo" src="/Images/Signin/EALogo.png" alt="" />

        <h1
          style={{ color: "white", textAlign: "center" }}
          className="t-c-panel-heading"
        >
          Create your EA account
        </h1>

        {/*form of terms and conditions */}
        <form className="t-c-form">
          <h5 className="t-c-heading" style={{ color: "white" }}>
            PROFILE VISIBILITY{" "}
            <span
              onMouseEnter={() => setIsFocused(true)}
              onMouseLeave={() => setIsFocused(false)}
            >
              <HelpOutlineOutlinedIcon />
            </span>
            {isFocused ? (
              <div
                style={{ color: "white" }}
                className="t-c-hover-message"
                onMouseEnter={() => setIsFocused(true)}
                onMouseLeave={() => setIsFocused(false)}
              >
                Shared information includes any games and/or services associated
                with your EA account, game statistics, scores, achievements, and
                online/offline status. You can change your privacy settings by
                visiting your
                <a href="" style={{ color: "blue" }}>
                  EA Account settings
                </a>
                or hide your online status via your friends list on the EA app
                at any time.
              </div>
            ) : (
              ""
            )}
          </h5>
          <div>
            <select className="t-c-dropdown">
              <option value="1">Everyone</option>
              <option value="2">My Friends</option>
              <option value="3">Friends of my friends</option>
              <option value="4">Private</option>
            </select>
          </div>
          <div>
            <div className="t-c-checkbox-container">
              <label className="t-c-checkbox-label">
                <input
                  type="checkbox"
                  className="t-c-checkbox1"
                  onChange={() => setCheckbox1(!checkbox1)}
                />
                Allow players to find me with my email address
              </label>
            </div>
            <div className="t-c-checkbox-container">
              <label className="t-c-checkbox-label">
                <input
                  type="checkbox"
                  className="t-c-checkbox2"
                  onChange={() => setCheckbox2(!checkbox2)}
                />
                Email me about EA products, news, events, and promotions
              </label>
            </div>
            <div className="t-c-checkbox-container">
              <label className="t-c-checkbox-label">
                <input
                  type="checkbox"
                  className="t-c-checkbox3"
                  onChange={() => setCheckbox3(!checkbox3)}
                />
                I have read and accept the User Agreementand EA's Privacy and
                Cookie Policy
              </label>
            </div>
          </div>
          <button
            className={
              checkbox1 && checkbox2 && checkbox3
                ? "t-c-create-btn-active"
                : "t-c-create-btn-inactive"
            }
          >
            CREATE ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
};

export default TermsConditions;
