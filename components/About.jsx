import React from "react";
import "../styles/About.scss";
import AboutDescrip from "./ui/AboutDescrip";
import AboutGrid from "./ui/AboutGrid";
import ContributionsHeatmap from "./ui/ContributionsHeatmap";

const About = () => {
  return (
    <>
      <section id="about" className="main-about">
        <span className="section-label">About Me</span>
        <h1 className="about-me-header">
          Who Am <span className="gradient-text">I?</span>
        </h1>
        <AboutDescrip />
      </section>
    </>
  );
};

export default About;
