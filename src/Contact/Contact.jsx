import React, { useState } from "react";
import axios from "axios";
import { Form } from "semantic-ui-react";
import { useUserContext } from "../UserContext";
import { apiContactRoot } from "../Utils/ApiRoutes";
import "./Contact.css";

const Contact = () => {
  const { isUserSignedIn, isDesktop } = useUserContext();

  const subjectOptions = [
    { key: 1, text: "Job Offer", value: "jobOffer" },
    { key: 2, text: "Project Collaboration", value: "projCollab" },
    { key: 3, text: "Report site issue", value: "siteIssue" },
    { key: 4, text: "Other", value: "other" },
  ];

  const [emailInfo, setEmailInfo] = useState({
    FirstName: null,
    LastName: null,
    EmailAddress: null,
    Subject: null,
    Body: null,
  });

  const handleContactSubmit = () => {
    // Formdata = needed to save profileImage on backend
    let formData = new FormData();
    formData.append("FirstName", emailInfo.FirstName);
    formData.append("LastName", emailInfo.LastName);
    formData.append("EmailAddress", emailInfo.EmailAddress);
    formData.append("Subject", emailInfo.Subject);
    formData.append("Body", emailInfo.Body);

    axios
      .post(apiContactRoot, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <div className="Contact-Page">
      <header>Lets get in Contact</header>

      <Form
        onSubmit={handleContactSubmit}
        className="Contact-Form"
        style={{ width: isDesktop ? "40%" : "80%" }}
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
            label="Subject"
            options={subjectOptions}
            onChange={(e, { value }) =>
              setEmailInfo({ ...emailInfo, Subject: value })
            }
          />
        </Form.Group>

        <Form.TextArea
          label="Body"
          placeholder="A few sentences would be appreciated..."
          onChange={(e) => setEmailInfo({ ...emailInfo, Body: e.target.value })}
        />

        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Form.Button>Submit</Form.Button>
        </div>
      </Form>
    </div>
  );
};

export default Contact;
