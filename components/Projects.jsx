import React from "react";
import "../styles/Projects.scss";
import ProjectsCardDisplay from "./ui/ProjectsCardDisplay";

const Projects = () => {
  return (
    <section id="projects" className="main-projects">
      <h1 className="projects-heading">Projects</h1>
      <ProjectsCardDisplay />
    </section>
  );
};

export default Projects;
