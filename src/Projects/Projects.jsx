import React, { useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard.jsx";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const [projectsData, setProjectsData] = useState([
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
  ]);

  const goToNextProject = () => {
    setCurrentProjectIndex(currentProjectIndex + 1);
  };

  const goToPrevProject = () => {
    setCurrentProjectIndex(currentProjectIndex - 1);
  };

  return (
    <div className="Default-Page">
      <ProjectCard
        projectData={projectsData[currentProjectIndex]}
        projectsDataLength={projectsData.length}
        currentProjectIndex={currentProjectIndex}
        goToNextProject={goToNextProject}
        goToPrevProject={goToPrevProject}
      />
    </div>
  );
};

export default Projects;
