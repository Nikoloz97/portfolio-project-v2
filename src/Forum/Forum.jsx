import { React, useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { Card, Grid, Button } from "semantic-ui-react";
import { apiForumRoot } from "../Helpers";
import axios from "axios";

function Forum() {
  const [forumProfileData, setForumProfileData] = useState(null);

  useEffect(() => {
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

    getForumProfiles();
  }, []);

  const handleReturn = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="Forum-Page">
      {forumProfileData ? (
        <div>
          <Grid centered style={{ marginTop: "2rem" }}>
            <Grid.Row>
              <Card.Group>
                {forumProfileData.map((eachForumProfile) => (
                  <div>
                    <ProfileCard
                      forumProfile={eachForumProfile}
                      key={eachForumProfile.forumProfileId}
                    />
                  </div>
                ))}
              </Card.Group>
            </Grid.Row>
          </Grid>
        </div>
      ) : (
        <div style={{ color: "white" }}>
          There was an issue connecting to the network, please try again later
        </div>
      )}
      <Button onClick={handleReturn}> Back to top</Button>
    </div>
  );
}

export default Forum;
