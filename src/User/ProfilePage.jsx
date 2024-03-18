import React, { useEffect, useState } from "react";
import { Image, Form, Checkbox } from "semantic-ui-react";
import { apiUserRoot } from "../Utils/ApiRoutes";
import { useUserContext } from "../UserContext";
import axios from "axios";
import "./User.css";
import Cookies from "js-cookie";

const ProfilePage = (props) => {
  const { user, isDefaultBlog, setIsDefaultBlog } = useUserContext();

  const [newUserInfo, setNewUserInfo] = useState({
    Username: null,
    Email: null,
    FirstName: null,
    LastName: null,
    ProfileImageFile: null,
    Bio: null,
  });

  // TODO: create user update (right now, just fetches all users)
  const updateUserData = () => {
    axios
      .get(apiUserRoot)
      .then((response) => {
        console.log(response.data);
        setNewUserInfo(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleLightModeToggle = () => {
    console.log("Test");
  };

  const handleBlogToggle = () => {
    setIsDefaultBlog(true);
    Cookies.set("defaultBlog", true);
  };

  const handleProjectsToggle = () => {
    console.log("Test");
  };

  return (
    <div className="Default-Page">
      <h1>User Settings</h1>

      <div className="User-Settings-Container">
        <div className="Edit-Profile-Container">
          <h2>Edit Profile</h2>
          <Form className="Default-Form">
            <Form.Field>
              <div style={{ display: "flex" }}>
                <label>Profile Photo</label>
                <Image
                  src={
                    newUserInfo.ProfileImageFile
                      ? newUserInfo.ProfileImageFile
                      : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                  }
                  size="tiny"
                  circular
                />
                <input
                  type="file"
                  onChange={(e) =>
                    setNewUserInfo({
                      ...newUserInfo,
                      ProfileImageFile: e.target.files[0],
                    })
                  }
                />
              </div>
            </Form.Field>
            <Form.Group widths="equal" style={{ marginTop: "10px" }}>
              <Form.Input
                fluid
                label="Username"
                placeholder={newUserInfo.Username}
                onChange={(e) =>
                  setNewUserInfo({ ...newUserInfo, Username: e.target.value })
                }
              />
              {/* Should changing password be its own special auth request? */}
              <Form.Input
                fluid
                label="Password"
                onChange={(e) =>
                  setNewUserInfo({ ...newUserInfo, Password: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group widths="equal" style={{ marginTop: "10px" }}>
              <Form.Input
                fluid
                label="First name"
                placeholder={newUserInfo.FirstName}
                onChange={(e) =>
                  setNewUserInfo({ ...newUserInfo, FirstName: e.target.value })
                }
              />
              <Form.Input
                fluid
                label="Last name"
                placeholder={newUserInfo.LastName}
                onChange={(e) =>
                  setNewUserInfo({ ...newUserInfo, LastName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Input
              fluid
              label="Email"
              placeholder={newUserInfo.LastName}
              onChange={(e) =>
                setNewUserInfo({ ...newUserInfo, Email: e.target.value })
              }
            />
            <Form.TextArea
              label="Bio"
              placeholder={newUserInfo.Bio}
              onChange={(e) =>
                setNewUserInfo({ ...newUserInfo, Bio: e.target.value })
              }
            />
            <Form.Button onClick={() => updateUserData(newUserInfo)}>
              Update Profile
            </Form.Button>
          </Form>
        </div>
        <div className="Header-Preferences-Container">
          <h2>Preferences</h2>
          <div className="Preferences-Container">
            <div className="Preferences-Checkbox-Label">
              <div>
                <Checkbox toggle onClick={handleLightModeToggle()} />
              </div>
              <p>Light Mode</p>
            </div>
            <div className="Preferences-Checkbox-Label">
              <div>
                <Checkbox toggle onClick={handleBlogToggle()} />
              </div>
              <p>Default to Blog </p>
            </div>
            <div className="Preferences-Checkbox-Label">
              <div>
                <Checkbox toggle onClick={handleProjectsToggle()} />
              </div>
              <p>Default to Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
