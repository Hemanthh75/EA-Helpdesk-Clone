import React from "react";
import "./toparticles.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TopArticles = () => {
  return (
    <div className="top-articles-container">
        <div className="top-articles-header">
        <h4 className="top-articles-heading">Top EA Account Help Articles</h4>
        <div className="top-articles-arrows">
            <ArrowBackIosIcon />
            <ArrowForwardIosIcon />
        </div>
        </div>
      
      <div className="top-articles-grid-container">
        <div className="top-articles-grid-item">
          <div className="top-articles-grid-item-img">
            <img src="/public/Images/TopArticles/EALOGO.png" alt="" />
          </div>
          <h2 className="top-articles-grid-item-title">
            How can I delete my EA Account?
          </h2>
          <p className="top-articles-grid-item-text">
            Learn how to delete your EA Account or EA Forums account, or request
            to...
          </p>
          <a href="" className="top-articles-grid-item-readmore">
            <p>Read more</p> <ArrowForwardIcon />
          </a>
        </div>
        <div className="top-articles-grid-item">
          <div className="top-articles-grid-item-img">
            <img src="/public/Images/TopArticles/EALOGO.png" alt="" />
          </div>
          <h2 className="top-articles-grid-item-title">
            How can I delete my EA Account?
          </h2>
          <p className="top-articles-grid-item-text">
            Learn how to delete your EA Account or EA Forums account, or request
            to...
          </p>
          <a href="" className="top-articles-grid-item-readmore">
            <p>Read more</p> <ArrowForwardIcon />
          </a>
        </div>
        <div className="top-articles-grid-item">
          <div className="top-articles-grid-item-img">
            <img src="/public/Images/TopArticles/EALOGO.png" alt="" />
          </div>
          <h2 className="top-articles-grid-item-title">
            How can I delete my EA Account?
          </h2>
          <p className="top-articles-grid-item-text">
            Learn how to delete your EA Account or EA Forums account, or request
            to...
          </p>
          <a href="" className="top-articles-grid-item-readmore">
            <p>Read more</p> <ArrowForwardIcon />
          </a>
        </div>
      </div>
      <div className="top-articles-btn-container"><button className="top-articles-btn">See all Help Articles</button></div>
    </div>
  );
};

export default TopArticles;
