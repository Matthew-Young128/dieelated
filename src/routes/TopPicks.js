import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import TopPicksContent from "../components/TopPicksContent";

const TopPicks = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2
        heading="Top Picks"
        text="20 Tracks that have the DIE:ELATED Gold Stamp"
      />
      <TopPicksContent />
      <Footer />
    </div>
  );
};

export default TopPicks;
