import React from "react";
import Link from "next/link";
import "../styles/Navbar.scss";

const Navbar = () => {
	return (
		<nav className="nav-container">
			<Link className="nav-hover" href="/">
				Home
			</Link>
			<Link className="nav-hover" href="/About">
				About
			</Link>
			<Link className="nav-hover" href="/Skills">
				Skills
			</Link>
			<Link className="nav-hover" href="/Projects">
				Projects
			</Link>
			<Link className="nav-hover" href="/Contact">
				Contact
			</Link>
		</nav>
	);
};

export default Navbar;
