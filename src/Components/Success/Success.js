import React, { useEffect } from "react";
import "./Success.css";
import Aos from "aos";
import "aos/dist/aos.css";
import successIMG from "../../assets/images/success.jpg";

function Success() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="success-container">
      <div className="success-content bd-container">
        <div className="success-wrapper">
          <div className="success-text">
            <span>
              Proven <strong>Success</strong>
            </span>

            <p>
              With over a thousand successful checkouts. Cyber Tagalog AIO is
              the most successful sneaker bot on the market.
            </p>
          </div>

          <div className="success-image" data-aos="fade-left">
            <img className="bot-success" src={successIMG} alt="Success" />
          </div>
        </div>

        <span className="white-line bottom-line"></span>
      </div>
    </div>
  );
}

export default Success;
