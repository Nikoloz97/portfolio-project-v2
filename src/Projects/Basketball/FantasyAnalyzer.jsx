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

import axios from "axios";

function FantasyAnalyzer() {
  const [playerInput, setPlayerInput] = useState("");
  const playerObj = {
    method: "GET",
    url: "https://tank01-fantasy-stats.p.rapidapi.com/getNBAPlayerInfo",
    params: {
      playerName: playerInput,
      statsToGet: "averages",
    },
    headers: {
      "X-RapidAPI-Key": "2a68275cbamsha4332cacc57200cp19e3b9jsn35ead262c58d",
      "X-RapidAPI-Host": "tank01-fantasy-stats.p.rapidapi.com",
    },
  };

  async function fetchPlayerObj() {
    try {
      const response = await axios.request(playerObj);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const [playerOptions, setPlayerOptions] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([
    {
      playerName: "",
      isModified: false,
    },
    {
      playerName: "",
      isModified: false,
    },
    {
      playerName: "",
      isModified: false,
    },
    {
      playerName: "",
      isModified: false,
    },
    {
      playerName: "",
      isModified: false,
    },
    {
      playerName: "",
      isModified: false,
    },
    {
      playerName: "",
      isModified: false,
    },
    {
      playerName: "",
      isModified: false,
    },
    {
      playerName: "",
      isModified: false,
    },
    {
      playerName: "",
      isModified: false,
    },
    {
      playerName: "",
      isModified: false,
    },
    {
      playerName: "",
      isModified: false,
    },
  ]);

  const dummyPlayerOptions = [
    { key: 1, text: "Lebron James", value: "Lebron James" },
    { key: 2, text: "James Harden", value: "James Harden" },
    { key: 3, text: "Jimmy Butler", value: "Jimmy Butler" },
  ];

  const fetchPlayerOptions = () => {
    return null;
  };

  // Why is it not setting the state?
  const handleDropdownSelection = (index, event) => {
    const value = event.target.innerText;
    const updatedSelectedPlayers = [...selectedPlayers];
    updatedSelectedPlayers[index].playerName = value;
    updatedSelectedPlayers[index].isModified = true;
    setSelectedPlayers(updatedSelectedPlayers);

    console.log(value);
    setPlayerInput(value);
    console.log(playerInput);
    fetchPlayerObj();
  };

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

  //Modal stuff... (own component?)
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
            {selectedPlayers[index].isModified ? "Hello there" : null}
          </div>
        ))}
        <Form.Button>Submit</Form.Button>
      </Form>

      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Show Results</Button>}
      >
        <Modal.Header>Results</Modal.Header>

        <Modal.Content>
          <Segment>
            <Grid columns={2} relaxed="very">
              <Grid.Column>
                <Header>Your team</Header>

                <List selection verticalAlign="middle">
                  {userCats.map((x) => (
                    <List.Item>
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
                    <List.Item>
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

export default FantasyAnalyzer;
