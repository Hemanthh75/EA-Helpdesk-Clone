import React from "react";
import "./banhistory.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const BanHistory = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="ban-header">
        <div className="ban-header-text-container">
          <h1 className="ban-header-text">My ban history</h1>
        </div>
      </div>
      <div className="ban-history-wrapper">
        <p style={{ marginBottom: "20px" }}>
          We ban players who break our{" "}
          <a href="https://www.ea.com/legal/user-agreement" target="_blank">
            User Agreement
          </a>
          . If you have a ban or suspension on your EA Account for a specific
          game, or for the device you play on, we'll let you know via email.
        </p>
        <p style={{ marginBottom: "20px" }}>
          You may have bans or suspensions that don't show on this page. If
          you're{" "}
          <a
            href="https://help.ea.com/en/help/account/im-locked-out-of-my-ea-account/"
            target="_blank"
          >
            having trouble logging in
          </a>{" "}
          or playing your games, or if you think{" "}
          <a
            href="https://help.ea.com/en/help/account/secure-hacked-ea-account/?isIhi=true&p=ea-account"
            target="_blank"
          >
            your EA Account was hacked
          </a>
          , try our troubleshooting steps.
        </p>
        <p>
          If you think you were banned by mistake, you can{" "}
          <a
            href="https://help.ea.com/en/solutions/?product=ea-account&category=manage-my-account&topic=dispute-ban-suspension"
            target="_blank"
          >
            contact us to appeal your ban
          </a>
          .
        </p>
      </div>
      <div className="ban-history-login">
        <p style={{ marginBottom: "10px" }}>
          Log in to see details about your bans and suspensions.
        </p>
        <button
          className="ban-history-login-btn"
          onClick={() => navigate("/sign-in")}
        >
          Log in
        </button>
      </div>
      <div className="ban-history-hr-container">
        <hr className="ban-history-hr" />
      </div>
      <div className="ban-learn-more-container">
        <h4>Learn more</h4>
        <p className="ban-learn-more-text">
          <span className="ban-learn-more-dot"></span>
          <a
            href="https://answers.ea.com/t5/EA-Services-General-Questions/bd-p/O-2"
            target="_blank"
          >
            Get help from the community
          </a>
        </p>
        <p className="ban-learn-more-text">
          <span className="ban-learn-more-dot"></span>
          <a
            href="https://help.ea.com/en/help/account/information-about-locked-or-banned-or-suspended-accounts/"
            target="_blank"
          >
            Get info about your ban or suspension
          </a>
        </p>
      </div>

      <Footer />
    </>
  );
};

export default BanHistory;
