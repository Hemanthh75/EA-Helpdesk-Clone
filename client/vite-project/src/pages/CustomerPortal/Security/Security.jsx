import React from "react";
import "./security.css";

const Security = () => {
  return (
    <div className="cp-security">
      <div className="cp-security-pass">
        <div className="cp-security-pass-header">
          <h3 className="cp-security-pass-heading">Password</h3>
          <button className="cp-security-btn">Edit</button>
        </div>
        <div className="cp-security-content">
          <div className="cp-secuirty-content-texts">
            <h5>Password</h5>
            <p>******</p>
          </div>
        </div>
        <hr />
      </div>
      <div className="cp-security-login">
        <h3 className="cp-security-login-header">Login Verification</h3>
        <p>Login Verification increases the protection of your EA Account. </p>
        <p>
          We'll send you a code when accessing select EA experiences from an
          unrecognized device, including your My Account page.
        </p>
        <button className="cp-security-turn-btn">Turn On</button>
        <h4 className="cp-security-login-header" style={{ paddingTop: "40px" }}>
          Trusted Devices
        </h4>
        <p style={{ paddingBottom: "20px" }}>
          For devices on this list, you'll only need your username and password
          to sign in on the select EA login and registration portals that
          challenge for Login Verification including your account management
          page.
          <a
            className="cp-security-btn"
            style={{ textDecoration: "none", marginLeft: "5px" }}
            href=""
          >
            Learn More
          </a>
        </p>
        <hr />
      </div>

      <div className="cp-security-dd">
        <div className="cp-security-dd-headings">
          <h5>Device Name</h5>
          <h5>Location</h5>
          <h5>Trusted Date</h5>
        </div>
        <hr />
        <div className="cp-security-dd-texts">
          <p>Web browser</p>
          <p>Hyderabad, , India</p>
          <p>Nov 6, 2024</p>
          <button
            className="cp-security-untrust-btn"
            style={{ fontWeight: "bolder" }}
            title="Untrust"
          >
            Untrust
          </button>
        </div>
        <hr />
      </div>

      <div className="cp-security-secondary-mail">
        <h3>Secondary Email</h3>
        <p>
          This makes it easier to get back into your account if you’re ever
          locked out. It also provides another way to reach you with important
          information about your account.{" "}
        </p>
        <button
          className="cp-security-secondary-btn"
          style={{ marginBottom: "25px" }}
        >
          Add Secondary Email
        </button>
        <hr style={{ marginBottom: "20px" }} />
      </div>
    </div>
  );
};

export default Security;
