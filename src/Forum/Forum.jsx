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
      <div>
        {forumProfileData ? (
          <div className="Forum-Page">
            <Grid centered>
              <Grid.Row style={{ marginTop: "2rem" }}>
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="Forum-Error-Page" style={{ marginBottom: "2rem" }}>
              There was an issue connecting to the network, please try again
            </div>
            <Button style={{ marginBottom: "2rem" }} onClick={getForumProfiles}>
              Retry
            </Button>
          </div>
        )}
      </div>

      <Button onClick={handleReturn}> Back to top</Button>
    </div>
  );
}

export default Forum;
