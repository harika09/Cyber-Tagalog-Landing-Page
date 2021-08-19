import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/images/logo.jpg";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const showMenu = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar-container">
      <div className="navbar-content bd-container">
        <div className="Logo">
          <Link
            to="hero"
            activeClass="active"
            spy="true"
            smooth="true"
            duration={500}
            onClick={closeMobileMenu}
          >
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div
          className={click ? "menu-toggle active" : "menu-toggle"}
          onClick={showMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={click ? "navbar-menu active" : "navbar-menu"}>
          <li className="nav-list">
            <Link
              to="feature"
              activeClass="active"
              spy="true"
              smooth="true"
              duration={500}
              onClick={closeMobileMenu}
            >
              Features
            </Link>
            {/* <a href="/">Features</a> */}
          </li>
          <li className="nav-list">
            <Link
              to="retailer"
              activeClass="active"
              spy="true"
              smooth="true"
              duration={500}
              onClick={closeMobileMenu}
              className="nav-links"
            >
              Retailer
            </Link>
          </li>

          <li className="nav-list">
            <Link
              to="success"
              activeClass="active"
              spy="true"
              smooth="true"
              duration={500}
              onClick={closeMobileMenu}
              className="nav-links"
            >
              Success
            </Link>
          </li>
          <li className="nav-list">
            <Link
              to="faq"
              activeClass="active"
              spy="true"
              smooth="true"
              duration={500}
              onClick={closeMobileMenu}
              className="nav-links"
            >
              Help
            </Link>
          </li>
          <li className="nav-list-dashboard">
            <a href="/">Dashboard</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
