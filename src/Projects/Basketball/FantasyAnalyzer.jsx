import React, { useState, useEffect } from "react";
import { Form, Dropdown, Button, Card, Image } from "semantic-ui-react";
import axios from "axios";
import ResultsModal from "./ResultsModal";

function FantasyAnalyzer() {
  const [playerNameInput, setPlayerNameInput] = useState("");

  const [latestDropdownModifiedIndex, setLatestDropdownModifiedIndex] =
    useState(0);

  useEffect(() => {
    const fetchSelectedPlayer = async () => {
      try {
        const response = await axios.request(getPlayer);

        const updatedSelectedPlayers = [...selectedPlayers];

        const currentPlayer =
          updatedSelectedPlayers[latestDropdownModifiedIndex];

        const fetchedData = response.data.body[0];

        populateCurrentPlayer(
          updatedSelectedPlayers,
          currentPlayer,
          fetchedData
        );
      } catch (error) {
        console.error(error);
      }
    };

    const populateCurrentPlayer = (
      updatedSelectedPlayers,
      currentPlayer,
      fetchedData
    ) => {
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

      updatedSelectedPlayers[latestDropdownModifiedIndex] = currentPlayer;

      setSelectedPlayers(updatedSelectedPlayers);
    };

    if (playerNameInput !== "") {
      fetchSelectedPlayer();
    }
  }, [playerNameInput]);

  useEffect(() => {
    const getPlayerOptions = {
      method: "GET",
      url: "https://tank01-fantasy-stats.p.rapidapi.com/getNBAPlayerList",
      headers: {
        "X-RapidAPI-Key": "2a68275cbamsha4332cacc57200cp19e3b9jsn35ead262c58d",
        "X-RapidAPI-Host": "tank01-fantasy-stats.p.rapidapi.com",
      },
    };

    const fetchPlayerOptions = async () => {
      try {
        const response = await axios.request(getPlayerOptions);
        populatePlayerOptions(response.data);
      } catch (error) {
        console.error(error);
      }

      const populatePlayerOptions = (playerOptionsData) => {
        // Create copy of playerOptions state
        // populate copy
        // setPlayerOptions(copy)
      };
    };
  }, []);

  const [playerOptions, setPlayerOptions] = useState([]);

  const dummyPlayerOptions = [
    { key: 1, text: "Lebron James", value: "Lebron James" },
    { key: 2, text: "James Harden", value: "James Harden" },
    { key: 3, text: "Jimmy Butler", value: "Jimmy Butler" },
  ];

  const handleDropdownSelection = (index, event) => {
    const value = event.target.innerText;
    const updatedSelectedPlayers = [...selectedPlayers];
    updatedSelectedPlayers[index].playerName = value;

    setSelectedPlayers(updatedSelectedPlayers);

    setLatestDropdownModifiedIndex(index);

    setPlayerNameInput(value);
  };

  const getPlayer = {
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

  const playerDropdowns = [
    {
      key: 1,
      label: "Player one",
      placeholder: "Choose player one",
      options: dummyPlayerOptions,
    },
    {
      key: 2,
      label: "Player two",
      placeholder: "Choose player two",
      options: dummyPlayerOptions,
    },
    {
      key: 3,
      label: "Player three",
      placeholder: "Choose player three",
      options: dummyPlayerOptions,
    },
    {
      key: 4,
      label: "Player four",
      placeholder: "Choose player four",
      options: dummyPlayerOptions,
    },
    {
      key: 5,
      label: "Player five",
      placeholder: "Choose player five",
      options: dummyPlayerOptions,
    },
    {
      key: 6,
      label: "Player six",
      placeholder: "Choose player six",
      options: dummyPlayerOptions,
    },
    {
      key: 7,
      label: "Player seven",
      placeholder: "Choose player seven",
      options: dummyPlayerOptions,
    },
    {
      key: 8,
      label: "Player eight",
      placeholder: "Choose player eight",
      options: dummyPlayerOptions,
    },
    {
      key: 9,
      label: "Player nine",
      placeholder: "Choose player nine",
      options: dummyPlayerOptions,
    },
    {
      key: 10,
      label: "Player ten",
      placeholder: "Choose player ten",
      options: dummyPlayerOptions,
    },
    {
      key: 11,
      label: "Player eleven",
      placeholder: "Choose player eleven",
      options: dummyPlayerOptions,
    },
    {
      key: 12,
      label: "Player twelve",
      placeholder: "Choose player twelve",
      options: dummyPlayerOptions,
    },
  ];

  return (
    <div className="Default-Page">
      <header>Welcome to the fantasy analyzer</header>
      <Form className="Default-Form">
        {playerDropdowns.map((x, index) => (
          <div>
            {/* TODO: Fix dropdown (finicky) */}
            <Dropdown
              key={x.key}
              placeholder={x.placeholder}
              fluid
              search
              selection
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
                      <div key={stat.name}>
                        <header>{stat.name}</header>
                        <p>{stat.value}</p>
                      </div>
                    ))}
                  </Card.Description>
                </Card.Content>
              </Card>
            ) : null}
          </div>
        ))}

        <ResultsModal />
      </Form>
    </div>
  );
}

export default FantasyAnalyzer;