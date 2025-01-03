import React from "react";
import "./privacy.css";

const Privacy = () => {
  return (
    <div className="cpui-privacy">
      <div className="cpui-privacy-preferred">
        <h3 className="cpui-privacy-preferred-header">Preferred Data Usage</h3>
        <div className="cpui-preferred-content">
          <input type="checkbox" id="ea-ingame" />
          <label htmlFor="ea-ingame">
            <span className="cpui-preferred-checkbox-title">
              EA In-Game Targeted Advertising
            </span>
            <span className="cpui-preferred-checkbox-desc">
              If unchecked, we will opt you out from some of EA's targeted
              advertising when you are logged in with your EA Account.
            </span>
          </label>
        </div>
        <div className="cpui-preferred-content-2">
          <input
            type="checkbox"
            id="ea-target"
            style={{ height: "25px", width: "25px" }}
          />
          <label htmlFor="ea-target">
            <span className="cpui-preferred-checkbox-title">
              EA Targeted Advertising on Third Party Websites and Platforms
            </span>
            <span className="cpui-preferred-checkbox-desc">
              If unchecked, we will not share data from your EA Account with
              third-party partners for EA targeted advertising on third party
              websites and platforms.
            </span>
          </label>
        </div>
        <hr style={{ marginTop: "10px" }} />
      </div>

      <div className="cpui-privacy-pp">
        <h3>Profile Privacy</h3>
        <p className="cpui-privacy-text">
          Use the setting below to select the level of friendship required for
          EA users to see details of your profile, including game library. This
          setting will also determine the pool of players who may be recommended
          to you as friends. Note that changes to this setting may take up to 24
          hours to take effect.
        </p>
        <p className="cpui-privacy-ddtext">
          Who can see my profile details and may be included in friend
          recommendations
        </p>
        <select className="cpui-privacy-dd">
          <option value="">Everyone</option>
          <option value="">Friends</option>
          <option value="">Friends of Friends</option>
          <option value="">No One</option>
        </select>

        <hr />

        <p>Allow users who can see my profile to view my</p>
        <div className="cpui-privacy-pp-checkbox">
          <input type="checkbox" id="achievements" />
          <label htmlFor="achievements">Achievements</label>
        </div>

        <hr />
        <p>Allow all to view my</p>
        <div className="cpui-privacy-pp-checkbox">
          <input type="checkbox" id="realname" />
          <label htmlFor="realname">Real Name</label>
        </div>
      </div>
      <hr style={{ marginTop: "-20px" }} />

      <div className="cpui-searchby">
        <h3 style={{ marginTop: "15px" }}>Allow users to search for me by</h3>
        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          You are always searchable by your EA Public ID.If you provide
          information about your real name,you will always be searchable by your
          real name.To no longer be searchable by your real name,please remove
          your First and Last name from the "About Me" tab by clicking "Edit"
          next to "Basic information".
        </p>
        <div className="cpui-searchby-grid">
          <div className="cpui-searchby-griditem">
            <input type="checkbox" id="email" />
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="cpui-searchby-griditem">
            <input type="checkbox" id="xbox" />
            <label htmlFor="xbox">Xbox Live gamertag</label>
          </div>
          <div className="cpui-searchby-griditem">
            <input type="checkbox" id="ps" />
            <label htmlFor="ps">PSN Online ID</label>
          </div>
          <div className="cpui-searchby-griditem">
            <input type="checkbox" id="nx" />
            <label htmlFor="nx">Nintendo Nickname</label>
          </div>
          <div className="cpui-searchby-griditem">
            <input type="checkbox" id="steam" />
            <label htmlFor="steam">Steam Account Name</label>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "15px" }} />

      <div className="cpui-ea-blocklist" style={{ marginTop: "25px" }}>
        <h3 style={{ marginBottom: "25px" }}>EA Blocked Users List</h3>
        <p style={{ fontSize: "12px" }}>
          Blocked EA users are unable to see your profile, check your online
          status, send you gifts or send you messages.
          <br /> You won't be able to message them either.
        </p>
        <h4 style={{ marginTop: "15px" }}>Block a User</h4>
        <div>
          <input type="text" />
          <button>Block</button>
        </div>
      </div>
      <hr />
      <div className="cpui-privacy-update-btn-container">
        <button className="cpui-privacy-update-btn">Update</button>
      </div>
    </div>
  );
};

export default Privacy;
