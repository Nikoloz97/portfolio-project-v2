import React from "react";
import { Image, Button, Loader } from "semantic-ui-react";
import { useUserContext } from ".././UserContext";
import "./ForumPage.css";

const Display = (props) => {
  const { isDesktop } = useUserContext();

  return (
    <>
      <div
        className={`Display-Page ${isDesktop ? "" : "Phone"}`}
        data-testid="Display"
        data-state={props.isDisplayToBeginFadein}
      >
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
        </div>
      </div>
    </>
  );
};

export default Display;
