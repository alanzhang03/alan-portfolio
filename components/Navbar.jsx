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

const Navbar = () => {
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

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

	return (
		<nav className={`nav-container ${show ? "" : "hidden"}`}>
			<Link className="nav-hover" href="#homePage">
				<IoHomeOutline className="link-icon" /> Home
			</Link>
			<Link className="nav-hover" href="#about">
				<IoPersonOutline className="link-icon" />
				About
			</Link>
			<Link className="nav-hover" href="#skills">
				<GoGear className="link-icon" />
				Skills
			</Link>
			<Link className="nav-hover" href="#projects">
				<AiOutlineFundProjectionScreen className="link-icon" />
				Projects
			</Link>
			<Link className="nav-hover" href="#contact">
				<BsTelephone className="link-icon" />
				Contact
			</Link>
		</nav>
	);
};

export default Navbar;
