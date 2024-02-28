import React from "react";
import { Modal, Button, Message, Header } from "semantic-ui-react";
import "./Error.css";

export const ForumErrorModal = (props) => {
  return (
    <div>
      <Modal open={props.isErrorModalDisplayed} centered size="fullscreen">
        <Modal.Header className="Error-Modal">
          There was a problem fetching your data
        </Modal.Header>
        <Modal.Content className="Error-Modal">
          <Modal.Description className="Error-Modal">
            <Header className="Error-Modal">Would you like to retry?</Header>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions className="Error-Modal">
          <Button
            content="No"
            onClick={props.closeErrorModalDisplay}
            className="Error-Modal-Button"
            inverted
          />
          <Button
            content="Yes"
            onClick={props.handleRetry}
            className="Error-Modal-Button"
            inverted
          />
        </Modal.Actions>
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
