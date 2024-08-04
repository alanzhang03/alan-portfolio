import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomePage = () => {

  useGSAP(() => {
    gsap.to(".port-intro", {delay: 2})
    
  },[])


	return (
		<section className="main">
			<h1 className="port-intro">Testing Home Section</h1>
		</section>
	);
};

export default HomePage;
