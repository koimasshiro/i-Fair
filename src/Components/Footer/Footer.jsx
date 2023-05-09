import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import footerLogo from "../../images/i-Fair Logo white.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <img src={footerLogo} alt="i-fair logo" className="footer-logo" />
        </div>
        <ul className="footer-list">
          <li>
            <Link to="/Home" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/News" style={{ textDecoration: "none", color: "white" }}>
              News
            </Link>
          </li>
          <li>
            <Link
              to="/Innovations"
              style={{ textDecoration: "none", color: "white" }}
            >
              Innovations
            </Link>
          </li>
          <li>
            <Link
              to="/Gallery"
              style={{ textDecoration: "none", color: "white" }}
            >
              Gallery
            </Link>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <Link
              to="/Fellows"
              style={{ textDecoration: "none", color: "white" }}
            >
              i-FAIR Fellows
            </Link>
          </li>
          <li>
            <Link
              to="/Events"
              style={{ textDecoration: "none", color: "white" }}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="footer-contact">
          <h3 style={{ color: "#ff5100" }}>Contact Us</h3>
          <p>
            <FaEnvelope style={{ color: "white", marginRight: "10px" }} />{" "}
            <a href="mailto: info@ifair-israelnigeria.com">
              info@ifair-israelnigeria.com
            </a>
          </p>
          <p>
            <HiPhone style={{ color: "white", marginRight: "10px" }} /> +234 906
            5200 034
          </p>
          <div style={{ paddingTop: "25px" }}>
            <span>
              <a href="https://www.facebook.com/ifairisraelnigeria/">
                <FaFacebook
                  style={{
                    color: "white",
                    marginRight: "10px",
                    fontSize: "1.2em",
                  }}
                />
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/ifairisraelnigeria/">
                <FaInstagram
                  style={{
                    color: "white",
                    marginRight: "10px",
                    fontSize: "1.2em",
                  }}
                />
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/company/75117021/admin/">
                <FaLinkedin
                  style={{
                    color: "white",
                    marginRight: "10px",
                    fontSize: "1.2em",
                  }}
                />
              </a>
            </span>
            <span>
              <a href="https://twitter.com/iFAIRIsraelNig">
                <FaTwitter
                  style={{
                    color: "white",
                    marginRight: "10px",
                    fontSize: "1.2em",
                  }}
                />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          &copy; copyright <span>i-FAIR</span> 2023 - Innovation Fellowship for
          Aspiring Inventors and Researchers
        </p>
      </div>
    </>
  );
};
export default Footer;
