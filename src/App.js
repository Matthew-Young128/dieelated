import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import TopPicks from "./routes/TopPicks";
import Contact from "./routes/Contact";
import Music from "./routes/Music";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-picks" element={<TopPicks />} />
        <Route path="/music" element={<Music />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
