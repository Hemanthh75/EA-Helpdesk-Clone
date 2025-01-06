import React from "react";
import "./redeem.css";

const Redeem = () => {
  return (
    <div className="redeem-code">
      <div className="redeem-product-code">
        <h3>Product Code</h3>
        <p style={{ fontWeight: "bold", fontSize: "12px", marginTop: "7px" }}>
          Enter your product code below to redeem your game or in-game content
        </p>
        <h4 style={{ marginTop: "30px" }}>Product Code</h4>
        <input type="text" name="" id="" />
        <button>Next</button>
      </div>
      <hr style={{ marginTop: "20px" }} />
      <div className="redeem-code-find">
        <h3>Where to Find Your Code</h3>
        <p style={{ fontSize: "12px", marginTop: "10px" }}>
          <strong>Product code example: </strong>A1B2-C3D4-E5F6-G7H8 or
          A1B2C3D4E5F6G7H8
        </p>
        <div className="redeem-code-find-details">
          <div className="redeem-find-email">
            <h4>Emails</h4>
            <p>
              Check your confirmation email to <br />
              find your product code
            </p>
            <img src="/public/Images/CP/Redeem/Email.png" alt="" />
          </div>
          <div className="redeem-find-box">
            <h4>Box or Manual</h4>
            <p>
              Check your box or manual to <br />
              find your product code
            </p>
            <img src="/public/Images/CP/Redeem/Box.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redeem;
