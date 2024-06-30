import React from "react";
import eBirdImage from "./../src/images/e-bird.png";
import MealFridgeImage from "./../src/images/to-do.png";
import CCAppImage from "./../src/images/cc-app.png";
import nstImage from "./../src/images/nst-proj.png";

const charmLink = () => {
  const url = "https://charming-data.circle.so/home";
  window.open(url, "_blank");
};

const handleClick0 = () => {
  const url =
    "https://colab.research.google.com/drive/16csXpZW_D14h1-aNMz3B1Nrg2bgJKPRS?usp=sharing";
  window.open(url, "_blank");
};

const handleClick1 = () => {
  const url = "https://github.com/dilekbaykara/bird-crawler";
  window.open(url, "_blank");
};

const handleClick2 = () => {
  const url = "https://github.com/dilekbaykara/meal-fridge";
  window.open(url, "_blank");
};

const handleClick3 = () => {
  const url = "https://github.com/dilekbaykara/currency-changer";
  window.open(url, "_blank");
};

function Projects() {
  return (
    <div id="project">
      <div id="project-title">Projects</div>
      <div id="projects-div">
        <div id="project-box" onClick={handleClick0}>
          <div id="project-name">
            Neural Style Transfer Sandbox
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
            HTML, CSS, JavaScript, and Python (Tensorflow and Flask)
          </div>
          <div className="project-info">
            <p>
              - Application built to understand the process of AI Neural Style
              Transfer, tool used to train AI on artist’s styles to generate
              images based on artistic styles. NSTS was built as part of
              Charming Data's monthly project series.
            </p>

            <p>
              - Stylize feature - Style Transfer Sandbox that combines the
              styles of two images into one.
            </p>

            <p>
              - Attribution feature - Determines a percentage of similarity
              between two images and produces a Gram Matrices for further
              understanding of NST process and computer vision.
            </p>
          </div>

          <div id="img-div">
            <img alt="project-preview" src={nstImage} id="e-bird-img"></img>
            {/* <div className="shadow-box"></div> */}
          </div>
        </div>

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
            MealFridge{" "}
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
          <div className="project-lang">React Native, SQL</div>
          <div className="project-info">
            <p>
              - Application that assists users in managing their home food
              ecosystem{" "}
            </p>{" "}
            <p>
              {" "}
              - Users can maintain an inventory of ingredients, create recipes,
              and meal plans
            </p>{" "}
            <p>
              {" "}
              - Users can automatically add missing inventory to shopping lists
              for convenience
            </p>{" "}
          </div>

          <div id="img-div">
            <img
              alt="project-preview"
              src={MealFridgeImage}
              id="to-do-img"
            ></img>
            {/* <div className="shadow-box"></div> */}
          </div>
        </div>
        <div id="project-box" onClick={handleClick3}>
          <div id="project-name">
            Currency Converter{" "}
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
          <div className="project-lang">Kotlin, Android Jetpack</div>
          <div className="project-info">
            <p>
              - Mobile application that provides up-to-date exchange rates for
              over 100 currencies worldwide{" "}
            </p>
            <p>
              {" "}
              - Clean and minimal interface allows for effortless input and
              conversion between currencies.
            </p>{" "}
          </div>

          <div id="img-div">
            <img alt="project-preview" src={CCAppImage} id="to-do-img"></img>
            {/* <div className="shadow-box"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
