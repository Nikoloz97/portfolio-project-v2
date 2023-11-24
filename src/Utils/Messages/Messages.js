import React, { useState } from "react";
import { Message, Icon } from "semantic-ui-react";
import "./Messages.css";

const [isErrorModalDisplayed, setIsErrorModalDisplayed] = useState(false);

export const LoadingMessage = () => (
  <Message icon>
    <Icon name="circle notched" loading color="grey" />
    <Message.Content>
      <Message.Header>Just one second</Message.Header>
      We are fetching that content for you.
    </Message.Content>
  </Message>
);

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
