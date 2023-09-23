import React from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div>
      <Card className="project-card">
        <Card.Header>{props.projectData.title}</Card.Header>
        <Image src={props.projectData.mediaUrl} wrapped ui={false} />
        <Card.Description>{props.projectData.mediaCaption}</Card.Description>
        <Card.Content extra>
          <Button
            disabled={props.currentProjectIndex === 0 ? true : false}
            onClick={props.goToPrevProject}
            color="gray"
          >
            <Icon name="arrow left" style={{ marginRight: "10px" }} />
          </Button>
          <Button as={Link} to={props.projectData.linkUrl} color="gray">
            Go to Project
          </Button>
          <Button
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
    </div>
  );
};

export default ProjectCard;
