import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [value, setValue] = useState({});

  const options = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
    { key: "o", text: "Other", value: "other" },
  ];

  const handleChange = (event) => {
    setValue(event.target.innerText);
  };

  return (
    <>
      <header className="Default-Page">
        <p>Welcome to the sign-up page</p>
        <p>Already a user?</p>
        <Button as={Link} to="/login">
          Log in
        </Button>

        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
            <Form.Select
              fluid
              label="Gender"
              options={options}
              placeholder="Gender"
            />
          </Form.Group>
          <Form.Group inline>
            <label>Size</label>
            <Form.Radio
              label="Small"
              value="sm"
              checked={value === "Small"}
              onChange={handleChange}
            />
            <Form.Radio
              label="Medium"
              value="md"
              checked={value === "Medium"}
              onChange={handleChange}
            />
            <Form.Radio
              label="Large"
              value="lg"
              checked={value === "Large"}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.TextArea
            label="About"
            placeholder="Tell us more about you..."
          />
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Button>Submit</Form.Button>
        </Form>
      </header>
    </>
  );
};

export default SignUp;
