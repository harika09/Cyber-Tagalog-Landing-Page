import React, { useEffect } from "react";
import "./Retailer.css";
import Aos from "aos";
import "aos/dist/aos.css";
import retailers from "../../assets/images/retailers.png";

function Retailer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="retailer-container" id="retailer">
      <div className="retailer-content">
        <div className="retailer-info" data-aos="fade-up">
          <div className="retailer-support">
            <img load="lazy" src={retailers} alt="Retailers-supported" />
          </div>

          <div className="retailer-text">
            <span>
              True
              <strong>All In One</strong>
            </span>

            <p>
              Supporting a wide variety of retailers including Shopify, Supreme,
              Footsites and Mesh. You'll never need another bot again
            </p>
            <h3>Supporting More Retailer Soon.</h3>
          </div>
        </div>
        <span className="white-line bottom-line"></span>
      </div>
    </div>
  );
}

export default Retailer;
