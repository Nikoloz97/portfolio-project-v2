import React from "react";
import { Menu, MenuItem, Button } from "semantic-ui-react";
import Calculator from "./Calculator";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <div className="Default-Page">
      <header>
        <p>Welcome to my projects page</p>
      </header>
      <div>
        {/* TODO: Fix outlet issue (not working) */}
        {/* <Outlet /> */}

        <Menu className="Default-Page">
          <MenuItem as={Link} to="/projects/calculator">
            <Button>Calculator</Button>
          </MenuItem>
          <MenuItem as={Link} to="/projects/places-travelled">
            <Button>Places Travelled</Button>
          </MenuItem>
          <MenuItem as={Link} to="/projects/pdf-converted">
            <Button>PDF Converter</Button>
          </MenuItem>
          <MenuItem as={Link} to="/projects/clocks">
            <Button>Clocks</Button>
          </MenuItem>
        </Menu>

        {/* This works... */}
        {/* <Calculator /> */}
      </div>
    </div>
  );
};

export default Projects;
