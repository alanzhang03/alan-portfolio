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
      companyPosition: "Software Engineer (Web)",
      startDate: "May 2025",
      endDate: "Now",
      techStack: ["Next.js", "SCSS", "AWS S3", "Headless CMS", "Jira", "Agile"],
      jobDescription: [
        "● Architected and developed new user-facing features for Americas luxury homebuilder, using a modern stack including Next.js, SCSS, and a headless CMS to enhance the digital home-buying experience.",
        "● Reduced bundle size by 15% and boosted developer velocity by migrating static data to AWS S3 and refactoring the codebase to eliminate over 100 redundant files with reusable templates.",
        "● Accelerated feature delivery in an Agile environment by managing an average of 10 pull requests per month from conception to deployment. Improved code quality and prevented critical bugs by conducting rigorous peer reviews in Jira, directly contributing to the stability of high-traffic marketing sites.",
        "● Enhanced the home-buying journey by designing and launching a site-wide Print View feature (with sorting) for thousands of property listings, consolidating disparate data points into a clean, printer-friendly summary.",
      ],
      link: "https://www.tollbrothers.com/",
    },
    {
      companyName: "Temple University",
      companyLogo: TempleLogo,
      companyPosition: "Research Assistant Intern",
      startDate: "August 2024",
      endDate: "December 2024",
      techStack: [
        "SDN",
        "Network Programming",
        "Research",
        "Technical Writing",
      ],
      jobDescription: [
        "● Developed a technical report on Software-Defined Networking (SDN) that evaluated the trade-offs between network programmability and control-plane centralization, identifying key areas for performance optimization.",
        "● Reviewed recent advancements and challenges in SDN technologies such as programmability, flexibility, and control-plane centralization, highlighting areas for further research and practical implementations.",
      ],
      link: "https://www.temple.edu/",
    },
    {
      companyName: "Mindhome",
      companyLogo: MindHome,
      companyPosition: "Software Engineering Intern",
      startDate: "April 2024",
      endDate: "August 2024",
      techStack: [
        "React",
        "React Native",
        "JavaScript",
        "UI/UX",
        "Performance Optimization",
      ],
      jobDescription: [
        "● Improved user experience and application performance by leading the implementation of high-performance UI updates using React and React Native. Proactively identified and resolved key performance bottlenecks, resulting in a more responsive and efficient user interface.",
        "● Developed and optimized key components of React applications, proactively identifying and resolving performance bottlenecks to elevate user experience and efficiency.",
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
          <div className="tech-stack-container">
            {company.techStack.map((tech, i) => (
              <span key={i} className="tech-tag">
                {tech}
              </span>
            ))}
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
