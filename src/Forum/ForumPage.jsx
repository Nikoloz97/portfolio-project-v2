import { React, useEffect, useRef, useState } from "react";
import Display from "./Display";
import Forum from "./Forum";
import "./ForumPage.css";

function ForumPage() {
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
      <Display
        isLoading={isLoading}
        isDisplayVisible={isDisplayVisible}
        isFetchSuccessful={isFetchSuccessful}
        isErrorModalDisplayed={isErrorModalDisplayed}
        setIsErrorModalDisplayed={setIsErrorModalDisplayed}
        handleScrollDown={handleScrollDown}
        handleRetry={handleRetry}
      />

      <div ref={forumRef}>
        <Forum
          setIsFetchSuccessful={setIsFetchSuccessful}
          setIsLoading={setIsLoading}
          setIsErrorModalDisplayed={setIsErrorModalDisplayed}
          isRetryingFetch={isRetryingFetch}
          setIsRetryingFetch={setIsRetryingFetch}
        />
      </div>
    </>
  );
}

export default ForumPage;
