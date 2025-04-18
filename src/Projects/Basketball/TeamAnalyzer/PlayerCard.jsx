import React from "react";
import { Icon } from "semantic-ui-react";
import AutoCompleteInput from "../../../Utils/General/AutoCompleteInput";

const PlayerCard = (props) => {
  const defaultAvatarUrl =
    "https://portfolioappmedia.blob.core.windows.net/fantasybasketballimages/avatar-icon-v2.png";

  return (
    <div className="ta-player-card-container">
      <div className="ta-nav-button-container">
        <button
          className="ta-nav-button ta-prev-button"
          disabled={props.playerIndex === 0}
          onClick={() => props.setPlayerIndex(props.playerIndex - 1)}
        >
          <Icon name="angle left" />
        </button>

        <div className="ta-player-card">
          <div className="ta-card-content">
            <div className="ta-card-header">
              <div className="ta-headshot-container">
                <img
                  src={
                    props.selectedPlayer.playerURL === ""
                      ? defaultAvatarUrl
                      : props.selectedPlayer.playerURL
                  }
                  className="ta-headshot-image"
                  alt={props.selectedPlayer.playerName}
                />
              </div>

              <div className="ta-player-info">
                <h1 className="ta-player-card-name">
                  {props.selectedPlayer.playerName}
                </h1>
                <div className="ta-team-name">
                  {props.selectedPlayer.teamName
                    ? props.selectedPlayer.teamName
                    : "Team"}
                </div>
              </div>
            </div>

            <div className="ta-stats-grid">
              {props.selectedPlayer.stats.map((stat, index) => (
                <div key={index} className="ta-stat-card">
                  <div className="ta-stat-name">{stat.name.toUpperCase()}</div>
                  <div className="ta-stat-value">
                    {stat.name === "Field Goal %" ||
                    stat.name === "Free Throw %"
                      ? parseFloat((stat.value * 100).toFixed(1))
                      : stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          className="ta-nav-button ta-next-button"
          disabled={
            props.playerIndex === props.selectedPlayers.length - 1 ||
            !props.selectedPlayer.isPlayerChosen
          }
          onClick={() => props.setPlayerIndex(props.playerIndex + 1)}
        >
          <Icon name="angle right" />
        </button>
      </div>

      <div className="ta-input-container">
        <AutoCompleteInput
          suggestions={props.playerOptions}
          setPlayerNameInput={props.setPlayerNameInput}
          playerIndex={props.playerIndex}
        />
      </div>
    </div>
  );
};

export default PlayerCard;
