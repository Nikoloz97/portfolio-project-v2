import React from "react";
import { Dropdown, Card, Image, Button, Icon } from "semantic-ui-react";

const PlayerCard = (props) => {
  return (
    <div className="Player-Card-Component-Container">
      <div className="Player-Card-Container">
        <Card className="Player-Card">
          <div className="Player-Card-Contents-Container">
            <div className="Player-Card-Headshot-Container">
              <Image
                // src={require("../../../Images/General/avatar-icon.jpg")}
                src={
                  props.selectedPlayer.playerURL === ""
                    ? require("../../../Images/General/avatar-icon.jpg")
                    : props.selectedPlayer.playerURL
                }
                style={{ width: "100%", height: "25%", marginBottom: "80px" }}
              />
            </div>
            <div>
              <Card.Header style={{ color: "white" }}>
                <h1>{props.selectedPlayer.playerName.toUpperCase()}</h1>
              </Card.Header>

              <Card.Content>
                <Card.Meta style={{ color: "white" }}>
                  {props.selectedPlayer.teamName}
                </Card.Meta>
                <Card.Description
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "60%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {props.selectedPlayer.stats.map((stat, index) => (
                    <div key={index} className="Player-Stat-Card">
                      <header>{stat.name.toUpperCase()}</header>
                      <p>{stat.value}</p>
                    </div>
                  ))}
                </Card.Description>
              </Card.Content>
            </div>
          </div>
        </Card>

        <div className="Player-Card-Buttons-Container">
          <Button
            className="Player-Card-Button"
            disabled={props.playerIndex === 0}
            onClick={() => props.setPlayerIndex(props.playerIndex - 1)}
          >
            <Icon name="angle left" />
          </Button>
          <Button
            className="Player-Card-Button"
            disabled={props.playerIndex === props.selectedPlayers.length - 1}
            onClick={() => props.setPlayerIndex(props.playerIndex + 1)}
          >
            <Icon name="angle right" />
          </Button>
        </div>
      </div>

      {/* TODO: Fix dropdown (enter = not working) */}
      <Dropdown
        style={{ width: "200px", height: "100%", marginTop: "13px" }}
        placeholder={props.playerDropdown.placeholder}
        fluid
        search
        selection
        options={props.playerOptions}
        onChange={(event) => props.handleDropdownSelection(event)}
      />
    </div>
  );
};

export default PlayerCard;
