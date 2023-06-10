import React from "react";
import { Menu, MenuItem, Button } from "semantic-ui-react";
import "./App.css";
import { Link, BrowserRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu className="Navbar">
          <MenuItem as={Link} to="/">
            <Button>Home</Button>
          </MenuItem>
          <MenuItem as={Link} to="/about">
            <Button>About</Button>
          </MenuItem>
          <MenuItem as={Link} to="/projects">
            <Button>Projects</Button>
          </MenuItem>
          <MenuItem as={Link} to="/forum">
            <Button>Forum</Button>
          </MenuItem>
          <MenuItem as={Link} to="/contact">
            <Button>Contact</Button>
          </MenuItem>
        </Menu>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
