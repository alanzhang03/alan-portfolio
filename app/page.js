"use client";

import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import StarField from "@/components/ui/StarField";

import "./testPage.scss";

export default function Home() {
	return (
		<main className={styles.main}>
			<StarField />
			<Navbar />
			<HomePage />
			<About />
			<Skills />
			<Projects />

			<Contact />
			<Footer />
		</main>
	);
}
