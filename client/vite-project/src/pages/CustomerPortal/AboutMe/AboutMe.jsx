import React from "react";
import "./aboutme.css";
import EditIcon from "@mui/icons-material/Edit";

const AboutMe = () => {
  return (
    <div className="cp-abtme">
      <div className="cp-abtme-basicinfo">
        <div className="cp-abtme-header">
          <h3 className="cp-abtme-heading">Basic Information</h3>
          <button className="cp-abtme-btn">Edit</button>
        </div>
        <div className="cp-abtme-basicinfo-content">
          <div className="cp-abtme-basicinfo-texts">
            <ul className="cp-abtme-basicinfo-list">
              <li className="cp-abtme-basicinfo-list-item">
                <h5>EA ID</h5>
                <p>FunkyGaming</p>
              </li>
              <li className="cp-abtme-basicinfo-list-item">
                <h5>Real Name</h5>
                <p></p>
              </li>
              <li className="cp-abtme-basicinfo-list-item">
                <h5>Date of Birth</h5>
                <p>**/**/1999</p>
              </li>
              <li className="cp-abtme-basicinfo-list-item">
                <h5>Member Since</h5>
                <p>05/20/2022</p>
              </li>
            </ul>
          </div>
          <div className="cp-abtme-basicinfo-img">
            <img
              className="cp-abtme-basicinfo-image"
              src="/public/Images/CP/AboutMe/BasicImg.png"
              alt=""
            />
          </div>
          <EditIcon className="cp-abtme-basicinfo-img-edit" />
        </div>
        <hr />
      </div>
      <div className="cp-abtme-email">
        <div className="cp-abtme-header">
          <h3 className="cp-abtme-email-heading">Email Address</h3>
          <button className="cp-abtme-btn">Edit</button>
        </div>

        <div className="cp-abtme-email-texts">
          <h5>Email</h5>
          <p>h****5@gmail.com</p>
          <h5 style={{ color: "green" }}>Verified</h5>
        </div>
        <hr />
      </div>
      <div className="cp-abtme-phone">
        <div className="cp-abtme-header">
          <h3 className="cp-abtme-phone-heading">Phone Number</h3>
        </div>
        <div className="cp-abtme-phone-texts">
          <p style={{ paddingBottom: "20px" }}>You do not have phone number</p>
          <button className="cp-abtme-phone-btn">Add Phone Number</button>
        </div>
        <hr />
      </div>
      <div className="cp-abtme-regional">
        <div className="cp-abtme-header">
          <h3 className="cp-abtme-heading">Regional Settings</h3>
          <button className="cp-abtme-btn">Show</button>
          <button className="cp-abtme-btn">Edit</button>
        </div>
        <div className="cp-abtme-regional-content">
          <div className="cp-abtme-regional-texts">
            <ul className="cp-abtme-regional-list">
              <li className="cp-abtme-regional-list-item">
                <h5>Country/Region</h5>
                <p>*****</p>
              </li>
              <li className="cp-abtme-regional-list-item">
                <h5>Language</h5>
                <p>*****</p>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="cp-abtme-phone">
        <div className="cp-abtme-header">
          <h3 className="cp-abtme-phone-heading">Game Specific Identities</h3>
        </div>
        <div className="cp-abtme-phone-texts">
          <p style={{ paddingBottom: "20px" }}>No other identities</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default AboutMe;
