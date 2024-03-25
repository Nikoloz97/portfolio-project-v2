import { React, useEffect, useState } from "react";
import { useUserContext } from "../UserContext";
import { Button, Loader, Icon } from "semantic-ui-react";
import ProfileCard from "./ProfileCard";
import { apiForumRoot } from "../Utils/ApiRoutes";
import UserProfileCard from "./UserProfileCard";
import PlaceholderCard from "./PlaceholderCard";
import axios from "axios";
import "./Forum.css";

function Forum() {
  const { isDesktop, user, isUserSignedIn } = useUserContext();

  const [isLoading, setIsLoading] = useState(true);
  const [isFetchSuccessful, setIsFetchSuccessful] = useState(null);
  const [isRetryingFetch, setIsRetryingFetch] = useState(false);
  const [forumProfileData, setForumProfileData] = useState([]);
  const [userProfileData, setUserProfileData] = useState({});
  const [isDisplayToBeginFadein, setIsDisplayToBeginFadein] = useState(false);

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
    axios
      .get(apiForumRoot + "/ForumProfilesWithPosts/" + userId)
      .then((response) => {
        setForumProfileData(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsFetchSuccessful(false);
      });
  };

  const getForumProfilesWithPosts = () => {
    setIsLoading(true);
    axios
      .get(apiForumRoot + "/ForumProfilesWithPosts")
      .then((response) => {
        setForumProfileData(response.data);
        setIsLoading(false);
        setIsFetchSuccessful(true);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsFetchSuccessful(false);
      });
  };

  const getUserProfile = (userId) => {
    setIsLoading(true);
    axios
      .get(apiForumRoot + "/UserProfile/" + userId)
      .then((response) => {
        setUserProfileData(response.data);
        setIsLoading(false);
        setIsFetchSuccessful(true);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsFetchSuccessful(false);
      });
  };

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
          <div className="Forum-Grid">
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
              ) : (
                <PlaceholderCard isUserSignedIn={false} />
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
