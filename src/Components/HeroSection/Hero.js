import React from "react";
import CybetT from "../../assets/images/CyberT.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content bd-container">
        <div className="hero-info">
          <div className="title">
            <p>
              The <strong>Fastest</strong> AIO Bot
            </p>
          </div>

          <div className="info">
            <p>
              Never miss another drop with Cyber Tagalog AIO. Supporting over 10
              retailers ranging from Nike to Shopify and Footsites.
            </p>
          </div>

          <div className="hero-btn">
            <button className="btn-buy-now">Sold Out</button>
          </div>

          <div className="hero-image">
            <img src={CybetT} alt="CyberT" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
