import React from "react";
import "../styles/Projects.scss";
import ProjectsCardDisplay from "./ui/ProjectsCardDisplay";
import TextSlider from "./ui/TextSlider";
const Projects = () => {
  return (
    <section id="projects" className="main-projects">
      <h1 className="projects-heading">
        Personal <span style={{ color: "#a371f7" }}>Projects</span>
      </h1>
      <ProjectsCardDisplay />
    </section>
  );
};

export default Projects;
