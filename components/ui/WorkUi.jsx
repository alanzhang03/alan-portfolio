import React from "react";
import "../ui/styles/WorkUi.scss";

const WorkUi = () => {
	const workExperience = [
		{
			companyName: "Mindhome",
			companyLogo: "",
			companyPosition: "Software Engineering Intern",
			startDate: "April 2024",
			endDate: "August 2024",
			jobDescription: [
				"• Worked on updates and enhancements to the company website, leveraging React for web application portions and React Native for mobile optimizations.",
				"• Contributed personal insights and recommendations for leveraging React to enhance aesthetics and functionality of our web application.",
				"• Collaborated closely with a team of interns to develop and refine React application projects, enhancing project outcomes through effective teamwork.",
				"• Gained foundational skills in robotics programming by engaging with Linux and Python, gaining practical experience in developing and testing automated solutions.",
			],
		},
		{
			companyName: "Temple University",
			companyLogo: "",
			companyPosition: "Research Assistant Intern",
			startDate: "August 2024",
			endDate: "Now",
			jobDescription: [
				"• Worked on updates and enhancements to the company website, leveraging React for web application portions and React Native for mobile optimizations.",
				"• Contributed personal insights and recommendations for leveraging React to enhance aesthetics and functionality of our web application.",
				"• Collaborated closely with a team of interns to develop and refine React application projects, enhancing project outcomes through effective teamwork.",
				"• Gained foundational skills in robotics programming by engaging with Linux and Python, gaining practical experience in developing and testing automated solutions.",
			],
		},
	];

	const workDiv = workExperience.map((company, index) => {
		return (
			<div className="work-ui-container" key={index}>
				<h1 className="work-company-name">{company.companyName}</h1>
				<p className="company-position">{company.companyPosition}</p>
				<div className="company-start-end-date-container">
					<p>
						{company.startDate} -{" "}
						<span className={company.endDate === "Now" ? "now-color" : ""}>
							{company.endDate}
						</span>
					</p>
				</div>
				<div className="job-description-gap">
					<ul className="job-description">
						{company.jobDescription.map((desc, i) => (
							<p key={i}>{desc}</p>
						))}
					</ul>
				</div>
			</div>
		);
	});

	return (
		<section className="experience-display">
			<div className="work-ui-box">
				<div>{workDiv}</div>
			</div>
		</section>
	);
};

export default WorkUi;
