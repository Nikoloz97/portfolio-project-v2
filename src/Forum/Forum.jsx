import { React, useState, useEffect } from "react";
import Display from "./Display";
import ProfileCard from "./ProfileCard";
import { Card, Grid } from "semantic-ui-react";
import axios from "axios";

function Forum() {
  const [forumProfileData, setForumProfileData] = useState(null);

  const apiForumRoot = "https://localhost:7047/api/forum";

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

  return (
    <div className="Forum-Page">
      <Display />

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
          There was a network error, please try again
        </div>
      )}
    </div>
  );
}

export default Forum;
