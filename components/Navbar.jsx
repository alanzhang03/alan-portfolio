import React from "react";
import Link from "next/link";
import "../styles/Navbar.scss";

const Navbar = () => {
	return (
		<nav className="nav-container">
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
