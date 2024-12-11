import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/*Social Media links container*/}
      <div className="social-links-container">
        <p className="social-links-text">Join the conversation</p>
        <div className="social-links">
          <div className="social-link">
            <a href="www.facebook.com">
              <img src="/Images/Social/Facebook.png" alt="" />
            </a>
          </div>
          <div className="social-link">
            <a href="www.X.com">
              <img src="public/Images/Social/X.png" alt="" />
            </a>
          </div>
          <div className="social-link">
            <a href="www.youtube.com">
              <img src="public/Images/Social/Youtube.png" alt="" />
            </a>
          </div>
          <div className="social-link">
            <a href="www.instagram.com">
              <img src="public/Images/Social/Instagram.png" alt="" />
            </a>
          </div>
          <div className="social-link">
            <a href="www.twitch.com">
              <img src="public/Images/Social/Twitch.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      {/*Footer container*/}

      <div className="footer-wrapper">
        <div className="left-footer-section">
          <img
            src="/Images/EALogoFooter.png"
            alt=""
            className="left-footer-section-image"
          />
        </div>
        <div className="middle-footer-section">
          <div className="middle-footer-top-links">
            <a href="" className="middle-footer-top-link">
              Browse games
            </a>
            <a href="" className="middle-footer-top-link">
              EA app
            </a>
            <a href="" className="middle-footer-top-link">
              Answers HQ
            </a>
            <a href="" className="middle-footer-top-link">
              About
            </a>
            <a href="" className="middle-footer-top-link">
              Accessibility
            </a>
            <a href="" className="middle-footer-top-link">
              Jobs
            </a>
          </div>
          <div className="middle-footer-middle-links">
            <a href="" className="middle-footer-middle-link">
              Legal
            </a>
            <a href="" className="middle-footer-middle-link">
              User Agreement
            </a>
            <a href="" className="middle-footer-middle-link">
              Privacy & Cookie Policy
            </a>
            <a href="" className="middle-footer-middle-link">
              Online Service Updates
            </a>
            <a href="" className="middle-footer-middle-link">
              Security
            </a>
            <a href="" className="middle-footer-middle-link">
              How to contact EA Help
            </a>
            <a href="" className="middle-footer-middle-link">
              Cookie Preferences
            </a>
          </div>
          <p className="footer-copyright">&copy; 2024 Electronic Arts Inc.</p>
        </div>
        <div className="right-footer-section">
          <select className="localization-dropdown">
            <option className="localization-country">United States</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
