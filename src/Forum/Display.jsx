import React from "react";
import { Image, Button, Loader, Modal, Header } from "semantic-ui-react";
import "./ForumPage.css";

const Display = (props) => {
  return (
    <>
      <div>
        <Loader content="One second..." active={props.isLoading} />
        <Image
          src={require("../Images/ForumDisplay/Travel5.jpg")}
          centered
          hidden={props.isLoading}
          className={`ForumPage-Display-FadeIn ${
            props.isDisplayVisible ? "activate" : ""
          }`}
        />
        <div>
          <div
            className={`ForumPage-Display-FadeIn ${
              props.isDisplayVisible ? "activate" : ""
            }`}
          >
            <div className="ForumPage-Display-Text">Welcome to the Forum</div>
            <div className="ForumPage-Display-Subtext">Express and Discuss</div>
            <Button
              onClick={props.handleScrollDown}
              className="ForumPage-Display-Button"
              disabled={props.isFetchSuccessful === false}
            >
              Join
            </Button>
          </div>
          <Modal open={props.isErrorModalDisplayed} centered size="fullscreen">
            <Modal.Header className="Error-Modal">
              There was a problem fetching your data
            </Modal.Header>
            <Modal.Content className="Error-Modal">
              <Modal.Description className="Error-Modal">
                <Header className="Error-Modal">
                  Would you like to retry?
                </Header>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions className="Error-Modal">
              <Button
                content="No"
                onClick={() => props.setIsErrorModalDisplayed(false)}
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
      </div>
    </>
  );
};

export default Display;
