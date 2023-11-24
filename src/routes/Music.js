import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import MusicCards from "../components/MusicCards";

const Music = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="MUSIC" text="Listen to some of my tracks" />
      <MusicCards />
      <Footer />
    </div>
  );
};

export default Music;
