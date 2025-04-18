import React from "react";

const PlayerDisplay = (props) => {
  return (
    <div className="ta-player-display">
      {props.selectedPlayers.map((player, index) => (
        <div className="ta-player-item" key={index}>
          <div className="ta-player-image-container">
            <img
              src={
                player.playerURL === ""
                  ? require("../../../Images/General/avatar-icon-v2.png")
                  : player.playerURL
              }
              className="ta-player-image"
              alt={player.playerName}
            />
          </div>
          <span className="ta-player-name">{player.playerName}</span>
        </div>
      ))}
    </div>
  );
};

export default PlayerDisplay;
