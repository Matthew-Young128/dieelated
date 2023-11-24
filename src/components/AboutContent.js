import "./AboutContentStyles.css";
import MeImg from "../assets/B1949EFD-951B-4E28-B031-8B5FB508D6AE 2.jpg";
import React from "react";

const AboutContent = () => {
  return (
    <div className="about-container">
      <div className="left-column">
        <h2 className="section-header">My Story</h2>
        <p>
          Your paragraph about your music journey goes here. Provide some
          details about your background, inspirations, and experiences.
        </p>
      </div>
      <div className="right-column">
        <img className="profile-image" src={MeImg} alt="dj at festival"></img>
      </div>
      <div className="contact-button">
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default AboutContent;
