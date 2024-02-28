import React, { useState, useEffect } from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [buttonIndexForInversion, setButtonIndexForInversion] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  });

  const handleNextProject = () => {
    if (props.currentProjectIndex < props.projectsDataLength - 1) {
      setIsLoaded(false);

      setTimeout(() => {
        props.goToNextProject();
        setIsLoaded(true);
      }, 200);
    }
  };

  const handlePrevProject = () => {
    if (props.currentProjectIndex <= props.projectsDataLength - 1) {
      setIsLoaded(false);

      setTimeout(() => {
        props.goToPrevProject();
        setIsLoaded(true);
      }, 200);
    }
  };

  return (
    <div>
      {/* Intro card */}
      {props.currentProjectIndex === 0 ? (
        <Card
          className={`${
            isLoaded
              ? "project-card project-card-loaded"
              : "project-card-preloaded"
          }`}
        >
          <Card.Header
            style={{ maxWidth: "70%", marginBottom: "10%", marginTop: "10%" }}
            textAlign="center"
          >
            {props.projectData.introText}
          </Card.Header>
          <Card.Description
            style={{
              maxWidth: "70%",
              fontSize: "1.2rem",
              opacity: "0.7",
            }}
            textAlign="center"
          >
            {props.projectData.introSubtext}
          </Card.Description>
          <Card.Content extra style={{ maxWidth: "70%" }} textAlign="center">
            <Button
              aria-label="Previous project"
              className="project-left-arrow-button"
              disabled={true}
            >
              <Icon name="arrow left" style={{ marginLeft: "-8px" }} />
            </Button>

            {props.projectData.linkUrls.map((link, index) => (
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
              disabled={
                props.currentProjectIndex === props.projectsDataLength - 1
                  ? true
                  : false
              }
              onClick={handleNextProject}
            >
              <Icon name="arrow right" style={{ marginLeft: "-7px" }} />
            </Button>
          </Card.Content>
        </Card>
      ) : (
        /* Project card */
        <Card
          className={`${
            isLoaded
              ? "project-card project-card-loaded"
              : "project-card-preloaded"
          }`}
        >
          <Card.Header
            style={{ maxWidth: "70%", marginBottom: "10%", marginTop: "10%" }}
            textAlign="center"
          >
            {props.projectData.title}
          </Card.Header>
          <Image
            style={{ maxWidth: "70%", marginBottom: "5%" }}
            src={require("../../Images/Projects/Calc1.jpg")}
            wrapped
            ui={false}
          />
          <Card.Description
            style={{ maxWidth: "70%", fontSize: "1.2rem", opacity: "0.7" }}
            textAlign="center"
          >
            {props.projectData.mediaCaption}
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
              className="project-left-arrow-button"
              onClick={handlePrevProject}
            >
              <Icon name="arrow left" style={{ marginLeft: "-8px" }} />
            </Button>
            <Button as={Link} to={props.projectData.linkUrl} inverted>
              Go to Project
            </Button>
            <Button
              aria-label="Next project"
              className="project-right-arrow-button"
              disabled={
                props.currentProjectIndex === props.projectsDataLength - 1
                  ? true
                  : false
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

export default ProjectCard;
