import { React, useEffect, useRef, useState } from "react";
import Display from "./Display";
import Forum from "./Forum";
import { apiForumRoot } from "../Utils/ApiRoutes";
import { ForumErrorModal } from "../Utils/Error/Error";

import axios from "axios";
import "./ForumPage.css";

function ForumPage() {
  const forumRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isFetchSuccessful, setIsFetchSuccessful] = useState(null);
  const [isErrorModalDisplayed, setIsErrorModalDisplayed] = useState(false);
  const [isRetryingFetch, setIsRetryingFetch] = useState(false);
  const [renderForum, setRenderForum] = useState(false);
  const [forumProfileData, setForumProfileData] = useState(null);
  const [isDisplayToBeginFadein, setIsDisplayToBeginFadein] = useState(false);

  useEffect(() => {
    getForumProfiles();
  }, []);

  useEffect(() => {
    if (isRetryingFetch) {
      getForumProfiles();
      setIsRetryingFetch(false);
    }
  }, [isRetryingFetch]);

  const getForumProfiles = () => {
    setIsLoading(true);
    axios
      .get(apiForumRoot)
      .then((response) => {
        setForumProfileData(response.data);
        console.log(response);
        setTimeout(() => {
          setIsLoading(false);
        }, 200);
        setIsErrorModalDisplayed(false);
        setIsFetchSuccessful(true);
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
        setTimeout(() => {
          setIsLoading(false);
        }, 200);
        setIsFetchSuccessful(false);
      });
  };

  useEffect(() => {
    let errorTimeout;
    let fadeInTimeout;

    if (isFetchSuccessful !== null)
      fadeInTimeout = setTimeout(() => {
        setIsDisplayToBeginFadein(true);
      }, 400);

    if (isFetchSuccessful === false) {
      errorTimeout = setTimeout(() => {
        setIsErrorModalDisplayed(true);
      }, 600);
    }

    if (isFetchSuccessful) {
      setRenderForum(true);
    }

    return () => {
      clearTimeout(errorTimeout);
      clearTimeout(fadeInTimeout);
    };
  }, [isFetchSuccessful]);

  const handleScrollDown = () => {
    setTimeout(() => {
      forumRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleRetry = () => {
    setIsLoading(true);
    setIsErrorModalDisplayed(false);
    setIsRetryingFetch(true);
  };

  return (
    <>
      <Display
        isDisplayToBeginFadein={isDisplayToBeginFadein}
        isLoading={isLoading}
        handleScrollDown={handleScrollDown}
        handleRetry={handleRetry}
        isFetchSuccessful={isFetchSuccessful}
      />
      <ForumErrorModal
        isErrorModalDisplayed={isErrorModalDisplayed}
        closeErrorModalDisplay={() => setIsErrorModalDisplayed(false)}
        handleRetry={handleRetry}
      />
      <div ref={forumRef}>
        {renderForum && <Forum forumProfileData={forumProfileData} />}
      </div>
    </>
  );
}

export default ForumPage;
