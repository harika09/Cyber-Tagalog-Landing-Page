import React, { useEffect } from "react";
import "./Features.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Features() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="feature-container">
      <div className="feature-content bd-container">
        <span className="white-line"></span>
        <h1> Built with Powerful Features</h1>
        <p>
          We've ensured that Cyber Tagalog runs as smoothly as possible so you
          can run hundreds of tasks without the need of expensive servers
        </p>

        <div className="feature-card" data-aos="fade-up">
          <div className="card">
            <div className="card-feature">
              <div className="card-logo">
                <i className="fas fa-rocket"></i>
              </div>

              <div className="card-info">
                <div className="card-title">
                  <h3>Lightning Fast</h3>
                </div>

                <div className="card-text">
                  <span>
                    Fully multi-threaded for a blazing fast and reliable
                    experience
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-feature">
              <div className="card-logo">
                <i className="fas fa-tasks"></i>
              </div>

              <div className="card-info">
                <div className="card-title">
                  <h3>Unlimited Tasks</h3>
                </div>

                <div className="card-text">
                  <span>
                    Run as many tasks as you want, from hundreds to thousands
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-feature">
              <div className="card-logo">
                <i className="fas fa-tasks"></i>
              </div>

              <div className="card-info">
                <div className="card-title">
                  <h3>New Captcha Solver</h3>
                </div>

                <div className="card-text">
                  <span>
                    Featuring a multi-tab and multi-window captcha solver just
                    make easy
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-feature">
              <div className="card-logo">
                <i className="fas fa-user-friends"></i>
              </div>

              <div className="card-info">
                <div className="card-title">
                  <h3>Mobile App</h3>
                </div>

                <div className="card-text">
                  <span>
                    Comes with a free mobile companion app to control your bot
                    on the go
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-feature">
              <div className="card-logo">
                <i className="far fa-bell"></i>
              </div>

              <div className="card-info">
                <div className="card-title">
                  <h3>Restock Mode</h3>
                </div>

                <div className="card-text">
                  <span>
                    Missed the drop? No problem, the bot will automatically wait
                    for restocks
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-feature">
              <div className="card-logo">
                <i className="fas fa-user-friends"></i>
              </div>

              <div className="card-info">
                <div className="card-title">
                  <h3>Support</h3>
                </div>

                <div className="card-text">
                  <span>
                    We offer free 24/7 support via email, on our Twitter Page
                    and Discord
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span className="white-line bottom-line"></span>
      </div>
    </div>
  );
}

export default Features;
