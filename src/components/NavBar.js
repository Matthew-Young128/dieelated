import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import "./NavBarStyles.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "Header Header-bg" : "Header"}>
      <Link to="/">
        <h1>DIE:ELATED</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to={"/music"}> Music</Link>
        </li>
        <li>
          <Link to={"/about"}> About</Link>
        </li>
        <li>
          <Link to={"/top-picks"}> Top Picks</Link>
        </li>
        <li className="contact-box">
          <div className="contact">
            <Link to={"/contact"}> Contact</Link>
          </div>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#b7c8b5" }} />
        ) : (
          <FaBars size={20} style={{ color: "#b7c8b5" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
