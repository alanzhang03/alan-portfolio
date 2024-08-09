"use client";
import React from "react";
import "./styles/AboutGrid.scss";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";
import MainPic from "../../public/Assets/MainPic.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutGrid = () => {
	useGSAP(() => {
		gsap.to(".gsap-individual-grids", {
			scrollTrigger: ".gsap-individual-grids",
			delay: 0,
			duration: 2,
			opacity: 1,
			stagger: {
				each: 0.2,
				from: "start",
			},
		});
	}, []);

	const email = "alan.s.zhang@gmail.com";

	function copyEmail() {
		navigator.clipboard.writeText(email);
		alert("Copied email: " + email);
	}

	return (
		<section>

			<div className="grid-container">
				<div className="grid-row-1">
					<div className="gsap-individual-grids" id="grid-row-1-col-1">
						<p className="grid-text-1">
							Prioritizing collaboration, fostering open communication
						</p>
					</div>
					<div className="grid-row-1-col-2">
						<div className="gsap-individual-grids" id="grid-row-1-col-2-1">
							<p className="grid-text-2">Flexible, Responsible, Available.</p>
							<Image
								className="main-pic"
								src={MainPic}
								alt="Picture of the author"
							/>
						</div>
						<div className="gsap-individual-grids" id="grid-row-1-col-2-2">
							<div className="grid-text-3-container">
								<p style={{ color: "#d5cbe5" }}>Constantly improving my </p>
								<p className="grid-text-3">
									<span> Tech Stack.</span>
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="grid-row-2">
					<div className="grid-row-2-col-1">
						<div className="gsap-individual-grids" id="grid-row-2-col-1-1">
							<p className="grid-text-4">
								Tech Enthusiast with a passion for development.
							</p>
						</div>
						<div className="gsap-individual-grids" id="grid-row-2-col-1-2">
							<p className="grid-text-5">
								Contact me if you are interested in starting a project!
							</p>
							<div className="grid-5-button-container">
								<button className="grid-5-button" onClick={copyEmail}>
									<div className="copy-address-text-container">
										<IoCopyOutline className="copy-icon" />
										Copy My Email Address
									</div>
								</button>
							</div>
						</div>
					</div>

					<div className="gsap-individual-grids" id="grid-row-2-col-2">
						<div className="grid-text-6-container">
							<p style={{ color: "#d5cbe5" }}>The Latest Insight</p>
							<p className="grid-text-6">
								Currently building a tracker using Nextjs
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutGrid;
