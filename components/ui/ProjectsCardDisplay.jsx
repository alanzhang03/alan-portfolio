import React from "react";
import "./styles/ProjectsCardDisplay.scss";
import Image from "next/image";
import TicTacToeImg from "../../public/Assets/TicTacToe.png";
import { FaLocationArrow } from "react-icons/fa6";
import ReactLogo from "../../public/Assets/reactLogo.svg";
import JsLogo from "../../public/Assets/JsLogo.svg";
import ThreeLogo from "../../public/Assets/threeLogo.svg";
import GsapLogo from "../../public/Assets/gsapLogo.svg";
import NextLogo from "../../public/Assets/nextLogo.svg";
import SassLogo from "../../public/Assets/sassLogo.svg";

const ProjectsCardDisplay = () => {
	const projects = [
		{
			Title: "Tic-Tac-Toe",
			Description:
				"Tic Tac Toe game played against either an AI (using minimax algorithm) or another player (human).",
			Link: "https://alantictactoe.onrender.com/",
			GitHubLink: "https://github.com/alanzhang03/tictactoe",
			Image: TicTacToeImg,
			tech1: ReactLogo,
			tech2: JsLogo,
			tech3: GsapLogo,
			tech4: NextLogo,
			tech5: SassLogo,
		},
		{
			Title: "Apple website clone",
			Description: "Apple Iphone webpage clone",
			Link: "https://apple-website-clone-46re.onrender.com/",
			GitHubLink: "https://github.com/alanzhang03/apple_website",
			Image: "",
			tech1: ReactLogo,
			tech2: ThreeLogo,
			tech3: JsLogo,
			tech4: GsapLogo,
			tech5: NextLogo,
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
					{project.Image && (
						<Image
							className="projects-images"
							src={project.Image}
							alt={`${project.Title} image`}
						/>
					)}
					<h1 className="project-title">{project.Title}</h1>
					<p className="project-description">{project.Description}</p>
					<div className="project-tech-link-container">
						<div className="tech-container">
							<Image className="image" src={project.tech1} alt="Tech logo 1" />
							<Image className="image" src={project.tech2} alt="Tech logo 2" />
							<Image className="image" src={project.tech3} alt="Tech logo 3" />
							<Image className="image" src={project.tech4} alt="Tech logo 4" />
							<Image className="image" src={project.tech5} alt="Tech logo 5" />
						</div>
						<p className="project-nav">
							Check Live Site <FaLocationArrow className="location-arrow" />
						</p>
					</div>
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
