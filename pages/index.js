import React from "react";
import CardsSection from "../components/CardsSection";
import ContactsSection from "../components/ContactsSection";
import FaqSection from "../components/FaqSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PlatinumNFftSection from "../components/PlatinumNFftSection";
import ProjectSection from "../components/ProjectSection";
import StatsSecton from "../components/StatsSecton";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import RoadmapSection from "../components/RoadmapSection";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CardsSection />
      <StatsSecton />
      <ProjectSection />
      <PlatinumNFftSection />
      <RoadmapSection />
      <FaqSection />
      <TeamSection />
      <ContactsSection />
      <Footer />
    </>
  );
};

export default Home;
