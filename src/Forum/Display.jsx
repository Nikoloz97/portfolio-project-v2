import React from "react";
import { Image, Button, Loader, Icon } from "semantic-ui-react";
import { useUserContext } from ".././UserContext";
import "./ForumPage.css";

const Display = (props) => {
  const { isDesktop } = useUserContext();

  return (
    <>
      <div className={`Display-Page ${isDesktop ? "" : "Phone"}`}>
        <Loader content="Loading" active={props.isLoading} />

        <Image
          src={require("../Images/ForumDisplay/Travel5.jpg")}
          centered
          hidden={false}
          className={`ForumPage-Display ${
            props.isDisplayToBeginFadein ? "Fade-In" : ""
          }`}
        />
        <div>
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
                    <Button
                      onClick={props.handleScrollDown}
                      className="ForumPage-Display-Button"
                    >
                      Join
                    </Button>
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
        </div>
      </div>
    </>
  );
};

export default Display;
