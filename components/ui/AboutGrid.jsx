"use client";
import React from "react";
import "./styles/AboutGrid.scss";
import { IoCopyOutline } from "react-icons/io5";

const AboutGrid = () => {
	const email = "alan.s.zhang@gmail.com";

	function copyEmail() {
		navigator.clipboard.writeText(email);
		alert("Copied email: " + email);
	}

	return (
		<section>
			<div className="grid-container">
				<div className="grid-row-1">
					<div className="grid-row-1-col-1">
						<p className="grid-text-1">
							Prioritizing collaboration, fostering open communication
						</p>
					</div>
					<div className="grid-row-1-col-2">
						<div className="grid-row-1-col-2-1">2nd Grid</div>
						<div className="grid-row-1-col-2-2">3rd Grid</div>
					</div>
				</div>

				<div className="grid-row-2">
					<div className="grid-row-2-col-1">
						<div className="grid-row-2-col-1-1">4th grid</div>
						<div className="grid-row-2-col-1-2">
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

					<div className="grid-row-2-col-2">6th Grid</div>
				</div>
			</div>
		</section>
	);
};

export default AboutGrid;
