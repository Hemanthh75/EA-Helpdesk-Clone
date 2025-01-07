import React from "react";
import "./cpfooter.css";

const CPFooter = () => {
  return <div className="CPFooter-container">
    <div className="CPFooter-column1">
      <p>Electronic Arts</p>
      <ul>
        <li>Lgeal</li>
        <li>User Agreement</li>
        <li>Pivacy and Cookie</li>
        <li>Policy</li>
        <li>Corporate Information</li>
        <li>Terms of Sale</li>
      </ul>
    </div>
    <div className="CPFooter-column2">
      <p>Language</p>
      <select name="" id="">
        <option value="">English</option>
      </select>
    </div>
    <div className="CPFooter-column3">
      <hr />
    </div>
    <div className="CPFooter-column4">
      <p>&copy; 2025 Electronic Arts Inc.</p>
      <p style={{fontSize:"10px"}}>Price in U.S. dollars, and is applicable to U.S. residents only</p>
      <p style={{fontSize:"10px"}}>Online Safety Guidelines</p>
      <p style={{fontSize:"10px"}}>PEGI</p>
      <img src="/public/Images/CP/Foot/footlogo.png" alt="" />
    </div>
  </div>;
};

export default CPFooter;
