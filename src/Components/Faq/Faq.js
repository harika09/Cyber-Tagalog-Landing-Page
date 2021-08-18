import React, { useEffect } from "react";
import "./Faq.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Faq() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="faq-container">
      <div className="faq-content bd-container">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-list" data-aos="fade-up">
          <div className="faq-card">
            <strong>How much does it cost?</strong>
            <p>
              The retail price is £300 and comes with 6 months of free updates.
              You must then renew for £100 every 6 months.
            </p>
          </div>

          <div className="faq-card">
            <strong>What operating systems are supported?</strong>
            <p>
              Cyber Tagalog AIO currently only support Windows. We will support
              other OS soon
            </p>
          </div>

          <div className="faq-card">
            <strong>When will you restock?</strong>
            <p>
              We restock randomly about once a month. We recommend that you
              follow us on
            </p>
          </div>

          <div className="faq-card">
            <strong>Do you offer groupbuys?</strong>
            <p>
              We do not currently offer any private or group sales. The only way
              to get a license from us is via a public release.
            </p>
          </div>

          <div className="faq-card">
            <strong>What stores do you support?</strong>
            <p>
              We support nearly all major retailers. We do support Adidas and
              Nike Snkrs also Nike Web
            </p>
          </div>

          <div className="faq-card">
            <strong>What countries does Cyber Tagalog AIO support?</strong>
            <p>
              We currently have support on Nike Web Ph, TH, VN, AU, CA, MY, ID,
              SG, SA, AE
            </p>
          </div>
        </div>

        <span className="white-line bottom-line"></span>
      </div>
    </div>
  );
}

export default Faq;
