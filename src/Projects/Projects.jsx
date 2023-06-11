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
          <MenuItem as={Link} to="/projects/calculator">
            <Button>Calculator</Button>
          </MenuItem>
          <MenuItem as={Link} to="/projects/places-travelled">
            <Button>Places Travelled</Button>
          </MenuItem>
          <MenuItem as={Link} to="/projects/basketball/fantasyAnalyzer">
            <Button>Basketball fantasy analyzer</Button>
          </MenuItem>
          <MenuItem as={Link} to="/projects/clocks">
            <Button>Clocks</Button>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Projects;
