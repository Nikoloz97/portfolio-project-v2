import React, { useEffect, useState } from "react";
import { Header, Image, Form } from "semantic-ui-react";
import { apiUserRoot } from "../Utils/ApiRoutes";
import axios from "axios";
import "./User.css";

const ProfilePage = (props) => {
  const [userInfo, setUserInfo] = useState({
    Username: null,
    Email: null,
    FirstName: null,
    LastName: null,
    ProfileImageFile: null,
    Bio: null,
  });

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    // setIsLoading(true);
    axios
      .get(apiUserRoot)
      .then((response) => {
        console.log(response.data);
        setUserInfo(response.data);
        // setIsLoading(false);
        props.setIsFetchSuccessful(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // setIsLoading(false);
      });
  };

  return (
    <div className="Default-Page">
      <Header className="Profile-Page-Header">Edit Profile</Header>

      <Form.Field>
        <label>Profile Photo</label>
        <Image
          src={
            userInfo.ProfileImageFile
              ? userInfo.ProfileImageFile
              : "https://react.semantic-ui.com/images/wireframe/square-image.png"
          }
          size="medium"
          circular
        />
        <input
          type="file"
          onChange={(e) =>
            setUserInfo({
              ...userInfo,
              ProfileImageFile: e.target.files[0],
            })
          }
        />
      </Form.Field>

      <Form className="Default-Form">
        <Form.Group widths="equal" style={{ marginTop: "10px" }}>
          <Form.Input
            fluid
            label="Username"
            placeholder={userInfo.Username}
            onChange={(e) =>
              setUserInfo({ ...userInfo, Username: e.target.value })
            }
          />
          {/* Should changing password be its own special auth request? */}
          <Form.Input
            fluid
            label="Password"
            onChange={(e) =>
              setUserInfo({ ...userInfo, Password: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group widths="equal" style={{ marginTop: "10px" }}>
          <Form.Input
            fluid
            label="First name"
            placeholder={userInfo.FirstName}
            onChange={(e) =>
              setUserInfo({ ...userInfo, FirstName: e.target.value })
            }
          />
          <Form.Input
            fluid
            label="Last name"
            placeholder={userInfo.LastName}
            onChange={(e) =>
              setUserInfo({ ...userInfo, LastName: e.target.value })
            }
          />
        </Form.Group>

        <Form.Input
          fluid
          label="Email"
          placeholder={userInfo.LastName}
          onChange={(e) => setUserInfo({ ...userInfo, Email: e.target.value })}
        />

        <Form.TextArea
          label="Bio"
          placeholder={userInfo.Bio}
          onChange={(e) => setUserInfo({ ...userInfo, Bio: e.target.value })}
        />
        <Form.Button>Update Profile</Form.Button>
      </Form>
    </div>
  );
};

export default ProfilePage;
