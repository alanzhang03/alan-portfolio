"use client";

import React, { useState, useEffect } from "react";
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

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

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
            className="nav-hover"
            href="#homePage"
            onClick={closeMobileMenu}
          >
            <IoHomeOutline className="link-icon" /> Home
          </Link>
          <Link className="nav-hover" href="#work" onClick={closeMobileMenu}>
            <IoBriefcaseOutline className="link-icon" />
            Experience
          </Link>
          <Link className="nav-hover" href="#skills" onClick={closeMobileMenu}>
            <GoGear className="link-icon" />
            Skills
          </Link>
          <Link
            className="nav-hover"
            href="#projects"
            onClick={closeMobileMenu}
          >
            <AiOutlineFundProjectionScreen className="link-icon" />
            Projects
          </Link>
          <Link className="nav-hover" href="#contact" onClick={closeMobileMenu}>
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
          className="mobile-nav-link"
          href="#homePage"
          onClick={closeMobileMenu}
        >
          <IoHomeOutline className="link-icon" /> Home
        </Link>
        <Link
          className="mobile-nav-link"
          href="#work"
          onClick={closeMobileMenu}
        >
          <IoBriefcaseOutline className="link-icon" />
          Experience
        </Link>
        <Link
          className="mobile-nav-link"
          href="#skills"
          onClick={closeMobileMenu}
        >
          <GoGear className="link-icon" />
          Skills
        </Link>
        <Link
          className="mobile-nav-link"
          href="#projects"
          onClick={closeMobileMenu}
        >
          <AiOutlineFundProjectionScreen className="link-icon" />
          Projects
        </Link>
        <Link
          className="mobile-nav-link"
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
