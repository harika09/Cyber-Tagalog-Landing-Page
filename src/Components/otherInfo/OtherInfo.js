import React from "react";
import "./OntherInfo.css";

function OtherInfo() {
  return (
    <div className="other-info-container">
      <div className="other-info-content bd-container">
        <div className="other-info-list" data-aos="fade-up">
          <div className="other-list">
            <strong>Payment Accepted</strong>
            <hr />
            <p>Credit Cards</p>
          </div>

          <div className="other-list">
            <strong>Contact Info</strong>
            <hr />

            <a href="mailto:cyber@tagalog.com">cyber@tagalog.com</a>
          </div>

          <div className="other-list">
            <strong>Links</strong>
            <hr />
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>

          <div className="other-list">
            <strong>Stay Updated</strong>
            <hr />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/CyberTagalog"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherInfo;
