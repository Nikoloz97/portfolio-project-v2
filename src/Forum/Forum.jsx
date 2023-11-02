import { React, useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { Card, Grid, Button } from "semantic-ui-react";
import { apiForumRoot } from "../Helpers";
import axios from "axios";
import "./Forum.css";

function Forum() {
  const [forumProfileData, setForumProfileData] = useState(null);

  useEffect(() => {
    getForumProfiles();
  }, []);

  const getForumProfiles = () => {
    axios
      .get(apiForumRoot)
      .then((response) => {
        console.log(response.data);
        setForumProfileData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleReturn = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
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
        <div className="Forum-Error-Page" style={{ marginBottom: "2rem" }}>
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
      )}
    </div>
  );
}

export default Forum;
