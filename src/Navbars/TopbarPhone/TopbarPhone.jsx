import React from "react";
import { Menu, MenuItem, Button, Icon, Image, Header } from "semantic-ui-react";
import { useUserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import "./TopbarPhone.css";

const TopbarPhone = (props) => {
  const { user } = useUserContext();

  return (
    <div>
      <Menu className="Topbar">
        <MenuItem>
          <Button
            icon
            onClick={props.toggleSidebarVisibility}
            style={{ width: "4rem" }}
          >
            <Icon name="bars"></Icon>
          </Button>
        </MenuItem>
        <Menu.Menu position="right">
          <MenuItem as={Link} to={user ? "/profilePage" : "/login"}>
            <Header className="Profile-Message" as="h5">
              {user !== undefined && user !== null
                ? `Welcome, ${user.firstName}`
                : "Log In / Sign Up Here"}
            </Header>

            <Image
              src={
                user !== undefined && user !== null && user.profileURL !== null
                  ? user.profileURL
                  : "https://react.semantic-ui.com/images/wireframe/square-image.png"
              }
              avatar
            />
          </MenuItem>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default TopbarPhone;
