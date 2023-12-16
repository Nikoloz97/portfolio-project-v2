import React from "react";
import { Menu, MenuItem, Button, Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../UserContext";
import "./Navbar.css";

const Navbar = (props) => {
  const { user, isDesktop } = useUserContext();

  return (
    <div className={isDesktop ? "" : "Navbar-Container"}>
      <Menu className={isDesktop ? "Navbar-Desktop" : "Navbar-Phone"}>
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

        {isDesktop && (
          <Menu.Menu position="right">
            <MenuItem as={Link} to={user ? "/profilePage" : "/login"}>
              <Header className="Profile-Message" as="h5">
                {user !== undefined && user !== null
                  ? `Welcome, ${user.firstName}`
                  : "Log In / Sign Up Here"}
              </Header>

              <Image
                src={
                  user !== undefined &&
                  user !== null &&
                  user.profileURL !== null
                    ? user.profileURL
                    : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
                avatar
              />
            </MenuItem>
          </Menu.Menu>
        )}
      </Menu>
    </div>
  );
};

export default Navbar;
