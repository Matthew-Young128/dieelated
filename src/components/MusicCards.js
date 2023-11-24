import "./MusicCardsStyles.css";
import React from "react";
import AlbumCover1 from "../assets/DIE-ELATED.jpg"; // Import your album cover images
import AlbumCover2 from "../assets/My project (1).png";
import AlbumCover7 from "../assets/Screenshot 2023-11-24 at 3.09.36 PM.png";
import AlbumCover4 from "../assets/Voyager.png";
import AlbumCover5 from "../assets/Jewel Girl Record.png";
import AlbumCover6 from "../assets/39 Die Elated Flower.png";
import AlbumCover3 from "../assets/Record Cover Girl.png";
// Import more album covers as needed

const MusicCards = () => {
  return (
    <div className="music">
      <div className="card-container">
        <a
          href="https://bfan.link/dieelated-findmyway?fbclid=PAAaZtgOjUaBVGIDvfQ4pe1nCQEf8k22rRBbn07fmWXy0BNWxu6QTAEDaVSXY_aem_AfqpLPMXuDIa4m3lqR5t_bBhuOEJOffZRv3tv0c4YlUls7uP9PnoICDsNqAlc5whszk"
          className="card"
          target="blank"
        >
          <img src={AlbumCover1} alt="DIE:ELATED - Find My Way" />
        </a>
        <a
          href="https://soundcloud.com/matthew-young-493848941/you-me-edit"
          className="card"
          target="blank"
        >
          <img src={AlbumCover2} alt="Flume - You and Me (DIE:ELATED EDIT)" />
        </a>
        <a href="/music" className="card blur-on-hover">
          <img src={AlbumCover3} alt="Album 3" />
          <div className="hover-text">Coming Soon</div>
        </a>
        <a
          href="https://distrokid.com/hyperfollow/dieelated/voyager"
          className="card"
          target="blank"
        >
          <img src={AlbumCover4} alt="Voyager" />
        </a>
        <a href="/music" className="card blur-on-hover">
          <img src={AlbumCover5} alt="Album 5" />
          <div className="hover-text">Coming Soon</div>
        </a>
        <a href="/music" className="card blur-on-hover">
          <img src={AlbumCover6} alt="Album 6" />
          <div className="hover-text">Coming Soon</div>
        </a>
        <a
          href="https://soundcloud.com/matthew-young-493848941/briscoes-half-price-wairiki-edit"
          className="card"
          target="blank"
        >
          <img src={AlbumCover7} alt="Briscoes Remix" />
        </a>
      </div>
    </div>
  );
};

export default MusicCards;
