import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { apiUserRoot, apiImagesRoot } from "../Helpers";

const SignUp = () => {
  const [SignUpInfo, setSignUpInfo] = useState({
    Username: null,
    Password: null,
    Email: null,
    FirstName: null,
    LastName: null,
    ProfileURL: null,
    Bio: null,
  });

  const handleSignUp = () => {
    // Formdata = needed to save profileImage on backend
    let formData = new FormData();
    // formData.append("Username", SignUpInfo.Username);
    // formData.append("Password", SignUpInfo.Password);
    // formData.append("FirstName", SignUpInfo.Email);
    // formData.append("LastName", SignUpInfo.Email);
    formData.append("imageFile", SignUpInfo.ProfileURL);
    // formData.append("Email", SignUpInfo.Email);
    // formData.append("Bio", SignUpInfo.Bio);

    axios
      .post(apiImagesRoot + "/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Image uploaded:", response.data);
      });

    // axios
    //   .post(apiUserRoot, formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((response) => {
    //     setSignUpInfo({ ...SignUpInfo, ProfileURL: response.data.profileURL });
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error.message);
    //   });
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
                setSignUpInfo({ ...SignUpInfo, Username: e.target.value })
              }
            />
            <Form.Input
              fluid
              label="Password"
              placeholder="Password"
              onChange={(e) =>
                setSignUpInfo({ ...SignUpInfo, Password: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group widths="equal" style={{ marginTop: "10px" }}>
            <Form.Input
              fluid
              label="First name"
              placeholder="First name"
              onChange={(e) =>
                setSignUpInfo({ ...SignUpInfo, FirstName: e.target.value })
              }
            />
            <Form.Input
              fluid
              label="Last name"
              placeholder="Last name"
              onChange={(e) =>
                setSignUpInfo({ ...SignUpInfo, LastName: e.target.value })
              }
            />
          </Form.Group>

          <Form.Input
            fluid
            label="Email"
            placeholder="Your email"
            onChange={(e) =>
              setSignUpInfo({ ...SignUpInfo, Email: e.target.value })
            }
          />

          <Form.Field>
            <label>Profile Photo</label>
            <input
              type="file"
              onChange={(e) =>
                setSignUpInfo({
                  ...SignUpInfo,
                  ProfileURL: e.target.files[0],
                })
              }
            />
          </Form.Field>

          <Form.TextArea
            label="Bio"
            placeholder="Write a couple sentences about yourself..."
            onChange={(e) =>
              setSignUpInfo({ ...SignUpInfo, Bio: e.target.value })
            }
          />
          <Form.Button onClick={handleSignUp}>Submit</Form.Button>
        </Form>

        <p>Preview</p>
        <Image
          src={
            SignUpInfo.ProfileURL
              ? SignUpInfo.ProfileURL
              : "https://react.semantic-ui.com/images/wireframe/square-image.png"
          }
          size="medium"
          circular
        />
      </header>
    </>
  );
};

// "https://react.semantic-ui.com/images/wireframe/square-image.png"
export default SignUp;
