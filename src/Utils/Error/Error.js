import React, { useState } from "react";
import { Modal, Button } from "semantic-ui-react";
import "./Messages.css";

const [isErrorModalDisplayed, setIsErrorModalDisplayed] = useState(false);

export const ErrorModal = () => (
  <Modal open={isErrorModalDisplayed} centered size="fullscreen">
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
        onClick={() => setIsErrorModalDisplayed(false)}
        className="Error-Modal-Button"
        inverted
      />
      <Button
        content="Yes"
        onClick={handleRetry}
        className="Error-Modal-Button"
        inverted
      />
    </Modal.Actions>
  </Modal>
);
