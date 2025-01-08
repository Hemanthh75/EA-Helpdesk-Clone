import React from "react";
import "./mycases.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const MyCases = () => {
  return (
    <>
      <Navbar />

      {/* Creating the my cases page container */}
      <div className="my-cases-container">
        <div className="my-cases-content">
          <div className="my-cases-content-description">
            <p className="my-cases-content-description-text">
              Please sign into your EA Account to proceed.
            </p>
            <img
              className="my-cases-content-description-Image"
              src="/Images/MyCases/EALogo.png"
              alt=""
            />
            <button className="my-cases-content-description-btn">Log in</button>
          </div>

          {/* Creating the my cases page input form */}
          <div className="my-cases-content-inputs">
            <h2 className="my-cases-content-inputs-heading">
              Access an Individual Case:
            </h2>
            <form>
              <label className="mycaseslabel">Case ID</label>
              <input type="text" name="caseid" />
              <label className="mycaseslabel">Access Key</label>
              <input type="text" name="accesskey" />
              <button type="submit" className="my-cases-content-inputs-btn">
                View Case
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyCases;
