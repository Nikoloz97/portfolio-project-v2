import React from "react";

const PlayerDisplay = (props) => {
  const defaultAvatarUrl =
    "https://portfolioappmedia.blob.core.windows.net/fantasybasketballimages/avatar-icon-v2.png";
  return (
    <div className="ta-player-display">
      {props.selectedPlayers.map((player, index) => (
        <div className="ta-player-item" key={index}>
          <div className="ta-player-image-container">
            <img
              src={
                player.playerURL === "" ? defaultAvatarUrl : player.playerURL
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
