import React from "react";
import "./AboutContentStyles.css";
import MeImg from "../assets/B1949EFD-951B-4E28-B031-8B5FB508D6AE 2.jpg";

const AboutContent = () => {
  return (
    <div className="about-content">
      <div className="about-grid">
        <div className="about-text">
          <h2 className="about-header">My Story</h2>
          <p>
            Growing up, I always found radio music to be boring and cliche. I
            craved new, interesting sounds and high energy. Around the age of
            12, I came across Don Diablo's "Cutting Shapes", and my life was
            forever changed. The infections house groove compelled me to
            download FL studio as soon as I got home.
          </p>
          <p>
            For 8 years now I have been learing the ins and outs of music
            production via Youtube and online forums. Crafting up eclectic tunes
            from unorthodox sounds, continually trying to push the boundaries of
            classically defined genres. It has become a lifelong passion, and
            something I will keep chasing to the grave.
          </p>
          <p>
            All before I have turned 21, I have been signed to a French Record
            label, A UK record label and worked with my favourite radio staiton
            George FM. After 8 years of putting my head down, I'm ready to start
            sharing these sounds with the world. I hope you join me for the
            journey.
          </p>
          <div className="about-contact">
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="about-image">
          <img src={MeImg} alt="dj at festival" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
