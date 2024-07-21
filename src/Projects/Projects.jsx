import React, { useState } from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [buttonIndexForInversion, setButtonIndexForInversion] = useState(null);

  const projectsData = [
    {
      introText: "Projects",
      introSubtext:
        "Select the arrow on the right to navigate to my various projects - or click on the links below",
      linkUrls: [
        { title: "Kronos", url: "/projects/kronos" },
        { title: "Calculator", url: "/projects/calculator" },
        { title: "Geography Game", url: "/projects/geography-game" },
        { title: "Fantasy Basketball", url: "/projects/fantasy-basketball" },
      ],
    },
    {
      title: "Kronos",
      mediaUrl: "../../Images/Projects/Kronos2.jpg",
      mediaCaption: "This is a description about the clocks project",
      linkUrl: "/projects/kronos",
    },
    {
      title: "Calculator",
      mediaUrl: "../../Images/Projects/Calc1.jpg",
      mediaCaption: "This is a description about the calculator project",
      linkUrl: "/projects/calculator",
    },
    {
      title: "Geography Game",
      mediaUrl: "../../Images/Projects/Globe1.jpg",
      mediaCaption: "This is a description about the geography game project",
      linkUrl: "/projects/geography-game",
    },
    {
      title: "Fantasy Basketball",
      mediaUrl: "../../Images/Projects/Nba1.jpg",
      mediaCaption:
        "This is a description about the fantasy basketball project",
      linkUrl: "/projects/fantasy-basketball",
    },
  ];

  const handleNextProject = () => {
    if (currentProjectIndex < projectsData.length - 1) {
      setCurrentProjectIndex(currentProjectIndex + 1);
    }
  };

  const handlePrevProject = () => {
    if (currentProjectIndex <= projectsData.length - 1) {
      setCurrentProjectIndex(currentProjectIndex - 1);
    }
  };

  return (
    <div className="Default-Page Projects">
      {/* Intro card */}
      {currentProjectIndex === 0 ? (
        <Card className="Project-Card">
          <Card.Header
            style={{ maxWidth: "70%", marginBottom: "10%", marginTop: "10%" }}
            textAlign="center"
          >
            {projectsData[currentProjectIndex].introText}
          </Card.Header>
          <Card.Description
            style={{
              maxWidth: "70%",
              fontSize: "1.2rem",
              opacity: "0.7",
            }}
            textAlign="center"
          >
            {projectsData[currentProjectIndex].introSubtext}
          </Card.Description>
          <Card.Content extra style={{ maxWidth: "70%" }} textAlign="center">
            <Button
              aria-label="Previous project"
              className="Project-Left-Arrow-Button"
              disabled={true}
            >
              <Icon name="arrow left" style={{ marginLeft: "-8px" }} />
            </Button>

            {projectsData[currentProjectIndex].linkUrls.map((link, index) => (
              <div
                onMouseEnter={() => setButtonIndexForInversion(index)}
                onMouseLeave={() => setButtonIndexForInversion(null)}
                key={index}
              >
                <Button
                  as={Link}
                  to={link.url}
                  style={{ marginBottom: "10%" }}
                  inverted={buttonIndexForInversion === index ? false : true}
                >
                  {link.title}
                </Button>
              </div>
            ))}

            <Button
              aria-label="Next project"
              className="Project-Right-Arrow-Button"
              disabled={
                currentProjectIndex === projectsData.length - 1 ? true : false
              }
              onClick={handleNextProject}
            >
              <Icon name="arrow right" style={{ marginLeft: "-7px" }} />
            </Button>
          </Card.Content>
        </Card>
      ) : (
        /* Project card */
        <Card className="Project-Card">
          <Card.Header
            style={{ maxWidth: "70%", marginBottom: "10%", marginTop: "10%" }}
            textAlign="center"
          >
            {projectsData[currentProjectIndex].title}
          </Card.Header>
          <Image
            style={{ maxWidth: "70%", marginBottom: "5%" }}
            src={require("../Images/Projects/Calc1.jpg")}
            wrapped
            ui={false}
          />
          <Card.Description
            style={{ maxWidth: "70%", fontSize: "1.2rem", opacity: "0.7" }}
            textAlign="center"
          >
            {projectsData[currentProjectIndex].mediaCaption}
          </Card.Description>
          <Card.Content
            extra
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "70%",
            }}
            textAlign="center"
          >
            <Button
              aria-label="Previous project"
              className="Project-Left-Arrow-Button"
              onClick={handlePrevProject}
            >
              <Icon name="arrow left" style={{ marginLeft: "-8px" }} />
            </Button>
            <Button
              as={Link}
              to={projectsData[currentProjectIndex].linkUrl}
              inverted
            >
              Go to Project
            </Button>
            <Button
              aria-label="Next project"
              className="Project-Right-Arrow-Button"
              disabled={
                currentProjectIndex === projectsData.length - 1 ? true : false
              }
              onClick={handleNextProject}
            >
              <Icon name="arrow right" style={{ marginLeft: "-7px" }} />
            </Button>
          </Card.Content>
        </Card>
      )}
    </div>
  );
};

export default Projects;
