import { React, useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { Card, Grid, Button } from "semantic-ui-react";
import { apiForumRoot } from "../Utils/ApiRoutes";
import axios from "axios";
import "./Forum.css";

function Forum(props) {
  const [forumProfileData, setForumProfileData] = useState(null);
  const [isForumHidden, setIsForumHidden] = useState(true);

  useEffect(() => {
    getForumProfiles();
  }, []);

  useEffect(() => {
    if (props.isRetryingFetch) {
      getForumProfiles();
      props.setIsRetryingFetch(false);
    }
  }, [props.isRetryingFetch]);

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

  const handleReturn = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isForumHidden ? null : (
        <div className={isForumHidden ? "Hide-Forum" : ""}>
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
        </div>
      )}
    </div>
  );
}

export default Forum;
