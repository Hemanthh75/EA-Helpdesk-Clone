import React from "react";
import "./accountsupport.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AccountSupport = () => {
  return (
    <div className="account-support-container">
      <h1 className="account-support-heading">
        Popular help topics in EA Account
      </h1>
      <p className="account-support-text">
        Get help with common issues that players are running into in EA Account.
      </p>
      <div className="account-grid-container">
        <div className="account-grid-item">
          <p className="account-grid-item-text">
            I want to check my ban status
          </p>
          <ArrowForwardIcon style={{ color: "red" }} />
        </div>
        <div className="account-grid-item">
          <p className="account-grid-item-text">
            I need help with Cross Progression
          </p>
          <ArrowForwardIcon style={{ color: "red" }} />
        </div>
        <div className="account-grid-item">
          <p className="account-grid-item-text">
            I'm looking for something I bought
          </p>
          <ArrowForwardIcon style={{ color: "red" }} />
        </div>
        <div className="account-grid-item">
          <p className="account-grid-item-text">
            I want to check my order status
          </p>
          <ArrowForwardIcon style={{ color: "red" }} />
        </div>
        <div className="account-grid-item">
          <p className="account-grid-item-text">
            I want to delete my mobile game account
          </p>
          <ArrowForwardIcon style={{ color: "red" }} />
        </div>
        <div className="account-grid-item">
          <p className="account-grid-item-text">
            I want to link my platform to my EA Account
          </p>
          <ArrowForwardIcon style={{ color: "red" }} />
        </div>
      </div>
      <div className="account-support-all-btn-container">
        <button className="account-support-all-btn">See all help topics</button>
      </div>
    </div>
  );
};

export default AccountSupport;
