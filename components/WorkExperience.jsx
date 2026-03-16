import React from "react";
import WorkUi from "./ui/WorkUi";
import "../styles/WorkExperience.scss";

const WorkExperience = () => {
  return (
    <div className="work-experience-section">
      <section id="work">
        <span className="section-label">Career</span>
        <h1 className="work-experience-heading">
          Work <span className="gradient-orange">Experience</span>
        </h1>
        <WorkUi className="work-experience-test" />
      </section>
    </div>
  );
};

export default WorkExperience;
