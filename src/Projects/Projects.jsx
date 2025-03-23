import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import projectsImage from "../Images/Projects/MeasuringTools-Blurred.jpg";

import fantasyBballImage from "../Images/Projects/Nba1.jpg";
import fantasyBballImageMini from "../Images/Projects/Nba1-Mini.jpg";

import clocksImage from "../Images/Projects/clock-design-wallpaper-cropped.jpg";
import clocksImageMini from "../Images/Projects/clock-design-wallpaper-cropped-mini.jpg";

import calculatorImage from "../Images/Projects/front-view-school-supplies-table-composition-cropped.jpg";
import calculatorImageMini from "../Images/Projects/front-view-school-supplies-table-composition-cropped-mini.jpg";

import geographyGameImage from "../Images/Projects/Globe.jpg";
import geographyGameImageMini from "../Images/Projects/Globe-Mini.jpg";

import { useUserContext } from "../UserContext";
import { progressiveBackgroundImageLoader } from "../Utils/ProgressiveLoaders";
import ProgressiveImage from "../Utils/ProgressiveImage";

const Projects = () => {
  const { isDesktop } = useUserContext();

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const [isCardClicked, setIsCardClicked] = useState(false);

  const projectsIntro = {
    title: "Projects",
    description: "Click on a project below for a description",
  };
  const projectsData = [
    {
      title: "Fantasy Basketball",
      miniMediaUrl: fantasyBballImageMini,
      mediaUrl: fantasyBballImage,
      description:
        "Consisting of the team analyzer, it calculates your team averages in nine categories relative to the league's top 150 players",
      linkUrl: "/projects/fantasy-basketball",
    },
    {
      title: "Clocks",
      miniMediaUrl: clocksImageMini,
      mediaUrl: clocksImage,
      description:
        "The clocks project consists of a stopwatch, alarm, and a digital clock",
      linkUrl: "/projects/kronos",
    },
    {
      title: "Calculator",
      miniMediaUrl: calculatorImageMini,
      mediaUrl: calculatorImage,
      description:
        "The calculator project consists of a basic arithmetic calculator",
      linkUrl: "/projects/calculator",
    },
    {
      title: "Geography Game",
      miniMediaUrl: geographyGameImageMini,
      mediaUrl: geographyGameImage,
      description: "Coming soon",
      linkUrl: "/projects/geography-game",
    },
  ];

  const handleCardClick = (index) => {
    if (!isCardClicked) {
      setIsCardClicked(true);
    }
    setCurrentProjectIndex(index);
  };

  const projectsPageRef = useRef(null);

  useEffect(() => {
    return progressiveBackgroundImageLoader(
      projectsPageRef.current,
      projectsImage
    );
  }, []);

  return (
    <>
      <div className="Projects-Page" ref={projectsPageRef}>
        <div className={`Projects-Container ${isDesktop ? "" : "Phone"}`}>
          <div
            className={`Projects-Title-Description-Container ${
              isDesktop ? "" : "Phone"
            }`}
          >
            {isCardClicked ? (
              <div>
                <div
                  className={`Projects-Project-Title ${
                    isDesktop ? "" : "Phone"
                  }`}
                >
                  {projectsData[currentProjectIndex].title}
                </div>
                <div className="Projects-Project-Description">
                  {projectsData[currentProjectIndex].description}
                </div>
                <Button
                  as={Link}
                  to={projectsData[currentProjectIndex].linkUrl}
                  className="Projects-Project-Button"
                >
                  Go To Project
                  <Icon name="arrow right" />
                </Button>
              </div>
            ) : (
              <div>
                <div
                  className={`Projects-Project-Title ${
                    isDesktop ? "" : "Phone"
                  }`}
                >
                  {projectsIntro.title}
                </div>
                <div className="Projects-Project-Description">
                  {projectsIntro.description}
                </div>
              </div>
            )}
          </div>

          <div
            className={`${
              isDesktop
                ? "Projects-Images-Container-Desktop"
                : "Projects-Images-Container-Phone"
            }`}
          >
            {projectsData.map((project, index) => (
              <div key={index}>
                {index === 3 ? (
                  <div className="Projects-Image">
                    <ProgressiveImage
                      smallSrc={project.miniMediaUrl}
                      largeSrc={project.mediaUrl}
                      alt={project.description}
                      className="Projects-Image-Disabled"
                    />
                    <div className="Projects-CS-Overlay">Coming Soon</div>
                  </div>
                ) : (
                  <ProgressiveImage
                    smallSrc={project.miniMediaUrl}
                    largeSrc={project.mediaUrl}
                    alt={project.description}
                    className={`${
                      isCardClicked && currentProjectIndex === index
                        ? "Projects-Selected-Card"
                        : ""
                    } Projects-Image`}
                    onClick={() => handleCardClick(index)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
