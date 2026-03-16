"use client";

import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
	return (
		<main className={styles.main}>
			<Navbar />
			<HomePage />
			<About />
			<WorkExperience />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
}
