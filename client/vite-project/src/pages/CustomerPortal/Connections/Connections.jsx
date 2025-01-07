import React from "react";
import "./connections.css";

const Connections = () => {
  return (
    <div className="connections-container">
      <div className="connections-content-top">
        <h3>Connected Accounts</h3>
        <p style={{ marginTop: "10px" }}>
          Manage the accounts that you've linked to your EA Account.
        </p>
        <hr />
        <div className="connections-content-items">
          <img src="/public/Images/CP/Connections/psn.png" alt="" />
          <div className="connections-content-items-text">
            <h5>Playstation Network</h5>
            <p>
              Link your accounts to purchase games, save game progress,
              <br /> and find your friends on Account for Playstation™Network.
              An <br /> EA Account can only be linked to one in its lifetime, so
              make <br />
              sure you’re linking your preferred accounts.
            </p>
          </div>
          <button>Link</button>
        </div>
        <hr />
        <div className="connections-content-items">
          <img
            src="/public/Images/CP/Connections/XBX.png"
            alt=""
            style={{ width: "130px", height: "26.64px" }}
          />
          <div className="connections-content-items-text">
            <h5>Xbox</h5>
            <p>
              Link your accounts to purchase games, save game progress, <br />
              and find your friends on Xbox Live profile. An EA Account can{" "}
              <br /> only be linked to one in its lifetime, so make sure you’re{" "}
              <br /> linking your preferred accounts.
            </p>
          </div>
          <button>Link</button>
        </div>
        <hr />
        <div className="connections-content-items">
          <img
            src="/public/Images/CP/Connections/Apple.png"
            alt=""
            style={{ width: "28.88px", height: "33px" }}
          />
          <div
            className="connections-content-items-text"
            style={{ marginLeft: "60px" }}
          >
            <h5>Apple</h5>
            <p>
              Click "Link" to visit Apple and link your Apple and EA <br />{" "}
              accounts. Please note that as part of linking these accounts,{" "}
              <br /> Apple will share some of your data with EA.
            </p>
          </div>
          <button>Link</button>
        </div>
        <hr />
        <div className="connections-content-items">
          <img
            src="/public/Images/CP/Connections/Steam.png"
            alt=""
            style={{ width: "33px", height: "33px" }}
          />
          <div
            className="connections-content-items-text"
            style={{ marginLeft: "60px" }}
          >
            <h5>Steam</h5>
            <p>
              Click "Link" to visit Steam and link your Steam and EA <br />{" "}
              accounts. Please note that as part of linking these accounts,{" "}
              <br /> Steam will share some of your data with EA.
            </p>
          </div>
          <button>Link</button>
        </div>
        <hr />
        <div className="connections-content-items">
          <img
            src="/public/Images/CP/Connections/discord.png"
            alt=""
            style={{ width: "129.94px", height: "33px" }}
          />
          <div
            className="connections-content-items-text"
            style={{ marginLeft: "-30px" }}
          >
            <h5>Discord</h5>
            <p>
              Click "Link" to visit Discord and link your Discord and EA <br />
              accounts. Please note that as part of linking these accounts,{" "}
              <br />
              Discord and EA will share some of your data with one <br />{" "}
              another.
            </p>
          </div>
          <button>Link</button>
        </div>
        <hr />
        <div className="connections-content-items">
          <img
            src="/public/Images/CP/Connections/amazon.png"
            alt=""
            style={{ width: "91px", height: "29px" }}
          />
          <div
            className="connections-content-items-text"
            style={{ marginLeft: "5px" }}
          >
            <h5>Amazon</h5>
            <p>
              Click "Link" to visit Amazon and link your Amazon and EA <br />{" "}
              accounts. Please note that as part of linking these accounts,{" "}
              <br /> Amazon will share some of your data with EA.
            </p>
          </div>
          <button>Link</button>
        </div>
        <hr />
        <div className="connections-content-items">
          <img
            src="/public/Images/CP/Connections/google.png"
            alt=""
            style={{ width: "97.97px", height: "33px" }}
          />
          <div
            className="connections-content-items-text"
            style={{ marginLeft: "-5px" }}
          >
            <h5>Google</h5>
            <p>
              Click "Link" to visit Google and link your Google and EA <br />{" "}
              accounts. Please note that as part of linking these accounts,{" "}
              <br /> Google will share some of your data with EA.
            </p>
          </div>
          <button>Link</button>
        </div>
        <hr />
        <div className="connections-content-items">
          <img
            src="/public/Images/CP/Connections/fb.png"
            alt=""
            style={{ width: "126px", height: "28px" }}
          />
          <div
            className="connections-content-items-text"
            style={{ marginLeft: "-5px" }}
          >
            <h5>Facebook</h5>
            <p>
              Click "Link" to visit Facebook and link your Facebook and EA{" "}
              <br />
              accounts. Please note that as part of linking these accounts,{" "}
              <br />
              Facebook will share some of your data with EA.
            </p>
          </div>
          <button>Link</button>
        </div>
        <hr />
        <div className="connections-content-items">
          <img
            src="/public/Images/CP/Connections/twitch.png"
            alt=""
            style={{ width: "28.28px", height: "33px" }}
          />
          <div
            className="connections-content-items-text"
            style={{ marginLeft: "55px" }}
          >
            <h5>Twitch</h5>
            <p>
              Click "Link" to visit Twitch and link your Twitch and EA <br />{" "}
              accounts. Please note that as part of linking these accounts,{" "}
              <br /> Twitch will share some of your data with EA.
            </p>
          </div>
          <button>Link</button>
        </div>
      </div>
      <hr style={{ marginTop: "30px" }} />
      <h3 style={{ marginTop: "20px" }}>Authorized Applications</h3>
      <p style={{ fontSize: "14px", marginTop: "20px" }}>
        Listed below are third parties with which you have authorized EA to
        share some of your data.
      </p>
      <div className="connections-non-authorized">
        <h3 style={{marginTop:"50px"}}>Non Authorized Applications</h3>
      </div>
    </div>
  );
};

export default Connections;
