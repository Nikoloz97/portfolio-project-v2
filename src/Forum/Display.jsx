import React from "react";
import { Image, Button, Loader, Modal, Header } from "semantic-ui-react";
import { ForumErrorModal } from "../Utils/Error/Error";
import "./ForumPage.css";

const Display = (props) => {
  return (
    <>
      <div className="Display-Page">
        <Loader content="Loading" active={props.isLoading} />

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

          <ForumErrorModal
            isErrorModalDisplayed={props.isErrorModalDisplayed}
            closeErrorModalDisplay={() => props.setIsErrorModalDisplayed(false)}
            handleRetry={props.handleRetry}
          />
        </div>
      </div>
    </>
  );
};

export default Display;
