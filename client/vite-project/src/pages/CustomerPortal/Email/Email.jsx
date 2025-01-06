import React from "react";
import "./email.css";

const Email = () => {
  return (
    <div className="email-ver-container">
      <div className="email-ver-manage-email">
        <h3 className="manage-email-heading">Manage your email preferences</h3>
        <div className="email-ver-pre-checkbox">
          <input type="checkbox" id="emailPre" />
          <label
            htmlFor="emailPre"
            style={{
              fontWeight: "bolder",
              marginTop: "10px",
              marginLeft: "15px",
            }}
          >
            Yes, email me about EA's products, news, events and promotions
            consistent with the EA Privacy and Cookie Policy{" "}
            <a href="">(privacy.ea.com)</a>
          </label>
        </div>
        <p style={{ fontSize: "12px", marginTop: "20px" }}>
          I can withdraw my consent at any time by unchecking the box above, or
          by contacting EA’s Data Protection Officer at dpo@ea.com. Learn more
          about your privacy rights by visiting the{" "}
          <a href="" style={{ textDecoration: "none" }}>
            EA Privacy Portal
          </a>{" "}
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px dotted #333",
            margin: "20px 0px",
          }}
        />

        <div className="email-ver-manage-email-freq">
          <h5>Frequency</h5>
          <select>
            <option value="">Anytime</option>
            <option value="">Weekly</option>
            <option value="">Monthly</option>
          </select>
        </div>
        <div className="email-ver-manage-email-primary">
          <h5>Primary email</h5>
          <div
            className="emai-ver-manage-email-primary-content"
            style={{ fontSize: "12px" }}
          >
            <div className="email-ver-manage-email-primary-mail">
              <p>h****5@gmail.com</p>
              <button>Edit</button>
            </div>
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>
              Your preferences were last updated on 01/03/2025 11:41 GMT
            </p>
          </div>
        </div>
        <hr style={{ margin: "20px 0px" }} />
      </div>
      <div className="email-ver-f">
        <h3>Favorite Games</h3>
        <p
          style={{ fontSize: "12px", marginTop: "20px", marginBottom: "20px" }}
        >
          Get EA news plus updates to the games you love
        </p>
        <div className="email-ver-fav">
          <div className="email-ver-fav-image">
            <div className="email-ver-fav-image-content">
              <h3 style={{ color: "white" }}>Apex Legends</h3>
              <button>Delete</button>
            </div>
          </div>
          <div className="email-ver-fav-checkbox">
            <div className="email-ver-fav-checkbox-items">
              <input type="checkbox" id="apm" />
              <label htmlFor="apm">Apex Legends Mobile</label>
            </div>
            <div className="email-ver-fav-checkbox-items">
              <input type="checkbox" id="cpg" />
              <label htmlFor="cpg">Competitive Gaming</label>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ margin: "20px" }} />
      <div className="email-ver-add">
        <img src="/public/Images/CP/Email/FavImage2.jpg" alt="" />
        <div className="email-ver-add-btn-container">
          <button>Add More</button>
        </div>
      </div>
      <hr style={{ margin: "20px" }} />
      <div className="email-ver-pref">
        <h3>Preferred Platforms</h3>
        <div className="email-ver-pref-grid">
          <div className="email-ver-pref-grid-item"></div>
        </div>
      </div>
    </div>
  );
};

export default Email;
