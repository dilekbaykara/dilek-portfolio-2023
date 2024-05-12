import React, { MutableRefObject, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Projects from "./Projects";
import UIDesign from "./UIDesign";
import Resume from "./Resume";
import ReactGA from "react-ga4";
import Portrait from "./../src/images/Portrait.png";
import Skills from "./Skills";
import Footer from "./Footer";
import Activities from "./Activities";

const TRACKING_ID = "G-XRHXYD76M5"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick2 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick3 = () => {
    ref3.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick4 = () => {
    ref4.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App" ref={ref}>
      <header className="App-header"></header>

      <div className="navbar">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>

          <div className="menu-items">
            <div id="button-div">
              <button className="header-buttons" onClick={handleClick}>
                Home{" "}
              </button>
              <button className="header-buttons" onClick={handleClick2}>
                Projects{" "}
              </button>
              <button className="header-buttons" onClick={handleClick3}>
                Skills{" "}
              </button>
              <button className="header-buttons" onClick={handleClick4}>
                Resume{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="main">
        <div id="text-box">
          <div id="name-div">
            <div id="name-div-1">
              Dilek{" "}
              <div id="italic-name">
                {" "}
                <i> ['dihl-eck']</i>
              </div>{" "}
            </div>{" "}
            <div id="name-div-2">Baykara</div>
          </div>
          <div id="pic-div">
            <img alt="portrait" src={Portrait} id="portrait"></img>
          </div>
        </div>
        <div id="about-me-div">
          <p>
            Software Developer delivering full-stack solutions with a
            customer-first approach utilizing frontend technologies using
            JavaScript, TypeScript, and React to prioritize their experience
            while also supporting business metrics by using Node.js, Express and
            SQL. Experienced graphic designer leveraging processes developed
            over several years to make sure the design supports the function of
            the website.
          </p>
        </div>
        <div>
          <Activities />
        </div>
      </div>
      <div ref={ref2}>
        <Projects />
      </div>
      <div>
        <UIDesign/>
      </div>
      <div ref={ref3}>
        <Skills />
      </div>

      <div ref={ref4}>
        <Resume />
      </div>
      <Footer />
    </div>
  );
}

export default App;
