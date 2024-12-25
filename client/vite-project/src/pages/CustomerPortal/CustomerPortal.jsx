import React, { useState } from "react";
import "./customerportal.css";
import CPNavbar from "./CPNavbar/CPNavbar";
import CPFooter from "./CPFooter/CPFooter";
import { Helmet } from "react-helmet";
import AboutMe from "./AboutMe/AboutMe";
import Security from "./Security/Security";
import Privacy from "./Privacy/Privacy";
import Email from "./Email/Email";
import Order from "./Order/Order";
import Payment from "./Payment/Payment";
import Redeem from "./Redeem/Redeem";
import Player from "./Player/Player";
import Family from "./Family/Family";
import EAData from "./EAData/EAData";
import Playtesting from "./Playtesting/Playtesting";
import Connections from "./Connections/Connections";



const CustomerPortal = () => {

  //Creating a activevalues variable and initiating with an array of 12 false values
  const [activeValues, setIsActiveValues] = useState(
    Array(12)
      .fill(false)
      .map((value, index) => index === 0)
  );

  //Creating a handleclick function for onclick of every list item with parameter starting from 0 to 11.
  const handleClick = (index) => {
    const newValues = Array(12).fill(false);
    newValues[index] = true;
    setIsActiveValues(newValues);
  };

  //console.log(activeValues);


  //since we cannot use the switch condition in jsx we are use it in a render function and calling that in jsx
  const renderComponent = () => {
    const trueValue = activeValues.indexOf(true);
    console.log(trueValue);

    switch (trueValue) {
      case 0:
        return <AboutMe />;
      case 1:
        return <Security />;
      case 2:
        return <Privacy />;
      case 3:
        return <Email />;
      case 4:
        return <Order />;
      case 5:
        return <Payment />;
      case 6:
        return <Redeem />;
      case 7:
        return <Player />;
      case 8:
        return <Family />;
      case 9:
        return <EAData />;
      case 10:
        return <Playtesting />;
      case 11:
        return <Connections />;
    }
  };

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=980" />  
      </Helmet>  
      <CPNavbar />
      <div className="cp-container">
        <div className="cp-container-info">
          <img src="/public/Images/CP/EAbiglogo.png" alt="" />
          <p>
            <a href="" style={{ textDecoration: "none", color: "#269dcf" }}>
              Home
            </a>
            / EA Account
          </p>
          <h2 style={{ marginTop: "20px" }}>My Account: About Me</h2>
          <div className="cp-topics-list-container">
            <ul className="cp-topics-list">
              <li
                className="cp-topics-list-item"
                onClick={() => handleClick(0)}
              >
                <h3>About Me</h3>
              </li>
              <li
                className="cp-topics-list-item"
                onClick={() => handleClick(1)}
              >
                <h3>Security</h3>
              </li>
              <li
                className="cp-topics-list-item"
                onClick={() => handleClick(2)}
              >
                <h3>Privacy Settings</h3>
              </li>
              <li
                className="cp-topics-list-item"
                onClick={() => handleClick(3)}
              >
                <h3>Email Preferences</h3>
              </li>
              <li
                className="cp-topics-list-item"
                onClick={() => handleClick(4)}
              >
                <h3>Order History</h3>
              </li>
              <li
                className="cp-topics-list-item"
                onClick={() => handleClick(5)}
              >
                <h3>Payment Methods</h3>
              </li>
              <li
                className="cp-topics-list-item"
                onClick={() => handleClick(6)}
              >
                <h3>Redeem Product Code</h3>
              </li>
              <li
                className="cp-topics-list-item"
                onClick={() => handleClick(7)}
              >
                <h3>Player Controls</h3>
              </li>
              <li
                className="cp-topics-list-item"
                onClick={() => handleClick(8)}
              >
                <h3>Family</h3>
              </li>
              <li
                className="cp-topics-list-item"
                onClick={() => handleClick(9)}
              >
                <h3>Your EA Data</h3>
              </li>
              <li
                className="cp-topics-list-item"
                onClick={() => handleClick(10)}
              >
                <h3>Electronic Arts Playtesting</h3>
              </li>

              <li
                className="cp-topics-list-item"
                onClick={() => handleClick(11)}
              >
                <h3>Connections</h3>
              </li>
            </ul>
            <div>{renderComponent()}</div>
          </div>
        </div>
      </div>
      <CPFooter />
    </>
  );
};

export default CustomerPortal;
