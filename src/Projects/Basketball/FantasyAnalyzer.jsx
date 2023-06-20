import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Modal,
  List,
  Divider,
  Segment,
  Grid,
  Header,
  Card,
  Image,
} from "semantic-ui-react";

import axios from "axios";

function FantasyAnalyzer() {
  const [playerNameInput, setPlayerNameInput] = useState(undefined);

  // const [playerToUpdateModified, setPlayerToUpdateModified] =
  //   useState(undefined);

  const [latestDropdownModifiedIndex, setLatestDropdownModifiedIndex] =
    useState(0);

  useEffect(() => {
    // TODO: Fix - useEffect runs on render
    // TODO: Fix -
    const fetchSelectedPlayer = async () => {
      try {
        const response = await axios.request(playerReq);

        const updatedSelectedPlayers = [...selectedPlayers];

        console.log(response);

        const currentPlayer =
          updatedSelectedPlayers[latestDropdownModifiedIndex];

        const fetchedData = response.data.body[0];

        populateCurrentPlayer(currentPlayer, fetchedData);

        setPlayerToUpdateModified(currentPlayer);
      } catch (error) {
        console.error(error);
      }
    };

    const populateCurrentPlayer = (currentPlayer, fetchedData) => {
      console.log(currentPlayer);

      currentPlayer.teamName = fetchedData.team;

      currentPlayer.playerURL = fetchedData.espnHeadshot;

      currentPlayer.stats[0].value = fetchedData.stats.pts;

      currentPlayer.stats[1].value = fetchedData.stats.fgp;

      currentPlayer.stats[2].value = fetchedData.stats.ftp;

      currentPlayer.stats[3].value = fetchedData.stats.tptfgm;

      currentPlayer.stats[4].value = fetchedData.stats.reb;

      currentPlayer.stats[5].value = fetchedData.stats.blk;

      currentPlayer.stats[6].value = fetchedData.stats.TOV;

      currentPlayer.stats[7].value = fetchedData.stats.ast;

      currentPlayer.stats[8].value = fetchedData.stats.stl;

      currentPlayer.isModified = true;
    };

    fetchSelectedPlayer();
  }, [playerNameInput]);

  // useEffect(() => {
  //   const updatedSelectedPlayers = [...selectedPlayers];
  //   const currentPlayer = updatedSelectedPlayers[latestDropdownModifiedIndex];

  //   currentPlayer.isModified = true;
  // }, [playerToUpdateModified]);

  const fetchPlayerOptions = () => {
    return null;
  };

  const [playerOptions, setPlayerOptions] = useState([]);

  const handleDropdownSelection = (index, event) => {
    const value = event.target.innerText;
    const updatedSelectedPlayers = [...selectedPlayers];
    updatedSelectedPlayers[index].playerName = value;

    setSelectedPlayers(updatedSelectedPlayers);

    setLatestDropdownModifiedIndex(index);

    setPlayerNameInput(value);
  };

  const playerReq = {
    method: "GET",
    url: "https://tank01-fantasy-stats.p.rapidapi.com/getNBAPlayerInfo",
    params: {
      playerName: playerNameInput,
      statsToGet: "averages",
    },
    headers: {
      "X-RapidAPI-Key": "2a68275cbamsha4332cacc57200cp19e3b9jsn35ead262c58d",
      "X-RapidAPI-Host": "tank01-fantasy-stats.p.rapidapi.com",
    },
  };

  const [selectedPlayers, setSelectedPlayers] = useState([
    {
      playerName: "",
      teamName: "",
      playerURL: "",
      isModified: false,
      stats: [
        {
          name: "PTS",
          value: 0,
        },
        {
          name: "FG%",
          value: 0,
        },
        {
          name: "FT%",
          value: 0,
        },
        {
          name: "3PM",
          value: 0,
        },
        {
          name: "Rebounds",
          value: 0,
        },
        {
          name: "Blocks",
          value: 0,
        },
        {
          name: "Turnovers",
          value: 0,
        },
        {
          name: "Assists",
          value: 0,
        },
        {
          name: "Steals",
          value: 0,
        },
      ],
    },
    {
      playerName: "",
      teamName: "",
      playerURL: "",
      isModified: false,
      stats: [
        {
          name: "PTS",
          value: 0,
        },
        {
          name: "FG%",
          value: 0,
        },
        {
          name: "FT%",
          value: 0,
        },
        {
          name: "3PM",
          value: 0,
        },
        {
          name: "Rebounds",
          value: 0,
        },
        {
          name: "Blocks",
          value: 0,
        },
        {
          name: "Turnovers",
          value: 0,
        },
        {
          name: "Assists",
          value: 0,
        },
        {
          name: "Steals",
          value: 0,
        },
      ],
    },
    {
      playerName: "",
      teamName: "",
      playerURL: "",
      isModified: false,
      stats: [
        {
          name: "PTS",
          value: 0,
        },
        {
          name: "FG%",
          value: 0,
        },
        {
          name: "FT%",
          value: 0,
        },
        {
          name: "3PM",
          value: 0,
        },
        {
          name: "Rebounds",
          value: 0,
        },
        {
          name: "Blocks",
          value: 0,
        },
        {
          name: "Turnovers",
          value: 0,
        },
        {
          name: "Assists",
          value: 0,
        },
        {
          name: "Steals",
          value: 0,
        },
      ],
    },
    {
      playerName: "",
      teamName: "",
      playerURL: "",
      isModified: false,
      stats: [
        {
          name: "PTS",
          value: 0,
        },
        {
          name: "FG%",
          value: 0,
        },
        {
          name: "FT%",
          value: 0,
        },
        {
          name: "3PM",
          value: 0,
        },
        {
          name: "Rebounds",
          value: 0,
        },
        {
          name: "Blocks",
          value: 0,
        },
        {
          name: "Turnovers",
          value: 0,
        },
        {
          name: "Assists",
          value: 0,
        },
        {
          name: "Steals",
          value: 0,
        },
      ],
    },
    {
      playerName: "",
      teamName: "",
      playerURL: "",
      isModified: false,
      stats: [
        {
          name: "PTS",
          value: 0,
        },
        {
          name: "FG%",
          value: 0,
        },
        {
          name: "FT%",
          value: 0,
        },
        {
          name: "3PM",
          value: 0,
        },
        {
          name: "Rebounds",
          value: 0,
        },
        {
          name: "Blocks",
          value: 0,
        },
        {
          name: "Turnovers",
          value: 0,
        },
        {
          name: "Assists",
          value: 0,
        },
        {
          name: "Steals",
          value: 0,
        },
      ],
    },
    {
      playerName: "",
      teamName: "",
      playerURL: "",
      isModified: false,
      stats: [
        {
          name: "PTS",
          value: 0,
        },
        {
          name: "FG%",
          value: 0,
        },
        {
          name: "FT%",
          value: 0,
        },
        {
          name: "3PM",
          value: 0,
        },
        {
          name: "Rebounds",
          value: 0,
        },
        {
          name: "Blocks",
          value: 0,
        },
        {
          name: "Turnovers",
          value: 0,
        },
        {
          name: "Assists",
          value: 0,
        },
        {
          name: "Steals",
          value: 0,
        },
      ],
    },
    {
      playerName: "",
      teamName: "",
      playerURL: "",
      isModified: false,
      stats: [
        {
          name: "PTS",
          value: 0,
        },
        {
          name: "FG%",
          value: 0,
        },
        {
          name: "FT%",
          value: 0,
        },
        {
          name: "3PM",
          value: 0,
        },
        {
          name: "Rebounds",
          value: 0,
        },
        {
          name: "Blocks",
          value: 0,
        },
        {
          name: "Turnovers",
          value: 0,
        },
        {
          name: "Assists",
          value: 0,
        },
        {
          name: "Steals",
          value: 0,
        },
      ],
    },
    {
      playerName: "",
      teamName: "",
      playerURL: "",
      isModified: false,
      stats: [
        {
          name: "PTS",
          value: 0,
        },
        {
          name: "FG%",
          value: 0,
        },
        {
          name: "FT%",
          value: 0,
        },
        {
          name: "3PM",
          value: 0,
        },
        {
          name: "Rebounds",
          value: 0,
        },
        {
          name: "Blocks",
          value: 0,
        },
        {
          name: "Turnovers",
          value: 0,
        },
        {
          name: "Assists",
          value: 0,
        },
        {
          name: "Steals",
          value: 0,
        },
      ],
    },
    {
      playerName: "",
      teamName: "",
      playerURL: "",
      isModified: false,
      stats: [
        {
          name: "PTS",
          value: 0,
        },
        {
          name: "FG%",
          value: 0,
        },
        {
          name: "FT%",
          value: 0,
        },
        {
          name: "3PM",
          value: 0,
        },
        {
          name: "Rebounds",
          value: 0,
        },
        {
          name: "Blocks",
          value: 0,
        },
        {
          name: "Turnovers",
          value: 0,
        },
        {
          name: "Assists",
          value: 0,
        },
        {
          name: "Steals",
          value: 0,
        },
      ],
    },
    {
      playerName: "",
      teamName: "",
      playerURL: "",
      isModified: false,
      stats: [
        {
          name: "PTS",
          value: 0,
        },
        {
          name: "FG%",
          value: 0,
        },
        {
          name: "FT%",
          value: 0,
        },
        {
          name: "3PM",
          value: 0,
        },
        {
          name: "Rebounds",
          value: 0,
        },
        {
          name: "Blocks",
          value: 0,
        },
        {
          name: "Turnovers",
          value: 0,
        },
        {
          name: "Assists",
          value: 0,
        },
        {
          name: "Steals",
          value: 0,
        },
      ],
    },
    {
      playerName: "",
      teamName: "",
      playerURL: "",
      isModified: false,
      stats: [
        {
          name: "PTS",
          value: 0,
        },
        {
          name: "FG%",
          value: 0,
        },
        {
          name: "FT%",
          value: 0,
        },
        {
          name: "3PM",
          value: 0,
        },
        {
          name: "Rebounds",
          value: 0,
        },
        {
          name: "Blocks",
          value: 0,
        },
        {
          name: "Turnovers",
          value: 0,
        },
        {
          name: "Assists",
          value: 0,
        },
        {
          name: "Steals",
          value: 0,
        },
      ],
    },
    {
      playerName: "",
      teamName: "",
      playerURL: "",
      isModified: false,
      stats: [
        {
          name: "PTS",
          value: 0,
        },
        {
          name: "FG%",
          value: 0,
        },
        {
          name: "FT%",
          value: 0,
        },
        {
          name: "3PM",
          value: 0,
        },
        {
          name: "Rebounds",
          value: 0,
        },
        {
          name: "Blocks",
          value: 0,
        },
        {
          name: "Turnovers",
          value: 0,
        },
        {
          name: "Assists",
          value: 0,
        },
        {
          name: "Steals",
          value: 0,
        },
      ],
    },
  ]);

  const dummyPlayerOptions = [
    { key: 1, text: "Lebron James", value: "Lebron James" },
    { key: 2, text: "James Harden", value: "James Harden" },
    { key: 3, text: "Jimmy Butler", value: "Jimmy Butler" },
  ];

  const playerDropdowns = [
    {
      label: "Player one",
      placeholder: "Choose player one",
      options: dummyPlayerOptions,
    },
    {
      label: "Player two",
      placeholder: "Choose player two",
      options: dummyPlayerOptions,
    },
    {
      label: "Player three",
      placeholder: "Choose player three",
      options: dummyPlayerOptions,
    },
    {
      label: "Player four",
      placeholder: "Choose player four",
      options: dummyPlayerOptions,
    },
    {
      label: "Player five",
      placeholder: "Choose player five",
      options: dummyPlayerOptions,
    },
    {
      label: "Player six",
      placeholder: "Choose player six",
      options: dummyPlayerOptions,
    },
    {
      label: "Player seven",
      placeholder: "Choose player seven",
      options: dummyPlayerOptions,
    },
    {
      label: "Player eight",
      placeholder: "Choose player eight",
      options: dummyPlayerOptions,
    },
    {
      label: "Player nine",
      placeholder: "Choose player nine",
      options: dummyPlayerOptions,
    },
    {
      label: "Player ten",
      placeholder: "Choose player ten",
      options: dummyPlayerOptions,
    },
    {
      label: "Player eleven",
      placeholder: "Choose player eleven",
      options: dummyPlayerOptions,
    },
    {
      label: "Player twelve",
      placeholder: "Choose player twelve",
      options: dummyPlayerOptions,
    },
  ];

  // TODO: Separate modal stuff out in separate component
  const [open, setOpen] = useState(false);
  const [userCats, setUserCats] = useState([
    {
      category: "PTS",
      value: 16.5,
    },
    {
      category: "FG%",
      value: 48.5,
    },
    {
      category: "FT%",
      value: 78,
    },
    {
      category: "3PM",
      value: 2.5,
    },
    {
      category: "REB",
      value: 10,
    },
    {
      category: "AST",
      value: 6,
    },
    {
      category: "STL",
      value: 1.2,
    },
    {
      category: "BLK",
      value: 1.4,
    },
    {
      category: "TO",
      value: 2.2,
    },
  ]);

  const [topCats, setTopCats] = useState([
    {
      category: "PTS",
      value: 16.5,
    },
    {
      category: "FG%",
      value: 48.5,
    },
    {
      category: "FT%",
      value: 78,
    },
    {
      category: "3PM",
      value: 2.5,
    },
    {
      category: "REB",
      value: 10,
    },
    {
      category: "AST",
      value: 6,
    },
    {
      category: "STL",
      value: 1.2,
    },
    {
      category: "BLK",
      value: 1.4,
    },
    {
      category: "TO",
      value: 2.2,
    },
  ]);

  return (
    <div className="Default-Page">
      <header>Welcome to the fantasy analyzer</header>
      <Form className="Default-Form">
        {playerDropdowns.map((x, index) => (
          <div>
            <Form.Select
              fluid
              key={index}
              label={x.label}
              placeholder={x.placeholder}
              options={dummyPlayerOptions}
              onChange={(event) => handleDropdownSelection(index, event)}
            />

            {selectedPlayers[index].isModified ? (
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
                      <div key={index}>
                        <header>{stat.name}</header>
                        <p>{stat.value}</p>
                      </div>
                    ))}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      Approve
                    </Button>
                    <Button basic color="red">
                      Decline
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            ) : null}
          </div>
        ))}

        {/* TODO: Modal stuff (JSX version) */}

        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Form.Button>Show Results</Form.Button>}
        >
          <Modal.Header>Results</Modal.Header>

          <Modal.Content>
            <Segment>
              <Grid columns={2} relaxed="very">
                <Grid.Column>
                  <Header>Your team</Header>

                  <List selection verticalAlign="middle">
                    {userCats.map((x, index) => (
                      <List.Item key={index}>
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
                    {topCats.map((x, index) => (
                      <List.Item key={index}>
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
      </Form>
    </div>
  );
}

export default FantasyAnalyzer;
