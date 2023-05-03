import React from "react";
import { Outlet, Router } from "react-router-dom";

const Projects = () => {
  return (
    <div className="Default-Page">
      <header>
        <p>Welcome to my projects page</p>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Projects;
