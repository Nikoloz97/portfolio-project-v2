import React, { useState } from "react";
import {
  Form,
  Button,
  Modal,
  List,
  Divider,
  Segment,
  Grid,
  Header,
} from "semantic-ui-react";

export default function ResultsModal(props) {
  const [open, setOpen] = useState(false);

  const calculateUserStats = () => {
    const selectedPlayers = props.dropdownSelectedPlayers;

    const avgPoints = (
      selectedPlayers.reduce(
        (acc, player) => acc + parseFloat(player.stats[0].value),
        0
      ) / 12
    ).toFixed(2);
    const avgFieldGoals = (
      selectedPlayers.reduce(
        (acc, player) => acc + parseFloat(player.stats[1].value),
        0
      ) / 12
    ).toFixed(2);
    const avgFreeThrows = (
      selectedPlayers.reduce(
        (acc, player) => acc + parseFloat(player.stats[2].value),
        0
      ) / 12
    ).toFixed(2);
    const avgThreePointers = (
      selectedPlayers.reduce(
        (acc, player) => acc + parseFloat(player.stats[3].value),
        0
      ) / 12
    ).toFixed(2);
    const avgRebounds = (
      selectedPlayers.reduce(
        (acc, player) => acc + parseFloat(player.stats[4].value),
        0
      ) / 12
    ).toFixed(2);
    const avgAssists = (
      selectedPlayers.reduce(
        (acc, player) => acc + parseFloat(player.stats[7].value),
        0
      ) / 12
    ).toFixed(2);
    const avgSteals = (
      selectedPlayers.reduce(
        (acc, player) => acc + parseFloat(player.stats[8].value),
        0
      ) / 12
    ).toFixed(2);
    const avgBlocks = (
      selectedPlayers.reduce(
        (acc, player) => acc + parseFloat(player.stats[5].value),
        0
      ) / 12
    ).toFixed(2);
    const avgTurnovers = (
      selectedPlayers.reduce(
        (acc, player) => acc + parseFloat(player.stats[6].value),
        0
      ) / 12
    ).toFixed(2);

    const tempUserCats = [
      {
        category: "PTS",
        value: avgPoints,
      },
      {
        category: "FG%",
        value: avgFieldGoals,
      },
      {
        category: "FT%",
        value: avgFreeThrows,
      },
      {
        category: "3PM",
        value: avgThreePointers,
      },
      {
        category: "REB",
        value: avgRebounds,
      },
      {
        category: "AST",
        value: avgAssists,
      },
      {
        category: "STL",
        value: avgSteals,
      },
      {
        category: "BLK",
        value: avgBlocks,
      },
      {
        category: "TO",
        value: avgTurnovers,
      },
    ];

    setUserCats(tempUserCats);
  };

  const [userCats, setUserCats] = useState([]);

  const [topCats, setTopCats] = useState([
    {
      category: "PTS",
      value: 17.86,
    },
    {
      category: "FG%",
      value: 0.5,
    },
    {
      category: "FT%",
      value: 78.95,
    },
    {
      category: "3PM",
      value: 1.72,
    },
    {
      category: "REB",
      value: 5.95,
    },
    {
      category: "AST",
      value: 4.08,
    },
    {
      category: "STL",
      value: 1.01,
    },
    {
      category: "BLK",
      value: 0.66,
    },
    {
      category: "TO",
      value: 1.97,
    },
  ]);

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Form.Button onClick={calculateUserStats}>Show Results</Form.Button>
        }
      >
        <Modal.Header>Results</Modal.Header>

        <Modal.Content>
          <Segment>
            <Grid columns={2} relaxed="very">
              <Grid.Column>
                <Header>Your team</Header>

                <List selection verticalAlign="middle">
                  {userCats.map((x) => (
                    <List.Item key={x.category}>
                      <List.Content>
                        <List.Header>{x.category}</List.Header>
                        <List>{x.value}</List>
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header>Top-150 Average</Header>
                <List selection verticalAlign="middle">
                  {topCats.map((x) => (
                    <List.Item key={x.category}>
                      <List.Content>
                        <List.Header>{x.category}</List.Header>
                        <List>{x.value}</List>
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
              </Grid.Column>
            </Grid>

            <Divider vertical>VS</Divider>
          </Segment>
        </Modal.Content>

        <Modal.Actions>
          <Button
            content="Return"
            labelPosition="left"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
}
