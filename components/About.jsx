import React from "react";
import "../styles/About.scss";
import AboutDescrip from "./ui/AboutDescrip";

const About = () => {
  return (
    <>
      <section id="about" className="main-about">
        <h1 className="about-me-header">About</h1>
        <AboutDescrip />
      </section>
    </>
  );
};

export default About;
