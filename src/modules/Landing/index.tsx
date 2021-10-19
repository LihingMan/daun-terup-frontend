import React, { useState } from "react";
import Navbar from "src/components/Navbar";
import Sidebar from "src/components/Sidebar";
import Hero from "src/components/Hero";
import InfoSection from "src/components/InfoSection";
import { firstHomeObj } from "src/components/InfoSection/data";
import GameSection from "src/components/GameSection";
import Footer from "src/components/Footer";

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <InfoSection {...firstHomeObj} />
      <GameSection />
      <Footer />
    </>
  );
};

export default Landing;
