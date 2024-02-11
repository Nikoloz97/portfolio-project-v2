import React from "react";
import { Dropdown, Card, Image } from "semantic-ui-react";

const PlayerCard = (props) => {
  return (
    <div>
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
      {/* )} */}

      {/* TODO: Fix dropdown (enter = not working) */}
      <Dropdown
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
