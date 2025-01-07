import React from "react";
import "./family.css";

const Family = () => {
  return (
    <div className="Family-container">
      <div className="Family-content">
        <h3>Family (1)</h3>
        <h3 style={{ marginTop: "20px" }}>Adults</h3>
        <p style={{ fontSize: "10px", marginTop: "5px" }}>Age 18 and over</p>
        <div className="family-logo">
          <div className="family-logo-details">
            <img src="/public/Images/CP/Family/logo.png" alt="" />
            <p>FunkyGaming</p>
            <p style={{ color: "gray" }}>Adult</p>
          </div>
        </div>
        <hr />
        <h3 style={{ marginTop: "20px" }}>Teens</h3>
        <p style={{ fontSize: "10px", marginTop: "5px" }}>Age 18 and over</p>
        <p style={{ marginTop: "30px" }}>
          <strong style={{ color: "gray" }}>
            There are no teen accounts in your family
          </strong>
        </p>
        <button className="family-teen-button">Add Teen Account</button>
        <hr style={{ marginTop: "30px" }} />
      </div>
    </div>
  );
};

export default Family;
