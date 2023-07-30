import React from "react";
import { Menu, MenuItem, Button, Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useUserContext } from "./UserContext";

const Navbar = () => {
  const { user } = useUserContext();

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
              {user !== undefined && user !== null
                ? console.log(user)
                : "You are not logged in"}
            </Header>
          </MenuItem>
          <MenuItem>
            <Image
              src={
                user !== undefined && user !== null
                  ? user.profileURL
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
