import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { apiUserRoot } from "../Helpers";

const SignUp = () => {
  const genderDropdownOptions = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
    { key: "o", text: "Other", value: "other" },
  ];

  const [SignUpInfo, setSignUpInfo] = useState({
    Username: "test42",
    Password: "test42",
    Email: "test",
    FirstName: "test",
    LastName: "test",
    ProfileURL: "test",
    Bio: "test",
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
            <Form.Select
              fluid
              label="Gender"
              options={genderDropdownOptions}
              placeholder="Gender"
              // onChange={(e, data) =>
              //   setSignUpInfo({ ...SignUpInfo, gender: data.value })
              // }
            />
            <Form.Input
              fluid
              label="Age"
              placeholder="Age"
              // onChange={(e) =>
              //   setSignUpInfo({ ...SignUpInfo, age: e.target.value })
              // }
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

          <label style={{ fontWeight: "bold" }}>Interests </label>
          <Form.Group inline style={{ marginTop: "10px" }}>
            <Form.Input
              placeholder="Interest one..."
              // onChange={(e) =>
              //   setSignUpInfo({
              //     ...SignUpInfo,
              //     interests: { ...SignUpInfo.interests, first: e.target.value },
              //   })
              // }
            />
            <Form.Input
              placeholder="Interest two..."
              // onChange={(e) =>
              //   setSignUpInfo({
              //     ...SignUpInfo,
              //     interests: {
              //       ...SignUpInfo.interests,
              //       second: e.target.value,
              //     },
              //   })
              // }
            />
            <Form.Input
              placeholder="Interest three..."
              // onChange={(e) =>
              //   setSignUpInfo({
              //     ...SignUpInfo,
              //     interests: { ...SignUpInfo.interests, third: e.target.value },
              //   })
              // }
            />
          </Form.Group>

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
