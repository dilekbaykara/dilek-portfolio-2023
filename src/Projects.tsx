import React from "react";
import eBirdImage from "./../src/images/e-bird.png";

function Projects() {
  return (
    <div id="project">
      <div id="project-title">Projects</div>
      <div id="projects-div">
        <div className="project-box">
          <div className="project-div-1">
            <div className="project-name">eBird App</div>
            <div className="project-lang">
              Node.js, Puppeteer, Leaflet.js, and Typescript
            </div>
            <div className="project-info">
              <p>
                - Built a project for birders to view their birdwatching
                sessions on one map{" "}
              </p>{" "}
              <p>
                {" "}
                - eBird crawler crawls the Cornell database and iterates through
                checklist pages.
              </p>{" "}
              <p>
                {" "}
                - Map data is then extracted and concatenated into a single
                large map using Leaflet.js.
              </p>{" "}
              <p>
                {" "}
                - Map pins display information for species observed during
                session
              </p>
            </div>
          </div>
          <div id="img-div">
            <img alt="project-preview" src={eBirdImage} id="e-bird-img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
