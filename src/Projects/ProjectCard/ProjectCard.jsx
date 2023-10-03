import React from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import clock from "../../Images/Projects/Calc1.jpg";

const ProjectCard = (props) => {
  return (
    <div>
      {/* Intro card */}
      {props.currentProjectIndex === 0 ? (
        <Card className="project-card">
          <Card.Header
            style={{ maxWidth: "70%", marginBottom: "10%", marginTop: "10%" }}
            textAlign="center"
          >
            {props.projectData.introText}
          </Card.Header>
          <Card.Description
            style={{ maxWidth: "70%", fontSize: "1.2rem" }}
            textAlign="center"
          >
            {props.projectData.introSubtext}
          </Card.Description>
          <Card.Content extra style={{ maxWidth: "70%" }} textAlign="center">
            <Button className="project-left-arrow-button" disabled>
              <Icon name="arrow left" style={{ marginLeft: "-8px" }} />
            </Button>

            {props.projectData.linkUrls.map((link, index) => (
              <Button
                as={Link}
                to={link.url}
                key={index}
                style={{ marginBottom: "10%" }}
              >
                {link.title}
              </Button>
            ))}

            <Button
              className="project-right-arrow-button"
              disabled={
                props.currentProjectIndex === props.projectsDataLength - 1
                  ? true
                  : false
              }
              onClick={props.goToNextProject}
            >
              <Icon name="arrow right" style={{ marginLeft: "-7px" }} />
            </Button>
          </Card.Content>
        </Card>
      ) : (
        /* Project card */
        <Card className="project-card">
          <Card.Header
            style={{ maxWidth: "70%", marginBottom: "10%", marginTop: "10%" }}
            textAlign="center"
          >
            {props.projectData.title}
          </Card.Header>
          <Image
            style={{ maxWidth: "70%" }}
            src={require(props.projectData.mediaUrl)}
            wrapped
            ui={false}
          />
          <Card.Description style={{ maxWidth: "70%" }} textAlign="center">
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
              className="project-left-arrow-button"
              onClick={props.goToPrevProject}
            >
              <Icon name="arrow left" style={{ marginLeft: "-8px" }} />
            </Button>
            <Button as={Link} to={props.projectData.linkUrl}>
              Go to Project
            </Button>
            <Button
              className="project-right-arrow-button"
              disabled={
                props.currentProjectIndex === props.projectsDataLength - 1
                  ? true
                  : false
              }
              onClick={props.goToNextProject}
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
