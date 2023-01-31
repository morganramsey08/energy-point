import React from "react";
import LinkedIn from "./img/linkedin.png";
import colorLogo from "./img/logo-color.svg";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="logo">
          <a href="/">
            <img src={colorLogo} alt="EnergyPoint LLC" />
          </a>
        </div>
        <div className="small-flex">
          <span className="section-title">Company</span>
          <a href="">About us</a>
          <a href="">The Team</a>
          <a
            href="https://www.linkedin.com/company/energy-point-consulting-llc/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="Linked In" />
          </a>
        </div>
        <div>
          <span className="section-title">Consulting</span>
          <a href="">The Value</a>
          <a href="">The Approach</a>
        </div>
        <div className="small-flex">
          <span className="section-title"> Services</span>
          <a href="">Consulting</a>
          <a href="">Experience</a>
        </div>
        <div>
          <span className="section-title"> Contact</span>
          <a className="contact-link" href="mailto:">
            support@energypointllc.com
          </a>
          <a className="contact-link" href="tel:405.534.4743">
            405.534.4743
          </a>
          <address>P.O. Box 18633 </address>
          <address>Oklahoma City, OK 73154</address>
        </div>
      </div>
    </div>
  );
};

export default Footer;
