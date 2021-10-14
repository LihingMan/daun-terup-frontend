import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Hero from "../../components/Hero";
import InfoSection from "../../components/InfoSection";
import { firstHomeObj } from "../../components/InfoSection/data";
import GameSection from "../../components/GameSection";
import Footer from "../../components/Footer";

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
