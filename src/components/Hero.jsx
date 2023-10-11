import { useEffect } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 2000, // Set the animation duration (in milliseconds)
      easing: "ease-out-back", // Set the easing for animations
      once: true, // Only run animations once
    });

    // Initialize Typed.js
    const options = {
      strings: ["Designer", "Developer", "Freelancer"],
      typeSpeed: 90, // Adjust the typing speed as needed
      backSpeed: 25, // Adjust the backspacing speed as needed
      loop: true,
    };

    const typed = new Typed(".typed", options);

    // Clean up Typed.js on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-start align-items-center"
    >
      <div className="wallet-radial-1"></div>
      <div className="wallet-radial-2"></div>
      <div className="hero-container" data-aos="fade-in">
        <h4>Hey There!</h4>
        <h1>
          I'm <span>Jon</span>
        </h1>
        <p>
          <span
            className="typed"
            data-typed-items="Designer, Developer, Freelancer"
          ></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
