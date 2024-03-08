import React from "react";
import { Button, Loader, Icon } from "semantic-ui-react";
import { useUserContext } from ".././UserContext";
import Forum from "./Forum";
import "./ForumPage.css";

const Display = (props) => {
  const { isDesktop } = useUserContext();

  return (
    <div className="Loading-Display-Container">
      <Loader content="Loading" active={props.isLoading} />
      <div
        className={`Display-Page ${isDesktop ? "" : "Phone"} ${
          props.isDisplayToBeginFadein ? "Fade-In" : ""
        }`}
      >
        <div
          className={`ForumPage-Display ${
            props.isDisplayToBeginFadein ? "Fade-In" : ""
          }`}
        >
          {!props.isLoading && (
            <div>
              {props.isFetchSuccessful ? (
                <div>
                  <div className="ForumPage-Display-Text">
                    Welcome to the Forum
                  </div>
                  <div className="ForumPage-Display-Subtext">
                    Express and Discuss
                  </div>
                </div>
              ) : (
                <div>
                  <div className="ForumPage-Display-Error-Text">
                    Network Error :(
                  </div>
                  <div className="ForumPage-Display-Error-Subtext">
                    Please Try Again
                  </div>
                  <Button
                    onClick={props.handleRetry}
                    className="ForumPage-Error-Button"
                  >
                    <Icon name="redo" />
                    Retry
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
        <Forum forumProfileData={props.forumProfileData} />
      </div>
    </div>
  );
};

export default Display;
