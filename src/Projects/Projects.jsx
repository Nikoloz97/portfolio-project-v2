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
      title: "Clocks",
      mediaUrl: "../Images/Projects/Calc1.jpg",
      mediaCaption: "",
      linkUrl: "/projects/clocks",
    },
    {
      title: "Calculator",
      mediaUrl: "",
      mediaCaption: "",
      linkUrl: "/projects/calculator",
    },
    {
      title: "Geography Game",
      mediaUrl: "",
      mediaCaption: "",
      linkUrl: "/projects/geography-game",
    },
    {
      title: "Fantasy Basketball",
      mediaUrl: "",
      mediaCaption: "",
      linkUrl: "/projects/fantasy-basketball",
    },
  ]);

  const goToNextProject = () => {
    if (currentProjectIndex < projectsData.length - 1) {
      setCurrentProjectIndex(currentProjectIndex + 1);
    }
  };

  const goToPrevProject = () => {
    if (currentProjectIndex > 0) {
      setCurrentProjectIndex(currentProjectIndex - 1);
    }
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
