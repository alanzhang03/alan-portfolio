// hooks/useScrollFade.js
"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollFade = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          markers: true, // Remove in production, helpful for debugging
        },
      }
    );

    // Cleanup
    return () => {
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return ref;
};

export default useScrollFade;
