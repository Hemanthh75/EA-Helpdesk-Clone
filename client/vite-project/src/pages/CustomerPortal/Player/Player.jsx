import React from "react";
import "./player.css";

const Player = () => {
  return (
    <div className="player-controls">
      <div className="player-control-header">
        <h3>Player Controls</h3>
        <p>Player Controls only apply to the EA app.</p>
      </div>

      <div className="player-control-spend">
        <div className="player-control-spend-header">
          <p>D</p>
          <h4>Spend Limits</h4>
          <button>Edit</button>
        </div>
        <div className="player-control-spend-content">
          <p style={{ fontSize: "14px" }}>
            These spend limits do not apply to subscription purchases such as EA
            Play, or to taxes and fees.
          </p>
          <p
            style={{ fontSize: "14px", fontWeight: "bold", marginTop: "25px" }}
          >
            Monthly spend for game and expansion purchase
          </p>
          <h3 style={{ marginTop: "20px" }}>Unlimited</h3>
          <p style={{ fontSize: "10px", marginTop: "5px" }}>
            Amount Remaining: <strong>Unlimited</strong>
          </p>
          <hr />
          <p
            style={{ fontSize: "14px", fontWeight: "bold", marginTop: "25px" }}
          >
            Monthly spend for microcontent purchases
          </p>
          <h3 style={{ marginTop: "20px" }}>Unlimited</h3>
          <p style={{ fontSize: "10px", marginTop: "5px" }}>
            Amount Remaining: <strong>Unlimited</strong>
          </p>
        </div>
        <hr style={{ marginTop: "20px" }} />
      </div>
    </div>
  );
};

export default Player;
