import React from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import AutoCompleteInput from "../../../Utils/General/AutoCompleteInput";

const PlayerCard = (props) => {
  return (
    <div className="Player-Card-Component-Container">
      <div className="Player-Card-Container">
        <div className="Player-Card-Buttons-Row">
          <Button
            className="Player-Card-Button"
            disabled={props.playerIndex === 0}
            onClick={() => props.setPlayerIndex(props.playerIndex - 1)}
            size="massive"
          >
            <Icon name="angle left" />
          </Button>
          <Card className="Player-Card">
            <div className="Player-Card-Contents-Container">
              <div className="Headshot-Header-Container">
                <div className="Player-Card-Headshot-Container">
                  <Image
                    src={
                      props.selectedPlayer.playerURL === ""
                        ? require("../../../Images/General/avatar-icon.jpg")
                        : props.selectedPlayer.playerURL
                    }
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <div
                  className="Player-Header-Team-Container"
                  style={{ width: "50%" }}
                >
                  <Card.Header style={{ color: "white" }}>
                    <h1 style={{ textAlign: "center" }}>
                      {props.selectedPlayer.playerName.toUpperCase()}
                    </h1>
                    <Card.Meta textAlign="center" style={{ color: "white" }}>
                      {props.selectedPlayer.teamName}
                    </Card.Meta>
                  </Card.Header>
                </div>
              </div>
              <div>
                <Card.Content>
                  <Card.Description>
                    <div className="Player-Stats-Grid">
                      {props.selectedPlayer.stats.map((stat, index) => (
                        <div key={index} className="Player-Stat-Card">
                          <header>{stat.name.toUpperCase()}</header>
                          {stat.name === "Field Goal %" ||
                          stat.name === "Free Throw %" ? (
                            <p>{parseFloat((stat.value * 100).toFixed(2))}</p>
                          ) : (
                            <p>{stat.value}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card.Description>
                </Card.Content>
              </div>
            </div>
          </Card>
          <Button
            className="Player-Card-Button"
            disabled={
              props.playerIndex === props.selectedPlayers.length - 1 ||
              !props.selectedPlayer.isPlayerChosen
            }
            onClick={() => props.setPlayerIndex(props.playerIndex + 1)}
            size="massive"
          >
            <Icon name="angle right" />
          </Button>
        </div>

        <div className="Player-Card-Input-Container">
          <AutoCompleteInput
            suggestions={props.playerOptions}
            setPlayerNameInput={props.setPlayerNameInput}
            playerIndex={props.playerIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
