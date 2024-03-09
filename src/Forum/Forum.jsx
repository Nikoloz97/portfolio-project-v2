import { React, useEffect, useState } from "react";
import { useUserContext } from "../UserContext";
import { Button, Loader, Icon } from "semantic-ui-react";
import ProfileCard from "./ProfileCard";
import { apiForumRoot } from "../Utils/ApiRoutes";
import axios from "axios";
import "./Forum.css";

function Forum() {
  const { isDesktop } = useUserContext();

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

  const handleRetry = () => {
    setIsLoading(true);
    setIsRetryingFetch(true);
  };

  return (
    <div className="Loading-Display-Container">
      <Loader content="Loading" active={isLoading} />
      <div
        className={`Display-Page ${isDesktop ? "" : "Phone"} ${
          isDisplayToBeginFadein ? "Fade-In" : ""
        }`}
      >
        <div
          className={`ForumPage-Display ${
            isDisplayToBeginFadein ? "Fade-In" : ""
          }`}
        >
          {!isLoading && (
            <div>
              {isFetchSuccessful ? (
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
                    onClick={handleRetry}
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
        <div className="Forum-Container">
          {forumProfileData.map((forumProfile) => (
            <ProfileCard
              forumProfile={forumProfile}
              key={forumProfile.forumProfileId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forum;
