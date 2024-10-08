import React, { useState } from "react";
import "./Projects.css";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import fantasyBballImage from "../Images/Projects/Nba1.jpg";
import clocksImage from "../Images/Projects/clock-design-wallpaper-cropped.jpg";
import calculatorImage from "../Images/Projects/front-view-school-supplies-table-composition-cropped.jpg";
import geographyGameImage from "../Images/Projects/pexels-ricky-galvez-466962-1169922-cropped.jpg";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projectsData = [
    {
      title: "Projects",
      mediaUrl: null,
      description: "Click on the projects to the right to get a description",
      linkUrl: null,
    },
    {
      title: "Fantasy Basketball",
      mediaUrl: fantasyBballImage,
      description:
        "The fantasy basketball project consists of the team analyzer, which calculates how well your team averages in nine categories relative to the league's top 150 players. It also consists of the schedule analyzer, which determines which waiver-wire players to pick up for back-to-backs or high-volume weeks",
      linkUrl: "/projects/fantasy-basketball",
    },
    {
      title: "Clocks",
      mediaUrl: clocksImage,
      description:
        "The clocks project consists of a stopwatch, alarm, and a digital clock",
      linkUrl: "/projects/kronos",
    },
    {
      title: "Calculator",
      mediaUrl: calculatorImage,
      description:
        "The calculator project consists of a basic arithmetic calculator",
      linkUrl: "/projects/calculator",
    },
    {
      title: "Geography Game",
      mediaUrl: geographyGameImage,
      description: "Coming soon",
      linkUrl: "/projects/geography-game",
    },
  ];
  return (
    <>
      <div className="Projects-Page">
        <div className="Projects-Container">
          <div className="Projects-Title-Description-Container">
            <div className="Projects-Project-Title">
              {projectsData[currentProjectIndex].title}
            </div>
            <div className="Projects-Project-Description">
              {projectsData[currentProjectIndex].description}
            </div>
            {currentProjectIndex !== 0 && (
              <Button
                as={Link}
                to={projectsData[currentProjectIndex].linkUrl}
                className="Projects-Project-Button"
              >
                Go To Project
                <Icon name="arrow right" />
              </Button>
            )}
          </div>

          <div className="Projects-Images-Container">
            {projectsData.map((project, index) => (
              <div key={index}>
                {index > 0 &&
                  (index === 4 ? (
                    <div className="Projects-Image">
                      <img
                        className="Projects-Image-Disabled"
                        alt={project.description}
                        src={project.mediaUrl}
                      />
                      <div className="Projects-CS-Overlay">Coming Soon</div>
                    </div>
                  ) : (
                    <img
                      className="Projects-Image"
                      alt={project.description}
                      src={project.mediaUrl}
                      onClick={() => setCurrentProjectIndex(index)}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
