import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { apiUserRoot } from "../Helpers";

const SignUp = () => {
  const [SignUpInfo, setSignUpInfo] = useState({
    Username: "",
    Password: "",
    Email: "",
    FirstName: "",
    LastName: "",
    ProfileURL: "",
    Bio: "",
  });

  const handleSignUp = () => {
    axios
      .post(apiUserRoot, SignUpInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <>
      <header className="Default-Page">
        <p>Welcome to the sign-up page</p>
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
            <Form.Input
              fluid
              label="First name"
              placeholder="First name"
              onChange={(e) =>
                setSignUpInfo({ ...SignUpInfo, firstName: e.target.value })
              }
            />
            <Form.Input
              fluid
              label="Last name"
              placeholder="Last name"
              onChange={(e) =>
                setSignUpInfo({ ...SignUpInfo, lastName: e.target.value })
              }
            />
          </Form.Group>

          <Form.Input
            fluid
            label="Email"
            placeholder="Your email"
            onChange={(e) =>
              setSignUpInfo({ ...SignUpInfo, email: e.target.value })
            }
          />

          <Form.TextArea
            label="Bio"
            placeholder="Write a couple sentences about yourself..."
            onChange={(e) =>
              setSignUpInfo({ ...SignUpInfo, bio: e.target.value })
            }
          />
          <Form.Button onClick={handleSignUp}>Submit</Form.Button>
        </Form>
      </header>
    </>
  );
};

export default SignUp;
