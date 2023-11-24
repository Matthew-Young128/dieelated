import "./TopPicksContentStyling.css";
import GoldStamp from "../assets/Screenshot 2023-10-29 at 7.37.06 PM.png";

import React from "react";

const TopPicksContent = () => {
  return (
    <div>
      <div className="top-picks-container">
        <ul className="top-picks">
          <li className="pick">
            <p className="orange">DATSKO -</p>
            <p>REMEMBRANCE</p>
          </li>
          <li className="pick">
            <p className="orange">DJ HEARSTRING -</p>
            <p>Will You Remember Me When I'm Gone</p>
          </li>
          <li className="pick">
            <p className="orange">southstar -</p>
            <p>Hold</p>
          </li>
          <li className="pick">
            <p className="orange">scruz -</p>
            <p>Keep</p>
          </li>
          <li className="pick">
            <p className="orange">Kenya Grace -</p>
            <p>Only In My Mind</p>
          </li>
          <li className="pick">
            <p className="orange">Disclosure -</p>
            <p>Higher Than Ever Before</p>
            <p className="orange">ATRIP Remix</p>
          </li>
          <li className="pick">
            <p className="orange">KAM-BU -</p>
            <p>SPACE</p>
          </li>
          <li className="pick">
            <p className="orange">Jayda G -</p>
            <p>Both Of Us</p>
          </li>
          <li className="pick">
            <p className="orange">MPH -</p>
            <p>Bad Day</p>
          </li>
          <li className="pick">
            <p className="orange">Harry Hayes -</p>
            <p>Vesper</p>
          </li>
          <li className="pick">
            <p className="orange">Macabre Plaza -</p>
            <p>Dimly Lit Small Town</p>
          </li>
          <li className="pick">
            <p className="orange">Sammy Virji, Flowdan -</p>
            <p>Shella Verse</p>
          </li>
          <li className="pick">
            <p className="orange">N4TEE -</p>
            <p>94 BITZZ</p>
          </li>
          <li className="pick">
            <p className="orange">Y U QT -</p>
            <p>Y'all Ready For Dis</p>
          </li>
          <li className="pick">
            <p className="orange">Simula -</p>
            <p>Bonesaw</p>
          </li>
          <li className="pick">
            <p className="orange">Jimi Jules -</p>
            <p>My City's On Fire</p>
            <p className="orange">Anyma & Cassian Remix</p>
          </li>
        </ul>
        <img src={GoldStamp} alt="gold stamp" className="gold-stamp"></img>
      </div>
    </div>
  );
};

export default TopPicksContent;
