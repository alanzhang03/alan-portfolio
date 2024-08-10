import React from "react";
import "./styles/ProjectsCardDisplay.scss";

const ProjectsCardDisplay = () => {
	const projects = [
		{
			projectTitle: "Tic-Tac-Toe",
			projectDescription:
				"Tic Tac Toe game played against either an AI (using minimax algorithm) or another player (human).",
			projectLink: "https://alantictactoe.onrender.com/",
			projectGitHubLink: "https://github.com/alanzhang03/tictactoe",
			projectImage: "",
		},
		{
			projectTitle: "Apple website clone",
			projectDescription: "Apple Iphone webpage clone",
			projectLink: "https://apple-website-clone-46re.onrender.com/",
			projectGitHubLink: "https://github.com/alanzhang03/apple_website",
			projectImage: "",
		},
	];

	return (
		<section className="projects-card-display">
			<div>ProjectsCardDisplay</div>
			<div className="projects-display-container">
				<div className="test-grid"> test grid 1</div>
				<div className="test-grid"> test grid 2</div>
				<div className="test-grid"> test grid 3</div>
				<div className="test-grid"> test grid 4 </div>
				<div className="test-grid"> test grid 4 </div>
				<div className="test-grid"> test grid 4 </div>
			</div>
		</section>
	);
};

export default ProjectsCardDisplay;
