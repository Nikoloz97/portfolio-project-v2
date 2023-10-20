import React, { useState } from "react";
import axios from "axios";
import { Form } from "semantic-ui-react";
import { useUserContext } from "../UserContext";
import { apiContactRoot } from "../Helpers";

const Contact = () => {
  const { isUserSignedIn } = useUserContext();

  const categoryOptions = [
    { key: 1, text: "Job Offer", value: "jobOffer" },
    { key: 2, text: "Project Collaboration", value: "projCollab" },
    { key: 3, text: "Report site issue", value: "siteIssue" },
    { key: 4, text: "Other", value: "other" },
  ];

  const [emailInfo, setEmailInfo] = useState({
    FirstName: null,
    LastName: null,
    EmailAddress: null,
    Category: null,
    Subject: null,
    Body: null,
  });

  const handleContactSubmit = () => {
    // Formdata = needed to save profileImage on backend
    let formData = new FormData();
    formData.append("FirstName", emailInfo.FirstName);
    formData.append("LastName", emailInfo.LastName);
    formData.append("EmailAddress", emailInfo.EmailAddress);
    formData.append("Category", emailInfo.Category);
    formData.append("Subject", emailInfo.Subject);
    formData.append("Body", emailInfo.Body);

    axios
      .post(apiContactRoot, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // TODO: Remove console log at a certain point
        console.log(response);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <div className="Default-Page">
      <header>Welcome to the contact page</header>

      <Form
        onSubmit={handleContactSubmit}
        className="Default-Form"
        style={{ width: "40%" }}
      >
        {/* Require firstName/lastName if user isn't signed in */}
        {isUserSignedIn ? null : (
          <div>
            <Form.Group widths="equal" style={{ marginTop: "10px" }}>
              <Form.Input
                fluid
                label="First name"
                placeholder="First name"
                onChange={(e) =>
                  setEmailInfo({ ...emailInfo, FirstName: e.target.value })
                }
              />
              <Form.Input
                fluid
                label="Last name"
                placeholder="Last name"
                onChange={(e) =>
                  setEmailInfo({ ...emailInfo, LastName: e.target.value })
                }
              />
            </Form.Group>
          </div>
        )}

        <Form.Group widths="equal">
          {isUserSignedIn ? null : (
            <Form.Input
              fluid
              label="Email"
              placeholder="Your email"
              onChange={(e) =>
                setEmailInfo({ ...emailInfo, EmailAddress: e.target.value })
              }
            />
          )}
          <Form.Select
            fluid
            label="Category"
            options={categoryOptions}
            onChange={(e, { value }) =>
              setEmailInfo({ ...emailInfo, Category: value })
            }
          />
        </Form.Group>

        <Form.Input
          label="Subject"
          placeholder="Subject"
          onChange={(e) =>
            setEmailInfo({ ...emailInfo, Subject: e.target.value })
          }
        />

        <Form.TextArea
          label="Description"
          placeholder="A few sentences would be appreciated..."
          onChange={(e) => setEmailInfo({ ...emailInfo, Body: e.target.value })}
        />

        {/* TODO: Fix disabled logic*/}
        <Form.Button disabled={false}>Submit</Form.Button>
      </Form>
    </div>
  );
};

export default Contact;
