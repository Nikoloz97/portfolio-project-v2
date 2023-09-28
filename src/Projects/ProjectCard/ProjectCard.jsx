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
            <Button className="project-left-arrow" disabled color="gray">
              <Icon name="arrow left" style={{ marginRight: "10px" }} />
            </Button>

            {props.projectData.linkUrls.map((link) => (
              <Button as={Link} to={link.url} color="gray">
                {link.title}
              </Button>
            ))}

            <Button
              className="project-right-arrow"
              disabled={
                props.currentProjectIndex === props.projectsDataLength - 1
                  ? true
                  : false
              }
              onClick={props.goToNextProject}
              color="gray"
            >
              <Icon name="arrow right" style={{ marginRight: "10px" }} />
            </Button>
          </Card.Content>
        </Card>
      ) : (
        <Card className="project-card">
          <Card.Header>{props.projectData.title}</Card.Header>
          <Image src={props.projectData.mediaUrl} wrapped ui={false} />
          <Card.Description>{props.projectData.mediaCaption}</Card.Description>
          <Card.Content extra>
            <Button
              className="project-left-arrow"
              onClick={props.goToPrevProject}
              color="gray"
            >
              <Icon name="arrow left" style={{ marginRight: "10px" }} />
            </Button>
            <Button as={Link} to={props.projectData.linkUrl} color="gray">
              Go to Project
            </Button>
            <Button
              className="project-right-arrow"
              disabled={
                props.currentProjectIndex === props.projectsDataLength - 1
                  ? true
                  : false
              }
              onClick={props.goToNextProject}
              color="gray"
            >
              <Icon name="arrow right" style={{ marginRight: "10px" }} />
            </Button>
          </Card.Content>
        </Card>
      )}
    </div>
  );
};

export default ProjectCard;
