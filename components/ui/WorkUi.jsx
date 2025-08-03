import React, { useEffect } from "react";
import "../ui/styles/WorkUi.scss";
import Image from "next/image";
import MindHome from "../../public/Assets/mindHome.png";
import TempleLogo from "../../public/Assets/temple.svg";
import TollBrothersLogo from "../../public/Assets/tollBrothers.svg";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkUi = () => {
  useEffect(() => {
    const workContainers = document.querySelectorAll(".work-ui-container");

    workContainers.forEach((container) => {
      const workInfo = container.querySelector(".work-info");

      gsap.fromTo(
        workInfo,
        { opacity: 0.3 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            end: "top 10%",
            toggleActions: "play reverse play reverse",
          },
          duration: 0.3,
          ease: "power2.inOut",
        }
      );
    });
  }, []);

  const workExperience = [
    {
      companyName: "Toll Brothers",
      companyLogo: TollBrothersLogo,
      companyPosition: "Software Engineer - Full Stack",
      startDate: "May 2025",
      endDate: "Now",
      jobDescription: [],
      link: "https://www.tollbrothers.com/",
    },
    {
      companyName: "Temple University",
      companyLogo: TempleLogo,
      companyPosition: "Research Assistant Intern",
      startDate: "August 2024",
      endDate: "December 2024",
      jobDescription: [
        "● Currently conducting in-depth research on Software-Defined Networking (SDN) technologies, exploring their applications and impact on modern network infrastructures.",
        "● Collaborating with Temple University Professor Liang Du to identify key areas of SDN for further exploration, including security, scalability, and performance.",
        "● Writing a research paper detailing ongoing experiments, analysis, and findings related to SDN.",
      ],
      link: "https://www.temple.edu/",
    },
    {
      companyName: "Mindhome",
      companyLogo: MindHome,
      companyPosition: "Software Engineering Intern",
      startDate: "April 2024",
      endDate: "August 2024",
      jobDescription: [
        "● Worked on updates and enhancements to the company website, leveraging React for web application portions and React Native for mobile optimizations.",
        "● Contributed personal insights and recommendations for leveraging React to enhance aesthetics and functionality of our web application.",
        "● Collaborated closely with a team of interns to develop and refine React application projects, enhancing project outcomes through effective teamwork.",
        "● Gained foundational skills in robotics programming by engaging with Linux and Python, gaining practical experience in developing and testing automated solutions.",
      ],
      link: "https://www.mindhome.co/",
    },
  ];

  const workDiv = workExperience.map((company, index) => (
    <React.Fragment key={index}>
      <div className="work-ui-container">
        <div className="company-logo-container">
          <div className="vertical-line"></div>
          <a href={company.link} target="_blank" rel="noopener noreferrer">
            <Image
              className="company-logo"
              src={company.companyLogo}
              alt="company logo"
            />
          </a>
        </div>
        <div className="work-info">
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
      </div>
      {index < workExperience.length - 1 && <hr className="work-divider" />}
    </React.Fragment>
  ));

  return (
    <section className="experience-display">
      <div className="work-ui-box">{workDiv}</div>
    </section>
  );
};

export default WorkUi;
