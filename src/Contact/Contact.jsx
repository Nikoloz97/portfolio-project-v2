import React from "react";
// import { Form } from "semantic-ui-react";
import { useUserContext } from "../UserContext";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const { isUserSignedIn } = useUserContext();
  const [state, handleSubmit] = useForm("myyqwvpa");

  const categoryOptions = [
    { key: 1, text: "Job Offer", value: "jobOffer" },
    { key: 2, text: "Project Collaboration", value: "projCollab" },
    { key: 3, text: "Report site issue", value: "siteIssue" },
    { key: 4, text: "Other", value: "other" },
  ];

  return (
    <div className="Default-Page">
      <header>Welcome to the contact page</header>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>

      {/* <Form
        onSubmit={handleSubmit}
        className="Default-Form"
        style={{ width: "40%" }}
      >
        {isUserSignedIn ? null : (
          <div>
            <Form.Group widths="equal" style={{ marginTop: "10px" }}>
              <Form.Input fluid label="First name" placeholder="First name" />
              <Form.Input fluid label="Last name" placeholder="Last name" />
            </Form.Group>
          </div>
        )}

        <Form.Group widths="equal">
          {isUserSignedIn ? null : (
            <Form.Input fluid label="Email" placeholder="Your email" />
          )}
          <Form.Select fluid label="Category" options={categoryOptions} />
        </Form.Group>

        <Form.TextArea
          label="Description"
          placeholder="A few sentences would be appreciated..."
        />

        <Form.Button disabled={state.submitting}>Submit</Form.Button>
      </Form> */}
    </div>
  );
};

export default Contact;
