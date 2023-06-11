import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function FantasyAnalyzer() {
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
    { key: 1, text: "Lebron James", value: "LBJ" },
    { key: 2, text: "James Harden", value: "JH" },
    { key: 3, text: "Jimmy Butler", value: "JB" },
  ];

  const fetchPlayerOptions = () => {
    return null;
  };

  const handleDropdownChange = (index, event) => {
    const value = event.target.innerText;
    const updatedSelectedPlayers = [...selectedPlayers];
    updatedSelectedPlayers[index].playerName = value;
    updatedSelectedPlayers[index].isModified = true;
    setSelectedPlayers(updatedSelectedPlayers);

    console.log(index);
    console.log(event.target.innerText);
    console.log(selectedPlayers);
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
              onChange={(event) => handleDropdownChange(index, event)}
            />
            {selectedPlayers[index].isModified ? "tacos" : "notacos"}
          </div>
        ))}
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default FantasyAnalyzer;
