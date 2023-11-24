import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { apiUserRoot } from "../Utils/ApiRoutes";
import "./User.css";

const SignUp = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    Username: null,
    Password: null,
    Email: null,
    FirstName: null,
    LastName: null,
    ProfileImageFile: null,
    Bio: null,
  });

  const [profileImageUrl, setProfileImageUrl] = useState(null);

  const handleSignUp = () => {
    // Formdata = needed to save profileImage on backend
    let formData = new FormData();
    formData.append("Username", signUpInfo.Username);
    formData.append("Password", signUpInfo.Password);
    formData.append("Email", signUpInfo.Email);
    formData.append("FirstName", signUpInfo.FirstName);
    formData.append("LastName", signUpInfo.LastName);
    formData.append("Bio", signUpInfo.Bio);

    if (signUpInfo.ProfileImageFile) {
      formData.append("ProfileImageFile", signUpInfo.ProfileImageFile);
    }

    axios
      .post(apiUserRoot, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);

        setProfileImageUrl(response.data.profileURL);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <>
      <header className="Default-Page">
        <p>Already a user?</p>
        <Button as={Link} to="/login">
          Log in
        </Button>

        <Form className="Default-Form">
          <Form.Group widths="equal" style={{ marginTop: "10px" }}>
            <Form.Input
              fluid
              label="Username"
              placeholder="Username"
              onChange={(e) =>
                setSignUpInfo({ ...signUpInfo, Username: e.target.value })
              }
            />
            <Form.Input
              fluid
              label="Password"
              placeholder="Password"
              onChange={(e) =>
                setSignUpInfo({ ...signUpInfo, Password: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group widths="equal" style={{ marginTop: "10px" }}>
            <Form.Input
              fluid
              label="First name"
              placeholder="First name"
              onChange={(e) =>
                setSignUpInfo({ ...signUpInfo, FirstName: e.target.value })
              }
            />
            <Form.Input
              fluid
              label="Last name"
              placeholder="Last name"
              onChange={(e) =>
                setSignUpInfo({ ...signUpInfo, LastName: e.target.value })
              }
            />
          </Form.Group>

          <Form.Input
            fluid
            label="Email"
            placeholder="Your email"
            onChange={(e) =>
              setSignUpInfo({ ...signUpInfo, Email: e.target.value })
            }
          />

          <Form.Field>
            <label>Profile Photo</label>
            <input
              type="file"
              onChange={(e) =>
                setSignUpInfo({
                  ...signUpInfo,
                  ProfileImageFile: e.target.files[0],
                })
              }
            />
          </Form.Field>

          <Form.TextArea
            label="Bio"
            placeholder="Write a couple sentences about yourself..."
            onChange={(e) =>
              setSignUpInfo({ ...signUpInfo, Bio: e.target.value })
            }
          />
          <Form.Button onClick={handleSignUp}>Submit</Form.Button>
        </Form>

        <p>Preview</p>
        <Image
          src={
            profileImageUrl !== null
              ? profileImageUrl
              : "https://react.semantic-ui.com/images/wireframe/square-image.png"
          }
          size="medium"
          circular
        />
      </header>
    </>
  );
};

export default SignUp;
