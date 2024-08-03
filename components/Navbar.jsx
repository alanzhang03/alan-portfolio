import React from "react";
import Link from "next/link";
import "../styles/Navbar.scss";

const Navbar = () => {
	return (
		<nav className="nav-container">
			<Link href="/about">Home</Link>
			<Link href="/About">About Me</Link>
			<Link href="/Projects">Projects</Link>
			<Link href="/Skills">Skills</Link>
			<Link href="/Contact">Contact</Link>
		</nav>
	);
};

export default Navbar;
