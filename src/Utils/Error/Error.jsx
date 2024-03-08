import React from "react";
import { Modal, Button, Message } from "semantic-ui-react";
import "./Error.css";

export const ErrorModal = (props) => {
  return (
    <div>
      <Modal open={props.isErrorModalDisplayed} centered size="fullscreen">
        <div className="Error-Modal-Container">
          <h1 style={{ marginTop: "20px" }}>
            There was a problem fetching your data
          </h1>
          <div>
            <h2>Would you like to retry?</h2>
          </div>
          <div className="Error-Modal-Buttons-Container">
            <Button
              content="No"
              onClick={props.closeErrorModalDisplay}
              inverted
              style={{ marginRight: "30px" }}
            />
            <Button content="Yes" onClick={props.handleRetry} inverted />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export const UserErrorMessage = ({ error, onDismiss }) => {
  return (
    <>
      {error.isErrorShowing && (
        <Message
          className={`User-Error-Message ${
            error.isErrorShowing ? "User-Fade-In-Up" : "User-Fade-Out-Down"
          }`}
          size="tiny"
          onDismiss={onDismiss}
        >
          {error.errorTopic !== "" && (
            <Message.Header>{error.errorTopic}</Message.Header>
          )}

          <Message.Content>{error.errorMessage}</Message.Content>
          {console.log(error.errorMessage)}
        </Message>
      )}
    </>
  );
};
