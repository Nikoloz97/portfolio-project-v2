import React from "react";
import { Menu, MenuItem, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./SidebarPhone.css";

const SidebarPhone = (props) => {
  return (
    <div
    // className="Sidebar-Container"
    >
      <Menu className="Sidebar-Phone">
        <MenuItem as={Link} to="/">
          <Button
            className="Sidebar-Button"
            onClick={props.toggleSidebarVisibility}
          >
            Home
          </Button>
        </MenuItem>
        <MenuItem as={Link} to="/blog">
          <Button
            className="Sidebar-Button"
            onClick={props.toggleSidebarVisibility}
          >
            Blog
          </Button>
        </MenuItem>
        <MenuItem as={Link} to="/projects">
          <Button
            className="Sidebar-Button"
            onClick={props.toggleSidebarVisibility}
          >
            Projects
          </Button>
        </MenuItem>
        <MenuItem as={Link} to="/forumPage">
          <Button
            className="Sidebar-Button"
            onClick={props.toggleSidebarVisibility}
          >
            Forum
          </Button>
        </MenuItem>
        <MenuItem as={Link} to="/contact">
          <Button
            className="Sidebar-Button"
            onClick={props.toggleSidebarVisibility}
          >
            Contact
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SidebarPhone;
