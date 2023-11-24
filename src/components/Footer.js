import React from "react";
import { FaInstagram, FaSpotify, FaSoundcloud, FaTiktok } from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container"></div>
      <div className="social">
        <a
          href="https://www.instagram.com/die.elated/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            size={30}
            className="icon"
            style={{ marginRight: "1rem" }}
          />
        </a>
        <a
          href="https://open.spotify.com/artist/7JHAUUC78XgHslJwHZj2Ua?si=p6-cHGvJQNat9tI9cabLkg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify
            size={30}
            className="icon"
            style={{ marginRight: "1rem" }}
          />
        </a>
        <a
          href="https://on.soundcloud.com/Xypbc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSoundcloud
            size={30}
            className="icon"
            style={{ marginRight: "1rem" }}
          />
        </a>
        <a
          href="https://www.tiktok.com/@dieelated"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok size={30} className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
