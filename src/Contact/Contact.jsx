import React from "react";
import { Button, Form } from "semantic-ui-react";
import "../App.css";

const Contact = () => {
  const categoryOptions = [
    { key: 1, text: "Job Offer", value: "jobOffer" },
    { key: 2, text: "Project Collaboration", value: "projCollab" },
    { key: 3, text: "Site issue", value: "siteIssue" },
    { key: 4, text: "Other", value: "other" },
  ];

  return (
    <div className="Default-Page">
      <header>Welcome to the contact page</header>
      <Form className="Default-Form" style={{ width: "40%" }}>
        <Form.Group widths="equal" style={{ marginTop: "10px" }}>
          <Form.Input fluid label="First name" placeholder="First name" />
          <Form.Input fluid label="Last name" placeholder="Last name" />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Input fluid label="Email" placeholder="Your email" />
          <Form.Select fluid label="Category" options={categoryOptions} />
        </Form.Group>

        <Form.TextArea
          label="Description"
          placeholder="A few sentences would be appreciated..."
        />

        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
};

export default Contact;
