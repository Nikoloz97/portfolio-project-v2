import { React, useEffect, useRef, useState } from "react";
import Display from "./Display";
import Forum from "./Forum";
import { apiForumRoot } from "../Utils/ApiRoutes";

import axios from "axios";
import "./ForumPage.css";

function ForumPage() {
  const forumRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isFetchSuccessful, setIsFetchSuccessful] = useState(null);
  const [isRetryingFetch, setIsRetryingFetch] = useState(false);
  const [forumProfileData, setForumProfileData] = useState([]);
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
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
        setIsFetchSuccessful(true);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setIsFetchSuccessful(false);
      });
  };

  useEffect(() => {
    let fadeInTimeout;

    if (isFetchSuccessful !== null)
      fadeInTimeout = setTimeout(() => {
        setIsDisplayToBeginFadein(true);
      }, 200);

    return () => {
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
        forumProfileData={forumProfileData}
      />
    </>
  );
}

export default ForumPage;
