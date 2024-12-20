import React from "react";
import "./topissues.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SearchIcon from "@mui/icons-material/Search";

const TopIssues = () => {
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
      <Footer />
    </>
  );
};

export default TopIssues;
