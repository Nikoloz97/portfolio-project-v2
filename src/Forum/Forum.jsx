import { React, useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { Card, Grid, Button, Segment, Dimmer, Loader } from "semantic-ui-react";
import { apiForumRoot } from "../Utils/ApiRoutes";
import { LoadingMessage } from "../Utils/Messages";
import axios from "axios";
import "./Forum.css";

function Forum(props) {
  const [forumProfileData, setForumProfileData] = useState(null);

  const [isForumHidden, setIsForumHidden] = useState(true);

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
        setIsForumHidden(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        props.setIsLoading(false);
        setIsForumHidden(false);
      });
  };

  const handleReturn = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={isForumHidden ? "Hide-Forum" : ""}>
      {/* Profile cards */}
      {forumProfileData ? (
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
      ) : (
        // Error screen
        <div>
          <Dimmer active={props.isLoading ? true : false}>
            <Loader />
          </Dimmer>
          <div className="Forum-Error-Page">
            <div>
              There was an issue connecting to the network, please try again
            </div>
            <Button style={{ marginTop: "2rem" }} onClick={getForumProfiles}>
              Retry
            </Button>
            <Button style={{ marginTop: "2rem" }} onClick={handleReturn}>
              Return
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Forum;
