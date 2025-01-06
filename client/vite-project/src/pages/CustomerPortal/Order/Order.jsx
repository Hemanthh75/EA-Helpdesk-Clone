import React from "react";
import "./order.css";

const Order = () => {
  return (
    <div className="order-his-container">
      <div className="order-his-header">
        <h3>Order History</h3>
        <div className="order-his-dropdown">
          <select name="status" id="status">
            <option value="">All Products</option>
            <option value="">Failed</option>
            <option value="">Payment Pending</option>
            <option value="">Completed</option>
            <option value="">Cancelled</option>
            <option value="">Processing</option>
            <option value="">Pre-ordered</option>
          </select>
          <select name="timeline" id="timeline">
            <option value="">Last 30 days</option>
            <option value="">Last 3 months</option>
            <option value="">Last 6 months</option>
            <option value="">All in 2025</option>
            <option value="">All</option>
          </select>
        </div>
      </div>
      <hr style={{ marginTop: "30px", marginBottom: "20px" }} />
      <div className="order-his-details">
        <div className="order-his-detail">
          <p>Date</p>
          <p>Description/Order #</p>
          <p>Status</p>
          <p>Price</p>
        </div>
        <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
        <div className="order-his-products">
          <h4 style={{ color: "gray" }}>No Order to Display</h4>
        </div>
      </div>
      <div className="order-his-foot">
      <p>New orders may take up to 30 minutes to display.</p>
      <p>
        Learn more about the{" "}
        <a href="" style={{ textDecoration: "none", color: "#269dcf" }}>
          EA Great Game Guarantee
        </a>
      </p>
      </div>
    </div>
  );
};

export default Order;
