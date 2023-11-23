import React from "react";
import { FaInstagram, FaSpotify, FaSoundcloud, FaTiktok } from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container"></div>
      <div className="social">
        <FaInstagram
          size={30}
          style={{ color: "#b7c8b5", marginRight: "1rem" }}
        />
        <FaSpotify
          size={30}
          style={{ color: "#b7c8b5", marginRight: "1rem" }}
        />
        <FaSoundcloud
          size={30}
          style={{ color: "#b7c8b5", marginRight: "1rem" }}
        />
        <FaTiktok size={30} style={{ color: "#b7c8b5" }} />
      </div>
    </div>
  );
};

export default Footer;
