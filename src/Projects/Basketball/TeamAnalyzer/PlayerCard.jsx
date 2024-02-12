import React from "react";
import { Dropdown, Card, Image, Button, Icon } from "semantic-ui-react";

const PlayerCard = (props) => {
  return (
    <div className="Player-Card-Component-Container">
      {/* TODO: should card ternary be created for placeholder? Or make it work with one card component */}
      {/* {props.isPlayerChosen ? (
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={selectedPlayers[index].playerURL}
            />
            <Card.Header>{selectedPlayers[index].playerName}</Card.Header>
            <Card.Meta>{selectedPlayers[index].teamName}</Card.Meta>

            <Card.Description>
              {selectedPlayers[index].stats.map((stat) => (
                <div key={stat.name}>
                  <header>{stat.name}</header>
                  <p>{stat.value}</p>
                </div>
              ))}
            </Card.Description>
          </Card.Content>
        </Card>
      ) : ( */}
      <div className="Player-Card-Container">
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={props.selectedPlayer.playerURL}
            />
            <Card.Header>{props.selectedPlayer.playerName}</Card.Header>
            <Card.Meta>{props.selectedPlayer.teamName}</Card.Meta>
            <Card.Description>
              {props.selectedPlayer.stats.map((stat, index) => (
                <div key={index}>
                  <header>{stat.name}</header>
                  <p>{stat.value}</p>
                </div>
              ))}
            </Card.Description>
          </Card.Content>
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
      {/* )} */}

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
