import React from "react";
import eBirdImage from "./../src/images/e-bird.png";
import ToDoListImage from "./../src/images/to-do.png";
import weatherAppImage from "./../src/images/weather-app.png";

const handleClick1 = () => {
  const url = "https://github.com/dilekbaykara/bird-crawler";
  window.open(url, "_blank");
};

const handleClick2 = () => {
  const url = "https://dilekbaykara.github.io/to-do-list/";
  window.open(url, "_blank");
};

const handleClick3 = () => {
  const url = "https://dilekbaykara.github.io/weather-app/";
  window.open(url, "_blank");
};

function Projects() {
  return (
    <div id="project">
      <div id="project-title">Projects</div>
      <div id="projects-div">
        <div id="project-box" onClick={handleClick1}>
          <div id="project-name">
            eBird App{" "}
            <span className="svg-span">
              <svg
                id="arrow"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.939347 20.9791C0.353557 21.5649 0.353551 22.5147 0.939334 23.1004C1.52512 23.6862 2.47486 23.6862 3.06065 23.1005L0.939347 20.9791ZM23.54 2.00001C23.54 1.17158 22.8685 0.500005 22.04 0.5L8.54005 0.499918C7.71163 0.499913 7.04005 1.17148 7.04004 1.99991C7.04004 2.82834 7.71161 3.49991 8.54003 3.49992L20.54 3.49999L20.54 15.5C20.54 16.3284 21.2115 17 22.0399 17C22.8684 17 23.54 16.3284 23.54 15.5L23.54 2.00001ZM3.06065 23.1005L23.1007 3.06067L20.9794 0.939333L0.939347 20.9791L3.06065 23.1005Z"
                  fill="#6F00FD"
                ></path>
              </svg>
            </span>
          </div>

          <div className="project-lang">
            Node.js, Puppeteer, Leaflet.js, and Typescript
          </div>
          <div className="project-info">
            <p>
              - Built a project for birders to view their birdwatching sessions
              on one map{" "}
            </p>{" "}
            <p>
              {" "}
              - eBird crawler crawls the Cornell database and iterates through
              checklist pages.
            </p>{" "}
            <p>
              {" "}
              - Map data is then extracted and concatenated into a single large
              map using Leaflet.js.
            </p>{" "}
            <p>
              {" "}
              - Map pins display information for species observed during session
            </p>
          </div>

          <div id="img-div">
            <img alt="project-preview" src={eBirdImage} id="e-bird-img"></img>
            {/* <div className="shadow-box"></div> */}
          </div>
        </div>
        <div id="project-box" onClick={handleClick2}>
          <div id="project-name">
            To Do List{" "}
            <span className="svg-span">
              <svg
                id="arrow"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.939347 20.9791C0.353557 21.5649 0.353551 22.5147 0.939334 23.1004C1.52512 23.6862 2.47486 23.6862 3.06065 23.1005L0.939347 20.9791ZM23.54 2.00001C23.54 1.17158 22.8685 0.500005 22.04 0.5L8.54005 0.499918C7.71163 0.499913 7.04005 1.17148 7.04004 1.99991C7.04004 2.82834 7.71161 3.49991 8.54003 3.49992L20.54 3.49999L20.54 15.5C20.54 16.3284 21.2115 17 22.0399 17C22.8684 17 23.54 16.3284 23.54 15.5L23.54 2.00001ZM3.06065 23.1005L23.1007 3.06067L20.9794 0.939333L0.939347 20.9791L3.06065 23.1005Z"
                  fill="#6F00FD"
                ></path>
              </svg>
            </span>
          </div>
          <div className="project-lang">HTML, React, TypeScript, CSS</div>
          <div className="project-info">
            <p>
              - Users can add tasks with due date and mark tasks are complete or
              incomplete{" "}
            </p>{" "}
            <p>
              {" "}
              - For easier tracking, user can view tasks as All, Active, or Done
            </p>{" "}
            <p>
              {" "}
              - Implemented custom greeting for time of day with date display
            </p>{" "}
            <p>
              {" "}
              - Tasks are color coded in order of importance (Important or
              Normal)
            </p>
          </div>

          <div id="img-div">
            <img alt="project-preview" src={ToDoListImage} id="to-do-img"></img>
            {/* <div className="shadow-box"></div> */}
          </div>
        </div>
        <div id="project-box" onClick={handleClick3}>
          <div id="project-name">
            Weather App{" "}
            <span className="svg-span">
              <svg
                id="arrow"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.939347 20.9791C0.353557 21.5649 0.353551 22.5147 0.939334 23.1004C1.52512 23.6862 2.47486 23.6862 3.06065 23.1005L0.939347 20.9791ZM23.54 2.00001C23.54 1.17158 22.8685 0.500005 22.04 0.5L8.54005 0.499918C7.71163 0.499913 7.04005 1.17148 7.04004 1.99991C7.04004 2.82834 7.71161 3.49991 8.54003 3.49992L20.54 3.49999L20.54 15.5C20.54 16.3284 21.2115 17 22.0399 17C22.8684 17 23.54 16.3284 23.54 15.5L23.54 2.00001ZM3.06065 23.1005L23.1007 3.06067L20.9794 0.939333L0.939347 20.9791L3.06065 23.1005Z"
                  fill="#6F00FD"
                ></path>
              </svg>
            </span>
          </div>
          <div className="project-lang">React, TypeScript, Public API, CSS</div>
          <div className="project-info">
            <p>
              - Weather App that displays temperature details, 5 day forecast,
              and hourly forecast graph for 24 hr period{" "}
            </p>
            <p> - Displays Celcius and Fahrenheit temperature</p>{" "}
            <p> - Users can search city and receive weather forecast. </p>{" "}
            <p>
              - Users can use geo location function to receive weather forecast.
            </p>{" "}
          </div>

          <div id="img-div">
            <img
              alt="project-preview"
              src={weatherAppImage}
              id="to-do-img"
            ></img>
            {/* <div className="shadow-box"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
