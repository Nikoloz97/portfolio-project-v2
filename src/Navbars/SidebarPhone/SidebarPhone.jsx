import React from "react";
import { Menu, MenuItem, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./SidebarPhone.css";

const SidebarPhone = (props) => {
  return (
    <div className="Navbar-Container">
      <Menu className="Navbar-Phone">
        <MenuItem as={Link} to="/" position="right">
          <Button onClick={props.toggleSidebarVisibility}>Home</Button>
        </MenuItem>
        <MenuItem as={Link} to="/blog" position="right">
          <Button onClick={props.toggleSidebarVisibility}>Blog</Button>
        </MenuItem>
        <MenuItem as={Link} to="/projects" position="right">
          <Button onClick={props.toggleSidebarVisibility}>Projects</Button>
        </MenuItem>
        <MenuItem as={Link} to="/forumPage" position="right">
          <Button onClick={props.toggleSidebarVisibility}>Forum</Button>
        </MenuItem>
        <MenuItem as={Link} to="/contact" position="right">
          <Button onClick={props.toggleSidebarVisibility}>Contact</Button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SidebarPhone;