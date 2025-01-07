import React from "react";
import "./eadata.css";

const EAData = () => {
  return (
    <div className="EAData">
      <div className="EAData-content">
        <h3 style={{ marginBottom: "20px" }}>Download your EA Data</h3>
        <b>
          You can download your EA Account data and more information about your
          activity in some games.
        </b>
        <p style={{ marginTop: "20px" }}>
          After you submit your request, we’ll send an email to the address on
          your EA Account letting you know when your data is ready to download.
          This usually takes a couple of hours. Make sure you download your data
          within 7 days from when it becomes available. <br /> <br />
          You can only make one request at a time. Additional requests can be
          made 7 days after your previous request is completed. <br /> <br />
          Learn more about the personal information we collect in our{" "}
          <a href="">Privacy and Cookie Policy</a>. Go to EA Help for{" "}
          <a href="">support with EA data requests</a>
        </p>

        <button>Request a download</button>
      </div>
    </div>
  );
};

export default EAData;
