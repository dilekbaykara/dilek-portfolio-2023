import React, { useState, useEffect } from "react";
import "./SkillsAnimation.css";
import self from "./images/self.gif";

// interface ScrollAnimationProps {
//   // Define any props you need here
// }

function Skills() {
  const [animate, setAnimate] = useState(false);

  // const elements = document.querySelectorAll("#skills-div")

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Check if the user has scrolled to a certain position

      if (window.scrollY > 200) {
        // Adjust the threshold as needed
        setAnimate(true);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="skills-div">
      <div id="skills-title"> Skills </div>
      <div id="self-div">
        <img alt="self" src={self} id="self"></img>
      </div>
      <div id="skills-icons-div">
        <div className="skills-icons">Javascript</div>
        <div className="skills-icons">Node.js</div>
        <div className="skills-icons">Typescript</div>
        <div className="skills-icons">React.js</div>
        <div className="skills-icons">SQL</div>
        <div className="skills-icons">Express</div>
        <div className="skills-icons">Prisma</div>
        <div className="skills-icons">XCode</div>
        <div className="skills-icons">Git</div>
        <div className="skills-icons">Next.js</div>
        <div className="skills-icons">CSS</div>
        <div className="skills-icons">Figma</div>
        <div className="skills-icons">Webpack</div>
        <div className="skills-icons">Jest</div>
        <div className="skills-icons">Puppeteer</div>
        <div className="skills-icons">Adobe Photoshop</div>
        <div className="skills-icons">Adobe Illustrator</div>
        <div className="skills-icons">Adobe After Effects</div>
      </div>
    </div>
  );
}

export default Skills;
