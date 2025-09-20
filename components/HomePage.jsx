"use client";

import { FaLocationArrow } from "react-icons/fa6";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/HomePage.scss";
import Link from "next/link";
import { FaArrowDownLong } from "react-icons/fa6";
import TextLoop from "./ui/TextLoop";
import Image from "next/image";

//Icons
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";

const HomePage = () => {
  useGSAP(() => {
    gsap.from(".home-page-header", {
      delay: 0.25,
      duration: 0.65,
      y: -200,
      opacity: 0,
    });
    gsap.from(".home-page-header-2", {
      delay: 1,
      duration: 0.5,
      x: 100,
      opacity: 0,
    });

    gsap.from(".home-page-header-2 span", {
      delay: 1,
      opacity: 0,
      stagger: {
        each: 0.35,
      },
    });

    gsap.to(".social-box", {
      delay: 2,
      opacity: 1,
      duration: 1,
      stagger: {
        each: 0.2,
        from: "start",
      },
    });

    gsap.from("#gsap-arrow-down", {
      opacity: 0,
      delay: 2,
      duration: 2,
    });

    gsap.to(".profile-photo", {
      opacity: 1,
      delay: 0.5,
      duration: 2,
    });
  }, []);

  const socialLinks = [
    {
      Index: "1",
      Title: "Twitter",
      Icon: <CiTwitter />,
      Link: "https://twitter.com/alanzhang003",
    },
    {
      Index: "2",
      Title: "LinkedIn",
      Icon: <CiLinkedin />,
      Link: "https://www.linkedin.com/in/alan-zhang-a254b8233/",
    },
    {
      Index: "3",
      Title: "GitHub",
      Icon: <FaGithub />,
      Link: "https://github.com/alanzhang03",
    },
    {
      Index: "4",
      Title: "Email",
      Icon: <MdOutlineEmail />,
      Link: "mailto:alan.s.zhang04@gmail.com",
    },
    {
      Index: "5",
      Title: "Instagram",
      Icon: <FaInstagram />,
      Link: "https://www.instagram.com/_alanzhang_3/",
    },
  ];

  const mapSocialLinks = socialLinks.map((socials) => {
    return (
      <a
        key={socials.Index}
        target="_blank"
        href={socials.Link}
        rel="noreferrer"
      >
        <div className="social-box">
          <div className="home-page-icon">{socials.Icon}</div>
          <p className="socials-text">{socials.Title}</p>
        </div>
      </a>
    );
  });

  return (
    <section id="homePage" className="main-homepage">
      <p className="mini-header">DYNAMIC WEB EXPERIENCE WITH NEXT.JS</p>
      <h1 className="home-page-header">Welcome to my Portfolio</h1>

      <div className="profile-section">
        <div className="profile-photo-container">
          <Image
            src="/Assets/alan-pic.JPG"
            alt="Alan Zhang"
            width={280}
            height={280}
            className="profile-photo"
            priority
            onClick={() => {
              window.open("https://www.linkedin.com/in/azhang03/", "_blank");
            }}
          />
        </div>
        <h1 className="home-page-header-2">
          I&apos;m{" "}
          <span className="home-page-name">
            <span>Alan </span> <span>Zhang</span>
          </span>
        </h1>
      </div>

      <div className="socials-container">{mapSocialLinks}</div>

      <TextLoop />
      <FaArrowDownLong id="gsap-arrow-down" className="arrow-down" />
    </section>
  );
};

export default HomePage;
