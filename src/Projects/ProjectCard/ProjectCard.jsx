import React from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div>
      {props.currentProjectIndex === 0 ? (
        <Card className="project-card">
          <Card.Header>{props.projectData.introText}</Card.Header>
          <Card.Description>{props.projectData.introSubtext}</Card.Description>
          <Card.Content extra>
            <Button className="project-left-arrow-button" disabled>
              <Icon name="arrow left" style={{ marginLeft: "-8px" }} />
            </Button>

            {props.projectData.linkUrls.map((link) => (
              <Button as={Link} to={link.url}>
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
        <Card className="project-card">
          <Card.Header>{props.projectData.title}</Card.Header>
          <Image src={props.projectData.mediaUrl} wrapped ui={false} />
          <Card.Description>{props.projectData.mediaCaption}</Card.Description>
          <Card.Content
            extra
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
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
