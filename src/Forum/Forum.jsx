import { React, useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { Card, Grid, Button, Dimmer, Loader, Message } from "semantic-ui-react";
import { apiForumRoot } from "../Utils/ApiRoutes";
import axios from "axios";
import "./Forum.css";

function Forum(props) {
  const [forumProfileData, setForumProfileData] = useState(null);
  const [isForumHidden, setIsForumHidden] = useState(true);
  // const [errorOnRetry, setErrorOnRetry] = useState(null);

  useEffect(() => {
    getForumProfiles();
  }, []);

  const getForumProfiles = () => {
    props.setIsLoading(true);
    axios
      .get(apiForumRoot)
      .then((response) => {
        console.log(response.data);
        setForumProfileData(response.data);
        props.setIsLoading(false);
        props.setIsFetchSuccessful(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        props.setIsLoading(false);
        props.setIsErrorModalDisplayed(true);
        props.setIsFetchSuccessful(false);
      });
  };

  // const handleRetry = () => {
  //   props.setIsLoading(true);
  //   props.setIsRetryingFetch(true);
  //   setIsForumHidden(true);
  //   axios
  //     .get(apiForumRoot)
  //     .then((response) => {
  //       console.log(response.data);
  //       setForumProfileData(response.data);
  //       props.setIsLoading(false);
  //       setIsForumHidden(false);
  //       props.setIsRetryingFetch(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       props.setIsLoading(false);
  //       setIsForumHidden(false);
  //       props.setIsRetryingFetch(false);
  //       setErrorOnRetry(
  //         "An error occurred while fetching data. Please try again."
  //       );
  //     });
  // };

  const handleReturn = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isForumHidden ? null : (
        <div className={isForumHidden ? "Hide-Forum" : ""}>
          {/* Profile cards */}
          {/* {forumProfileData ? ( */}
          <div className="Forum-Page">
            <Grid centered>
              <Grid.Row style={{ marginTop: "3rem" }}>
                <Card.Group>
                  {forumProfileData.map((eachForumProfile) => (
                    <ProfileCard
                      forumProfile={eachForumProfile}
                      key={eachForumProfile.forumProfileId}
                    />
                  ))}
                </Card.Group>
              </Grid.Row>
              <Grid.Row>
                <Button onClick={handleReturn}> Back to top</Button>
              </Grid.Row>
            </Grid>
          </div>
          {/* ) : ( */}
          {/* Error screen */}
          {/* <div>
          <div className="Forum-Error-Page">
            <div>
              There was an issue connecting to the network, please try again
            </div>
            <Button style={{ marginTop: "2rem" }} onClick={handleRetry}>
              Retry
            </Button>
            <Button style={{ marginTop: "2rem" }} onClick={handleReturn}>
              Return
            </Button> */}
          {/* {errorOnRetry ? (
              <Message
                onDismiss={() => setErrorOnRetry(null)}
                header="Error"
                content={errorOnRetry}
              />
            ) : null} */}
          {/* </div> */}
          {/* </div> */}
          {/* )} */}
        </div>
      )}
    </div>
  );
}

export default Forum;
