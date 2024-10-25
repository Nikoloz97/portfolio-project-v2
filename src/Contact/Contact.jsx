import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Header } from "semantic-ui-react";
import { useUserContext } from "../UserContext";
import { apiContactRoot } from "../Utils/ApiRoutes";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const [isDelivered, setIsDelivered] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isErrorInDelivery, setIsErrorInDelivery] = useState(false);
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
        if (response.status === 200) {
          setIsDelivered(true);
        } else {
          setIsErrorInDelivery(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
        setIsErrorInDelivery(true);
      });
  };

  useEffect(() => {
    let areAllFieldsFilled;
    if (isUserSignedIn) {
      const { FirstName, LastName, EmailAddress, ...requiredInfo } = emailInfo;
      areAllFieldsFilled = Object.values(requiredInfo).every(
        (value) => value !== null && value !== ""
      );
    } else {
      areAllFieldsFilled = Object.values(emailInfo).every(
        (value) => value !== null && value !== ""
      );
    }
    setIsSubmitDisabled(!areAllFieldsFilled);
  }, [emailInfo]);

  return (
    <div className="Contact-Page">
      {!isDelivered && (
        <Header style={{ color: "white" }}>Lets get in Contact</Header>
      )}

      {!isDelivered && !isErrorInDelivery ? (
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
            {!isUserSignedIn && (
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
            onChange={(e) =>
              setEmailInfo({ ...emailInfo, Body: e.target.value })
            }
          />

          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Form.Button
              disabled={isSubmitDisabled}
              className="Contact-Submit-Button"
            >
              Submit
            </Form.Button>
          </div>
        </Form>
      ) : isDelivered ? (
        <div className="Contact-Response-Container">
          <Header style={{ color: "white" }}>
            Your message was delivered, thanks!
          </Header>
          <Button
            as={Link}
            to="/"
            className="Login-Button"
            content="Back to Home"
          />
        </div>
      ) : (
        <div className="Contact-Response-Container">
          <Header style={{ color: "white" }}>
            There was an error in your message delivery, sorry
          </Header>
          <Button
            as={Link}
            to="/"
            className="Login-Button"
            content="Back to Home"
          />
        </div>
      )}
    </div>
  );
};

export default Contact;
