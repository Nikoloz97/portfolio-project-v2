import React from "react";
import { Header, Image } from "semantic-ui-react";
import "./TeamAnalyzer.css";

const PlayerDisplay = (props) => {
  return (
    <div className="Player-Display-Container">
      {props.selectedPlayers.map((player, index) => {
        return (
          <div className="Player-Box" key={index}>
            <Image
              src={
                player.playerURL === ""
                  ? require("../../../Images/General/avatar-icon.jpg")
                  : player.playerURL
              }
              className="Player-Box-Image"
            />
            <h4 style={{ marginTop: "5px" }}>{player.playerName}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default PlayerDisplay;
