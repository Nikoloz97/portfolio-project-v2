import { React, useEffect, useState } from "react";
import { useUserContext } from "../UserContext";
import { Button, Loader, Icon } from "semantic-ui-react";
import ProfileCard from "./ProfileCard";
import { apiForumRoot } from "../Utils/ApiRoutes";
import UserProfileCard from "./UserProfileCard";
import PlaceholderCard from "./PlaceholderCard";
import axios from "axios";
import "./Forum.css";
import { Link } from "react-router-dom";

function Forum() {
  const { isDesktop, user, isUserSignedIn } = useUserContext();

  const [isLoading, setIsLoading] = useState(true);
  const [isFetchSuccessful, setIsFetchSuccessful] = useState(null);
  const [isRetryingFetch, setIsRetryingFetch] = useState(false);
  const [forumProfileData, setForumProfileData] = useState([]);
  const [userProfileData, setUserProfileData] = useState({});
  const [isDisplayToBeginFadein, setIsDisplayToBeginFadein] = useState(false);
  const [customLoadingMessage, setCustomLoadingMessage] = useState("Loading");

  useEffect(() => {
    if (isUserSignedIn) {
      getForumProfilesWithPostsExceptUser(user.userId);
      getUserProfile(user.userId);
    } else {
      getForumProfilesWithPosts();
    }
  }, []);

  useEffect(() => {
    if (isRetryingFetch && isUserSignedIn) {
      getForumProfilesWithPostsExceptUser(user.userId);
      getUserProfile(user.userId);
      setIsRetryingFetch(false);
    } else if (isRetryingFetch) {
      getForumProfilesWithPosts();
    }
  }, [isRetryingFetch]);

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

  const getForumProfilesWithPostsExceptUser = (userId) => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setCustomLoadingMessage(
        "Sorry, I chose the cheapest cloud option to store this data... Please explore a different tab while your content is getting ready"
      );
    }, 5000);
    axios
      .get(apiForumRoot + "/ForumProfilesWithPosts/" + userId)
      .then((response) => {
        setForumProfileData(response.data);
        clearTimeout(timeoutId);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsFetchSuccessful(false);
        clearTimeout(timeoutId);
      });
  };

  const getForumProfilesWithPosts = () => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setCustomLoadingMessage(
        "Sorry, I chose the cheapest cloud option to store this data... Please explore a different tab while your content is getting ready"
      );
    }, 5000);
    axios
      .get(apiForumRoot + "/ForumProfilesWithPosts")
      .then((response) => {
        setForumProfileData(response.data);
        setIsLoading(false);
        setIsFetchSuccessful(true);
        clearTimeout(timeoutId);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsFetchSuccessful(false);
        clearTimeout(timeoutId);
      });
  };

  const getUserProfile = (userId) => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setCustomLoadingMessage(
        "Sorry, I chose the cheapest cloud option to store this data... Please explore a different tab while your content is getting ready"
      );
    }, 5000);
    axios
      .get(apiForumRoot + "/UserProfile/" + userId)
      .then((response) => {
        setUserProfileData(response.data);
        setIsLoading(false);
        setIsFetchSuccessful(true);
        clearTimeout(timeoutId);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsFetchSuccessful(false);
        clearTimeout(timeoutId);
      });
  };

  const handleRetry = () => {
    setIsLoading(true);
    setIsRetryingFetch(true);
  };

  return (
    <div className="Loading-Display-Container">
      <Loader content={customLoadingMessage} active={isLoading} />
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
            <div className="ForumPage-Headers-Container-Container">
              {isFetchSuccessful ? (
                <div className="ForumPage-Headers-Container">
                  <div
                    className={`ForumPage-Display-Header ${
                      isDesktop ? "" : "Phone"
                    }`}
                  >
                    {isDesktop ? "Welcome to the Forum" : "Forum"}
                  </div>
                  <div
                    className={`ForumPage-Display-Subheader ${
                      isDesktop ? "" : "Phone"
                    }`}
                  >
                    Express and Discuss
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    className={`ForumPage-Display-Error-Text ${
                      isDesktop ? "Desktop" : "Phone"
                    }`}
                  >
                    Network Error :(
                  </div>
                  <div
                    className={`ForumPage-Display-Error-Subtext ${
                      isDesktop ? "Desktop" : "Phone"
                    }`}
                  >
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
          <div
            className={`${
              isDesktop ? "Forum-Grid-Desktop" : "Forum-Grid-Phone"
            }`}
          >
            {isFetchSuccessful &&
              (isUserSignedIn ? (
                userProfileData.postsCount > 0 ? (
                  <div>
                    <UserProfileCard userProfile={userProfileData} />
                  </div>
                ) : (
                  <PlaceholderCard
                    isUserSignedIn={true}
                    userProfile={userProfileData}
                  />
                )
              ) : isDesktop ? (
                <PlaceholderCard isUserSignedIn={false} />
              ) : (
                <div
                  style={{
                    zIndex: "1",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    color="black"
                    as={Link}
                    to="/login"
                    content="Login to Post"
                  />
                </div>
              ))}

            {forumProfileData.map((forumProfile) => (
              <ProfileCard
                forumProfile={forumProfile}
                key={forumProfile.forumProfileId}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum;
