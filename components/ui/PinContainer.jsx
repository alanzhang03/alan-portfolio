"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styles/PinContainer.scss";

const PinContainer = ({
	children,
	title,
	href,
	className,
	containerClassName,
}) => {
	const [transform, setTransform] = useState("rotateX(0deg)");

	const onMouseEnter = () => {
		setTransform("rotateX(40deg) scale(0.8)");
	};
	const onMouseLeave = () => {
		setTransform("rotateX(0deg) scale(1)");
	};

	return (
		<div
			className={`relative group-pin cursor-pointer ${containerClassName}`}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div
				style={{ perspective: "1000px" }}
				className={`relative ${className}`}
			>
				<div
					style={{
						transform: transform,
					}}
					className="pin-content"
				>
					<div className="relative z-50">{children}</div>
				</div>
			</div>
			<PinPerspective title={href} href={href} />
		</div>
	);
};

const PinPerspective = ({ title, href }) => {
	const openLink = () => {
		window.open(href, "_blank");
	};

	return (
		<motion.div
			className="pin-perspective-container"
			onClick={openLink} 
		>
			<div className="pin-perspective-content">
				<div className="absolute-top-center">
					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className="pin-link"
					>
						<span className="pin-title">{title}</span>
						<span className="pin-highlight"></span>
					</a>
				</div>
			</div>
		</motion.div>
	);
};

export default PinContainer;
