import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./FantasyBasketball.css";

const FantasyBasketball = () => {
  const [isScheduleHovered, setIsScheduleHovered] = useState(false);
  const [isTeamHovered, setIsTeamHovered] = useState(false);
  const [isHeaderToFadeIn, setIsHeaderToFadeIn] = useState(false);
  const [isTeamButtonToBeInverted, setIsTeamButtonToBeInverted] =
    useState(false);
  const [isScheduleButtonToBeInverted, setIsScheduleButtonToBeInverted] =
    useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeaderToFadeIn(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="Default-Page">
      <div className="FB-Container">
        <div className={`FB-Header ${isHeaderToFadeIn ? "visible" : ""}`}>
          Fantasy Basketball Hub
        </div>
        <div className="FB-Button-Container">
          <div
            className={`Hub-Team-Analyzer ${isTeamHovered ? "Hovered" : ""}`}
            onMouseEnter={() => setIsTeamHovered(true)}
            onMouseLeave={() => setIsTeamHovered(false)}
          >
            <div
              onMouseEnter={() => setIsTeamButtonToBeInverted(true)}
              onMouseLeave={() => setIsTeamButtonToBeInverted(false)}
            >
              <Button
                as={Link}
                to="/projects/fantasy-basketball/team-analyzer"
                className="FB-Button"
                inverted={isTeamButtonToBeInverted}
              >
                Team Analyzer
              </Button>
            </div>
          </div>

          <div
            className={`Hub-Schedule-Analyzer ${
              isScheduleHovered ? "Hovered" : ""
            }`}
            onMouseEnter={() => setIsScheduleHovered(true)}
            onMouseLeave={() => setIsScheduleHovered(false)}
          >
            <div
              onMouseEnter={() => setIsScheduleButtonToBeInverted(true)}
              onMouseLeave={() => setIsScheduleButtonToBeInverted(false)}
            >
              <Button
                as={Link}
                to="/projects/fantasy-basketball/schedule-analyzer/"
                className="FB-Button"
                inverted={isScheduleButtonToBeInverted}
              >
                Schedule Analyzer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FantasyBasketball;
