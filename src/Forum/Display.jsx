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
  const [isRetryingFetch, setIsRetryingFetch] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setIsDisplayVisible(true);
      }, 200);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isDisplayVisible && isFetchSuccessful === false) {
      setTimeout(() => {
        setIsErrorModalDisplayed(true);
      }, 200);
    }
  }, [isDisplayVisible]);

  const handleScrollDown = () => {
    forumRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleRetry = () => {
    setIsDisplayVisible(false);
    setIsErrorModalDisplayed(false);
    setIsRetryingFetch(true);
  };

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
          <div>
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

            <Modal open={isErrorModalDisplayed} centered size="fullscreen">
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
          </div>

          <div ref={forumRef}>
            <Forum
              setIsFetchSuccessful={setIsFetchSuccessful}
              setIsLoading={setIsLoading}
              setIsErrorModalDisplayed={setIsErrorModalDisplayed}
              isRetryingFetch={isRetryingFetch}
              setIsRetryingFetch={setIsRetryingFetch}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;
