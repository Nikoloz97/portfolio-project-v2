import React from "react";
import { Menu, MenuItem, Button, Icon, Image, Header } from "semantic-ui-react";
import { useUserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import "./TopbarPhone.css";

const TopbarPhone = (props) => {
  const { user } = useUserContext();

  return (
    <div>
      <Menu className="Topbar-Phone">
        <MenuItem>
          <Button
            icon
            onClick={props.toggleSidebarVisibility}
            className="Topbar-Phone-Hamburger-Menu"
            style={{ width: "4rem" }}
          >
            <Icon name="bars"></Icon>
          </Button>
        </MenuItem>

        <Menu.Menu position="left">
          <MenuItem>
            <Image
              src={require("../../Images/Logo/Borjgali_White.png")}
              style={{ height: "2rem" }}
            />
          </MenuItem>
          <MenuItem as={Link} to="/">
            <Header className="Topbar-Desktop-Logo-Text">
              Nick's Portfolio
            </Header>
          </MenuItem>
        </Menu.Menu>

        <Menu.Menu position="right">
          {user == undefined && user == null ? (
            <div style={{ display: "flex" }}>
              <MenuItem as={Link} to="/login">
                <Button className="Topbar-Phone-User-Buttons" content="Login" />
              </MenuItem>
            </div>
          ) : (
            <Image src={user.profileURL} avatar />
          )}
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default TopbarPhone;
