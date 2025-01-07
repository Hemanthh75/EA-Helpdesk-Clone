import React from "react";
import "./playtesting.css";

const Playtesting = () => {
  return (
    <div className="playtesting-container">
      <div className="playtesting-content">
        <h3>Electronic Arts Playtesting</h3>
        <img src="/public/Images/CP/Playtest/playtesting.png" alt="" />
        <p>
          Join a community of players to experience our upcoming titles before
          they're released. Once you've played, if you have opinions and
          thoughts to share, we would like to hear from you! You'll have an
          opportunity to provide feedback right from the comfort of your home -
          It doesn't get much better than that.{" "}
        </p>
        <p style={{ marginTop: "20px" }}>
          {" "}
          By clicking on below button, you will be guided to the Electronic Arts
          Playtesting site. Enjoy!
        </p>
        <button>Join Electronic Arts Playtesting</button>
      </div>
    </div>
  );
};

export default Playtesting;
