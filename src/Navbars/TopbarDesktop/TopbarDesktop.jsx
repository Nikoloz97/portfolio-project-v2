import React, { useState } from "react";
import { Menu, MenuItem, Button, Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../UserContext";
import "./TopbarDesktop.css";

const TopbarDesktop = () => {
  const { user } = useUserContext();

  const [selectionName, setSelectionName] = useState("Home");

  const handleButtonClick = (buttonName) => {
    setSelectionName(buttonName);
  };

  return (
    <div>
      <Menu className="Topbar-Desktop" id="Topbar-Bottom-Border">
        <Menu.Menu position="left">
          <MenuItem>
            <Image
              src={require("../../Images/Logo/Borjgali_White.png")}
              style={{ height: "2rem" }}
            />
          </MenuItem>
          <MenuItem>
            <Header className="Topbar-Desktop-Logo-Text">
              Nick's Portfolio
            </Header>
          </MenuItem>
        </Menu.Menu>

        <Menu.Menu className="Topbar-Desktop-Options">
          <MenuItem as={Link} to="/">
            <Button
              className="Topbar-Desktop-Button"
              onClick={() => handleButtonClick("Home")}
            >
              Home
            </Button>
          </MenuItem>
          <MenuItem as={Link} to="/blog">
            <Button
              className="Topbar-Desktop-Button"
              onClick={() => handleButtonClick("Blog")}
            >
              Blog
            </Button>
          </MenuItem>
          <MenuItem as={Link} to="/projects">
            <Button
              className="Topbar-Desktop-Button"
              onClick={() => handleButtonClick("Projects")}
            >
              Projects
            </Button>
          </MenuItem>
          <MenuItem as={Link} to="/forumPage">
            <Button
              className="Topbar-Desktop-Button"
              onClick={() => handleButtonClick("Forum")}
            >
              Forum
            </Button>
          </MenuItem>
          <MenuItem as={Link} to="/contact">
            <Button
              className="Topbar-Desktop-Button"
              onClick={() => handleButtonClick("Contact")}
            >
              Contact
            </Button>
          </MenuItem>
        </Menu.Menu>

        <Menu.Menu position="right">
          {user == undefined && user == null ? (
            <div style={{ display: "flex" }}>
              <MenuItem
                as={Link}
                to="/login"
                onClick={() => handleButtonClick("Login")}
              >
                <Button className="Topbar-Desktop-Button" content="Login" />
              </MenuItem>
              <MenuItem
                as={Link}
                to="/signup"
                onClick={() => handleButtonClick("Signup")}
              >
                <Button className="Topbar-Desktop-Button" content="Signup" />
              </MenuItem>
            </div>
          ) : (
            <Image src={user.profileURL} avatar />
          )}
        </Menu.Menu>
        <div className={`Topbar-Desktop-Selection-Bar ${selectionName}`} />
      </Menu>
    </div>
  );
};

export default TopbarDesktop;
