"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../styles/Navbar.scss";

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
	}, [lastScrollY]);

	return (
			<nav className={`nav-container ${show ? "" : "hidden"}`}>
				<Link className="nav-hover" href="/">
					Home
				</Link>
				<Link className="nav-hover" href="#about">
					About
				</Link>
				<Link className="nav-hover" href="#skills">
					Skills
				</Link>
				<Link className="nav-hover" href="#projects">
					Projects
				</Link>
				<Link className="nav-hover" href="#contact">
					Contact
				</Link>
			</nav>
	);
};

export default Navbar;
