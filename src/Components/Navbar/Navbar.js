import React from "react";
import Logo from "../../assets/images/logo.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-content bd-container">
        <div className="Logo">
          <img src={Logo} alt="Logo" />
        </div>

        <ul className="navbar-list">
          <li className="nav-list">
            <a href="/">Features</a>
          </li>
          <li className="nav-list">
            <a href="/">Retailer</a>
          </li>
          <li className="nav-list">
            <a href="/">App</a>
          </li>
          <li className="nav-list">
            <a href="/">Success</a>
          </li>
          <li className="nav-list">
            <a href="/">Help</a>
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
