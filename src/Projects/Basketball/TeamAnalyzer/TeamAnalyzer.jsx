import React, { useState, useEffect } from "react";
import { Form, Dropdown, Card, Image } from "semantic-ui-react";
import axios from "axios";
import ResultsModal from "./ResultsModal";

function TeamAnalyzer() {
  const [playerNameInput, setPlayerNameInput] = useState("");

  const [latestDropdownModifiedIndex, setLatestDropdownModifiedIndex] =
    useState(0);

  const [playerOptions, setPlayerOptions] = useState([]);

  const populatePlayerOptions = (playerOptionsData) => {
    const playerOptionsList = [
      playerOptionsData.map((playerObj) => ({
        key: playerObj.playerID,
        text: playerObj.longName,
        value: playerObj.longName,
      })),
    ];
    setPlayerOptions(playerOptionsList[0]);
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

    if (playerNameInput !== "") {
      fetchSelectedPlayer();
    }
  }, [playerNameInput]);

  useEffect(() => {
    const fetchPlayerOptions = async () => {
      try {
        const response = await axios.request(getPlayerOptions);
        populatePlayerOptions(response.data.body);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPlayerOptions();
  }, []);

  const handleDropdownSelection = (index, event) => {
    const value = event.target.innerText;
    const updatedSelectedPlayers = [...selectedPlayers];
    updatedSelectedPlayers[index].playerName = value;

    setSelectedPlayers(updatedSelectedPlayers);

    setLatestDropdownModifiedIndex(index);

    setPlayerNameInput(value);
  };

  const getPlayerOptions = {
    method: "GET",
    url: "https://tank01-fantasy-stats.p.rapidapi.com/getNBAPlayerList",
    headers: {
      "X-RapidAPI-Key": "2a68275cbamsha4332cacc57200cp19e3b9jsn35ead262c58d",
      "X-RapidAPI-Host": "tank01-fantasy-stats.p.rapidapi.com",
    },
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
      options: playerOptions,
    },
    {
      key: 2,
      label: "Player two",
      placeholder: "Choose player two",
      options: playerOptions,
    },
    {
      key: 3,
      label: "Player three",
      placeholder: "Choose player three",
      options: playerOptions,
    },
    {
      key: 4,
      label: "Player four",
      placeholder: "Choose player four",
      options: playerOptions,
    },
    {
      key: 5,
      label: "Player five",
      placeholder: "Choose player five",
      options: playerOptions,
    },
    {
      key: 6,
      label: "Player six",
      placeholder: "Choose player six",
      options: playerOptions,
    },
    {
      key: 7,
      label: "Player seven",
      placeholder: "Choose player seven",
      options: playerOptions,
    },
    {
      key: 8,
      label: "Player eight",
      placeholder: "Choose player eight",
      options: playerOptions,
    },
    {
      key: 9,
      label: "Player nine",
      placeholder: "Choose player nine",
      options: playerOptions,
    },
    {
      key: 10,
      label: "Player ten",
      placeholder: "Choose player ten",
      options: playerOptions,
    },
    {
      key: 11,
      label: "Player eleven",
      placeholder: "Choose player eleven",
      options: playerOptions,
    },
    {
      key: 12,
      label: "Player twelve",
      placeholder: "Choose player twelve",
      options: playerOptions,
    },
  ];

  return (
    <div className="Default-Page">
      <header>Welcome to the Team Analyzer</header>
      <Form className="Default-Form">
        {playerDropdowns.map((x, index) => (
          <div>
            {/* TODO: Fix dropdown (enter = not registering) */}
            <Dropdown
              key={x.key}
              placeholder={x.placeholder}
              fluid
              search
              selection
              options={playerOptions}
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

        <ResultsModal dropdownSelectedPlayers={selectedPlayers} />
      </Form>
    </div>
  );
}

export default TeamAnalyzer;
