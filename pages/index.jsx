import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import Roadmap from "../components/Roadmap/Roadmap";
import Separator from "../components/Common/Separator";
import Faq from "../components/Faq/Faq";
import Team from "../components/Team/Team";

function index() {
  return <>
    <HeroSection/>
    <AboutSection/>
    <Separator/>
    <Roadmap/>
    <Separator/>
    <Faq/>
    <Separator/>
    <Team/>
    </>
}

export default index;
