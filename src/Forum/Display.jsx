import { React, useEffect, useRef, useState } from "react";
import { Image, Button, Loader, Modal, Header } from "semantic-ui-react";
import "./Forum.css";
import Forum from "./Forum";

function Display() {
  const forumRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isDisplayVisible, setIsDisplayVisible] = useState(false);
  const [isFetchSuccessful, setIsFetchSuccessful] = useState(null);
  const [isErrorModalDisplayed, setIsErrorModalDisplayed] = useState(false);
  // const [isRetryingFetch, setIsRetryingFetch] = useState(false);

  const handleScrollDown = () => {
    forumRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setIsDisplayVisible(true);
      }, 200);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isFetchSuccessful === false) {
      setTimeout(() => {
        setIsErrorModalDisplayed(true);
      }, 200);
    }
  }, [isFetchSuccessful]);

  return (
    <>
      <div>
        {/* Display-Page class = allows loading screen to have normal styling */}
        <div className="Display-Page">
          <Loader content="One second..." active={isLoading} />

          <Image
            src={require("../Images/ForumDisplay/Travel5.jpg")}
            centered
            hidden={isLoading}
            className={`fade-in-display ${isDisplayVisible ? "fade-in" : ""}`}
          />
          <div
          // className={isRetryingFetch ? "Hide-Display" : ""}
          >
            <div
              className={`fade-in-display ${isDisplayVisible ? "fade-in" : ""}`}
            >
              <div className="forum-display-text">Welcome to the Forum</div>
              <div className="forum-display-subtext">Express and Discuss</div>
              <Button
                onClick={handleScrollDown}
                className="forum-display-button"
                disabled={isFetchSuccessful === false}
              >
                Join
              </Button>
            </div>

            {/* TODO: Why isn't error modal being displayed?? */}
            {isErrorModalDisplayed === true ? (
              <Modal
              // onClose={() => setOpen(false)}
              // onOpen={() => setOpen(true)}
              // open={}
              >
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                  <Image
                    size="medium"
                    src="/images/avatar/large/rachel.png"
                    wrapped
                  />
                  <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>
                      We've found the following gravatar image associated with
                      your e-mail address.
                    </p>
                    <p>Is it okay to use this photo?</p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    color="black"
                    //  onClick={}
                  >
                    Nope
                  </Button>
                  <Button
                    content="Yep, that's me"
                    labelPosition="right"
                    icon="checkmark"
                    // onClick={() => setOpen(false)}
                    positive
                  />
                </Modal.Actions>
              </Modal>
            ) : null}
          </div>

          <div ref={forumRef}>
            <Forum
              setIsFetchSuccessful={setIsFetchSuccessful}
              setIsLoading={setIsLoading}
              // setIsDisplayVisible={setIsDisplayVisible}
              // handleScrollDown={handleScrollDown}
              // setIsRetryingFetch={setIsRetryingFetch}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;
