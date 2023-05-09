import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "./Contact.css";
import { HiPhone } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="contact">
      <img
        src="../../images/purple-bokeh-digital-business-background.jpg"
        className="event-img"
        alt=""
      />
      <Navbar />
      <div className="contact-wrapper">
        <div className="contact-info">
          <h1 style={{ color: "#f06926" }}>Contact Us</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: 'center'
            }}
          >
            <span style={{ fontSize: '1.2rem', margin: '30px 0 10px 0' }}>
              <FaEnvelope style={{ fontSize: '1.5rem' }} />{" "}
              <a href="mailto: info@ifair-israelnigeria.com">
                info@ifair-israelnigeria.com
              </a>
            </span>
            <span style={{ fontSize: '1.2rem', paddingRight: '5rem' }}>
              <HiPhone style={{fontSize: '1.5rem'}}/> +234 906 5200 034
            </span>
          </div>

          <div>
            <a href='https://www.facebook.com/ifairisraelnigeria/'><FaFacebook
              style={{ fontSize: "1.8rem", margin: "60px 10px 0 0" }}
            /></a>
            <a href='https://www.instagram.com/ifairisraelnigeria/'>
            <FaInstagram
              style={{ fontSize: "1.8rem", margin: "60px 10px 0 0" }}
            />
            </a>
            <a href='https://twitter.com/iFAIRIsraelNig'>
            <FaTwitter
              style={{ fontSize: "1.8rem", margin: "60px 10px 0 0" }}
            />
            </a>
            <a href='https://www.linkedin.com/company/75117021/admin/'>
            <FaLinkedin
              style={{ fontSize: "1.8rem", margin: "60px 10px 0 0" }}
            />
            </a>
          </div>
        </div>
      </div>
      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
