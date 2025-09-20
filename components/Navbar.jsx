"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import "../styles/Navbar.scss";
import { IoHomeOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { IoBriefcaseOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("homePage");

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  const updateActiveSection = useCallback(() => {
    const sections = ["homePage", "work", "skills", "projects", "contact"];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        controlNavbar();
        updateActiveSection();
      };

      window.addEventListener("scroll", handleScroll);
      updateActiveSection(); // Set initial active section

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [controlNavbar, updateActiveSection]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav-container ${show ? "" : "hidden"}`}>
        <div className="nav-links">
          <Link
            className={`nav-hover ${
              activeSection === "homePage" ? "active" : ""
            }`}
            href="#homePage"
            onClick={closeMobileMenu}
          >
            <IoHomeOutline className="link-icon" /> Home
          </Link>
          <Link
            className={`nav-hover ${activeSection === "work" ? "active" : ""}`}
            href="#work"
            onClick={closeMobileMenu}
          >
            <IoBriefcaseOutline className="link-icon" />
            Experience
          </Link>
          <Link
            className={`nav-hover ${
              activeSection === "skills" ? "active" : ""
            }`}
            href="#skills"
            onClick={closeMobileMenu}
          >
            <GoGear className="link-icon" />
            Skills
          </Link>
          <Link
            className={`nav-hover ${
              activeSection === "projects" ? "active" : ""
            }`}
            href="#projects"
            onClick={closeMobileMenu}
          >
            <AiOutlineFundProjectionScreen className="link-icon" />
            Projects
          </Link>
          <Link
            className={`nav-hover ${
              activeSection === "contact" ? "active" : ""
            }`}
            href="#contact"
            onClick={closeMobileMenu}
          >
            <BsTelephone className="link-icon" />
            Contact
          </Link>
        </div>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <IoClose /> : <HiMenuAlt3 />}
        </button>
      </nav>
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <Link
          className={`mobile-nav-link ${
            activeSection === "homePage" ? "active" : ""
          }`}
          href="#homePage"
          onClick={closeMobileMenu}
        >
          <IoHomeOutline className="link-icon" /> Home
        </Link>
        <Link
          className={`mobile-nav-link ${
            activeSection === "work" ? "active" : ""
          }`}
          href="#work"
          onClick={closeMobileMenu}
        >
          <IoBriefcaseOutline className="link-icon" />
          Experience
        </Link>
        <Link
          className={`mobile-nav-link ${
            activeSection === "skills" ? "active" : ""
          }`}
          href="#skills"
          onClick={closeMobileMenu}
        >
          <GoGear className="link-icon" />
          Skills
        </Link>
        <Link
          className={`mobile-nav-link ${
            activeSection === "projects" ? "active" : ""
          }`}
          href="#projects"
          onClick={closeMobileMenu}
        >
          <AiOutlineFundProjectionScreen className="link-icon" />
          Projects
        </Link>
        <Link
          className={`mobile-nav-link ${
            activeSection === "contact" ? "active" : ""
          }`}
          href="#contact"
          onClick={closeMobileMenu}
        >
          <BsTelephone className="link-icon" />
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
