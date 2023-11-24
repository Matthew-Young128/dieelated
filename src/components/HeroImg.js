import "./HeroImgStyles.css";
import IntroImg from "../assets/michael-benz-SP6vKjbUic0-unsplash.jpg";
import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="dj at festival"></img>
      </div>
      <div className="content">
        <p>Hello, I am</p>
        <h1>DIE:ELATED</h1>
        <Link to="/music" className="btn">
          Music
        </Link>
        <Link to="/contact" className="btn btn-light">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HeroImg;
