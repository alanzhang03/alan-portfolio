import React from "react";
import "./styles/ProjectsCardDisplay.scss";

const ProjectsCardDisplay = () => {
	const projects = [
		{
			Title: "Tic-Tac-Toe",
			Description:
				"Tic Tac Toe game played against either an AI (using minimax algorithm) or another player (human).",
			Link: "https://alantictactoe.onrender.com/",
			GitHubLink: "https://github.com/alanzhang03/tictactoe",
			Image: "",
		},
		{
			Title: "Apple website clone",
			Description: "Apple Iphone webpage clone",
			projectLink: "https://apple-website-clone-46re.onrender.com/",
			GitHubLink: "https://github.com/alanzhang03/apple_website",
			Image: "",
		},
		{
			Title: "CV Builder",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			Link: "https://apple-website-clone-46re.onrender.com/",
			GitHubLink: "https://github.com/alanzhang03/apple_website",
			Image: "",
		},
		{
			Title: "Duis eleifend odio id quam ultrices dignissim",
			Description: "nteger eget urna interdum, hendrerit ligula in, dapibus do",
			Link: "https://apple-website-clone-46re.onrender.com/",
			GitHubLink: "https://github.com/alanzhang03/apple_website",
			Image: "",
		},
	];

	const projectDivs = projects.map((project, index) => {
		return (
			<div key={index}>
				<div className="test-grid">
					{project.Title}
					{project.Description}
					{project.Link}
					{project.GitHubLink}
				</div>
			</div>
		);
	});

	return (
		<section className="projects-card-display">
			<div>ProjectsCardDisplay</div>
			<div className="projects-display-container">{projectDivs}</div>
		</section>
	);
};

export default ProjectsCardDisplay;
