import { Link } from "react-router-dom";
import "./NavBarStyles.css";

import React from "react";

const NavBar = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1>DIE:ELATED</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to={"/music"}> Music</Link>
        </li>
        <li>
          <Link to={"/about"}> About</Link>
        </li>
        <li>
          <Link to={"/top-picks"}> Top Picks</Link>
        </li>
        <li>
          <Link to={"/contact"}> Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
