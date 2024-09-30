import React, { useState } from "react";
import "./Projects.css";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import fantasyBballImage from "../Images/Projects/Nba1.jpg";
import clocksImage from "../Images/Projects/Kronos2.jpg";
import calculatorImage from "../Images/Projects/Calc1.jpg";
import geographyGameImage from "../Images/Projects/Globe1.jpg";

const ProjectsV2 = (props) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projectsData = [
    {
      title: "Mini Projects",
      mediaUrl: null,
      description: "Click on the projects to the right to get a description",
      linkUrl: null,
    },
    {
      title: "Fantasy Basketball",
      mediaUrl: fantasyBballImage,
      description: "This is a description about the fantasy basketball project",
      linkUrl: "/projects/fantasy-basketball",
    },
    {
      title: "Clocks",
      mediaUrl: clocksImage,
      description: "This is a description about the clocks project",
      linkUrl: "/projects/kronos",
    },
    {
      title: "Calculator",
      mediaUrl: calculatorImage,
      description: "This is a description about the calculator project",
      linkUrl: "/projects/calculator",
    },
    {
      title: "Geography Game",
      mediaUrl: geographyGameImage,
      description: "This is a description about the geography game project",
      linkUrl: "/projects/geography-game",
    },
  ];
  return (
    <>
      <div className="Projects2-Page">
        <div className="Projects2-Container">
          <div className="Projects2-Title-Description-Container">
            <div className="Projects2-Title">Mini Projects</div>
            <div className="Projects2-Project-Title">
              {projectsData[currentProjectIndex].title}
            </div>
            <div className="Projects2-Project-Description">
              {projectsData[currentProjectIndex].description}
            </div>
            <Button
              as={Link}
              to={projectsData[currentProjectIndex].linkUrl}
              className="Projects2-Project-Button"
            >
              Go To Project
              <Icon name="arrow right" />
            </Button>
          </div>

          <div className="Projects2-Images-Container">
            {projectsData.map((project, index) => (
              <div>
                {index > 0 && (
                  <img
                    key={index}
                    alt={project.description}
                    src={project.mediaUrl}
                    className="Projects2-Image"
                    onClick={() => setCurrentProjectIndex(index)}
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

export default ProjectsV2;
