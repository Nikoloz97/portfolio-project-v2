import React from "react";
import { Menu, MenuItem, Button } from "semantic-ui-react";
import "./App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="App">
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
    </div>
  );
};

export default Navbar;
