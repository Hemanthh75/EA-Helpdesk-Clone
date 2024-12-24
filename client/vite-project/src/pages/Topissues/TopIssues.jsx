import React, { useState } from "react";
import "./topissues.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SearchIcon from "@mui/icons-material/Search";
import AccountSupport from "./AccountSupport/AccountSupport";
import ManageAccount from "../../components/ManageAccount/ManageAccount";
import TopArticles from "./TopArticles/TopArticles";

const TopIssues = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <Navbar />

      <div className="top-issues-container">
        <div className="top-issues-header">
          <img
            className="top-issues-header-img"
            src="/public/Images/Topissues/ea-logo.png"
            alt=""
          />

          <div className="top-issues-header-inp-container">
            <input
              type="text"
              className="top-issues-header-inp"
              placeholder="Search game topics..."
            />
            <button className="top-issues-header-btn">
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="account-support-manage-container">
        <div className="account-support-manage-buttons">
          <button
            className={
              isActive
                ? "active-account-support-btn"
                : "inactive-account-support-btn"
            }
            onClick={() => setIsActive(true)}
          >
            EA Account Support
          </button>
          <button
            className={isActive ? "inactive-manage-btn" : "active-manage-btn"}
            onClick={() => setIsActive(false)}
          >
            Manage Account
          </button>
        </div>

        {isActive ? <AccountSupport /> : <ManageAccount />}
      </div>

      <TopArticles />
      <Footer />
    </>
  );
};

export default TopIssues;
