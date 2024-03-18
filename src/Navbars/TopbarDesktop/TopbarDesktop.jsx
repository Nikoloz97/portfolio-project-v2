import React, { useEffect, useState } from "react";
import { Menu, MenuItem, Button, Image, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../UserContext";
import "./TopbarDesktop.css";

const TopbarDesktop = () => {
  const { user, setUser, isMonitor } = useUserContext();

  const [selectionName, setSelectionName] = useState("Home");

  const handleButtonClick = (buttonName) => {
    setSelectionName(buttonName);
  };

  useEffect(() => {
    setSelectionName("Home");
  }, [user]);

  return (
    <div>
      <Menu className="Topbar-Desktop" id="Topbar-Desktop-Overrides">
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
          <MenuItem id="Topbar-Desktop-Hover-Override" as={Link} to="/">
            <Button
              className="Topbar-Desktop-Button"
              onClick={() => handleButtonClick("Home")}
            >
              Home
            </Button>
          </MenuItem>
          <MenuItem id="Topbar-Desktop-Hover-Override" as={Link} to="/blog">
            <Button
              className="Topbar-Desktop-Button"
              onClick={() => handleButtonClick("Blog")}
            >
              Blog
            </Button>
          </MenuItem>
          <MenuItem id="Topbar-Desktop-Hover-Override" as={Link} to="/projects">
            <Button
              className="Topbar-Desktop-Button"
              onClick={() => handleButtonClick("Projects")}
            >
              Projects
            </Button>
          </MenuItem>
          <MenuItem id="Topbar-Desktop-Hover-Override" as={Link} to="/forum">
            <Button
              className="Topbar-Desktop-Button"
              onClick={() => handleButtonClick("Forum")}
            >
              Forum
            </Button>
          </MenuItem>
          <MenuItem id="Topbar-Desktop-Hover-Override" as={Link} to="/contact">
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
            <div className="PreSignedIn-Container-Topbar">
              <MenuItem
                id="Topbar-Desktop-Hover-Override"
                as={Link}
                to="/login"
                onClick={() => handleButtonClick("Login")}
              >
                <Button className="Topbar-Desktop-Button" content="Login" />
              </MenuItem>
              <MenuItem
                id="Topbar-Desktop-Hover-Override"
                as={Link}
                to="/signup"
                onClick={() => handleButtonClick("Signup")}
              >
                <Button className="Topbar-Desktop-Button" content="Signup" />
              </MenuItem>
            </div>
          ) : (
            <div className="PostSignedIn-Container-Topbar">
              <MenuItem>
                <Button
                  content="Sign Out"
                  className="Topbar-Desktop-Button"
                  onClick={() => setUser(undefined)}
                />
              </MenuItem>
              <MenuItem>
                {user.profileURL ? (
                  <Button
                    className="Topbar-Desktop-Button"
                    onClick={() => handleButtonClick("UserProfile")}
                  >
                    <Image src={user.profileURL} avatar />
                  </Button>
                ) : (
                  <Button
                    className="Topbar-Desktop-Button-UserProfile"
                    onClick={() => handleButtonClick("UserProfile")}
                  >
                    <Icon
                      style={{ color: "white" }}
                      name="user circle"
                      size="big"
                    />
                  </Button>
                )}
              </MenuItem>
            </div>
          )}
        </Menu.Menu>
        <div
          className={`Topbar-Desktop-Selection-Bar ${
            isMonitor ? "Monitor" : "Desktop"
          } ${selectionName}`}
        />
      </Menu>
    </div>
  );
};

export default TopbarDesktop;
