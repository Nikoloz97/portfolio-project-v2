import React from "react";
import { Menu, MenuItem, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="Default-Page">
      <header>
        <p>Welcome to my projects page</p>
      </header>
      <div>
        <Menu className="Default-Page">
          <MenuItem as={Link} to="/projects/clocks">
            <Button>Clocks</Button>
          </MenuItem>
          <MenuItem as={Link} to="/projects/calculator">
            <Button>Calculator</Button>
          </MenuItem>
          <MenuItem as={Link} to="/projects/geography-game">
            <Button>Geography Game</Button>
          </MenuItem>
          <MenuItem as={Link} to="/projects/fantasy-basketball">
            <Button>Fantasy Basketball</Button>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Projects;
