import React from "react";
import "./payment.css";

const Payment = () => {
  return (
    <div className="payment-method">
      <div className="payment-method-content">
        <h3>Payment</h3>
        <p style={{ marginTop: "20px", fontSize: "12px" }}>
          You do not have any payment methods
        </p>
        <button>Add Payment</button>

        <hr style={{ marginTop: "20px" }} />
      </div>
    </div>
  );
};

export default Payment;
