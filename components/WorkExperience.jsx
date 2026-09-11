import React from "react";
import WorkUi from "./ui/WorkUi";
import "../styles/WorkExperience.scss";

const WorkExperience = () => {
  return (
    <div className="work-experience-section">
      <section id="work">
        <h1 className="work-experience-heading">Experience</h1>
        <WorkUi className="work-experience-test" />
      </section>
    </div>
  );
};

export default WorkExperience;
