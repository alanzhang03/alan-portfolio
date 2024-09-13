import React from "react";
import WorkUi from "./ui/WorkUi";
import "../styles/WorkExperience.scss";

const WorkExperience = () => {
	return (
		<div>
			<h1 className="work-experience-heading">
				Work <span style={{ color: "#a371f7" }}>Experience</span>
			</h1>
			<WorkUi className="work-experience-test" />
		</div>
	);
};

export default WorkExperience;
