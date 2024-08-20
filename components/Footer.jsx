import React from "react";
import "../styles/Footer.scss";
import { IoLogoGithub } from "react-icons/io";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="footer-content-container">
				<div className="copyright-section">
					<p>&copy; 2024 azhang03. All Rights Reserved.</p>
				</div>
				<div className="social-icons-container">
					<a
						href="https://www.linkedin.com/in/alan-zhang-a254b8233/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<TiSocialLinkedinCircular className="linkedin-icon" />
					</a>

					<a
						href="https://github.com/alanzhang03"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IoLogoGithub className="github-icon" />
					</a>

					<a
						href="https://twitter.com/cloudeelol"
						target="_blank"
						rel="noopener noreferrer"
					>
						<AiFillTwitterCircle className="twitter-icon" />
					</a>

					<a
						href="https://www.facebook.com/profile.php?id=100009265073408"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebook className="facebook-icon" />
					</a>

					<a
						href="https://www.instagram.com/_alanzhang_3/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SiInstagram className="insta-icon" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
