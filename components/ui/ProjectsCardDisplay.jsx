import React from "react";
import "./styles/ProjectsCardDisplay.scss";
import Image from "next/image";
import TicTacToeImg from "../../public/Assets/TicTacToe.png";

const ProjectsCardDisplay = () => {
	const projects = [
		{
			Title: "Tic-Tac-Toe",
			Description:
				"Tic Tac Toe game played against either an AI (using minimax algorithm) or another player (human).",
			Link: "https://alantictactoe.onrender.com/",
			GitHubLink: "https://github.com/alanzhang03/tictactoe",
			Image: TicTacToeImg,
			tech1: "",
			tech2: "",
			tech3: "",
			tech4: "",
			tech5: "",
		},
		{
			Title: "Apple website clone",
			Description: "Apple Iphone webpage clone",
			projectLink: "https://apple-website-clone-46re.onrender.com/",
			GitHubLink: "https://github.com/alanzhang03/apple_website",
			Image: "",
			tech1: "",
			tech2: "",
			tech3: "",
			tech4: "",
			tech5: "",
		},
		{
			Title: "CV Builder",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			Link: "https://apple-website-clone-46re.onrender.com/",
			GitHubLink: "https://github.com/alanzhang03/apple_website",
			Image: "",
			tech1: "",
			tech2: "",
			tech3: "",
			tech4: "",
			tech5: "",
		},
		{
			Title: "Duis eleifend odio id quam ultrices dignissim",
			Description: "nteger eget urna interdum, hendrerit ligula in, dapibus do",
			Link: "https://apple-website-clone-46re.onrender.com/",
			GitHubLink: "https://github.com/alanzhang03/apple_website",
			Image: "",
			tech1: "",
			tech2: "",
			tech3: "",
			tech4: "",
			tech5: "",
		},
	];

	const projectDivs = projects.map((project, index) => {
		return (
			<div key={index}>
				<div className="project-grid">
					<Image
						className="projects-images"
						src={project.Image}
						alt="Picture of projects"
					></Image>
					<h1 className="project-title">{project.Title}</h1>
					<p className="project-description">{project.Description}</p>
					<div className="project-tech-link-container">
						<div className="tech-container">
							{project.tech1}
							{project.tech2}
							{project.tech3}
							{project.tech4}
							{project.tech5}

						</div>
						<p className="project-nav">Check Live Site</p>
					</div>

					{/*
					{project.Link}
                    {project.GitHubLink}
					*/}
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
