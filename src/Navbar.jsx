import React from "react";
import { Menu, MenuItem, Button, Image, Header } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { avatarUrl } = location.state || {};
  const { navbarMessage } = location.state || {};
  return (
    <div>
      <Menu className="Navbar">
        <MenuItem as={Link} to="/" position="right">
          <Button>Home</Button>
        </MenuItem>
        <MenuItem as={Link} to="/about" position="right">
          <Button>About</Button>
        </MenuItem>
        <MenuItem as={Link} to="/projects" position="right">
          <Button>Projects</Button>
        </MenuItem>
        <MenuItem as={Link} to="/forum" position="right">
          <Button>Forum</Button>
        </MenuItem>
        <MenuItem as={Link} to="/contact" position="right">
          <Button>Contact</Button>
        </MenuItem>
        <Menu.Menu position="right">
          <MenuItem as={Link} to="/login">
            <Header style={{ color: "white" }} as="h5">
              {}
            </Header>
          </MenuItem>
          <MenuItem>
            <Image
              src={
                avatarUrl !== undefined
                  ? avatarUrl
                  : "https://react.semantic-ui.com/images/wireframe/square-image.png"
              }
              as={Link}
              to="/login"
              avatar
            />
          </MenuItem>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Navbar;
