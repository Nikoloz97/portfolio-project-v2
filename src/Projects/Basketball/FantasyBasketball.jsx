import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./FantasyBasketball.css";

const FantasyBasketball = () => {
  const [isScheduleHovered, setIsScheduleHovered] = useState(false);
  const [isTeamHovered, setIsTeamHovered] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="Default-Page">
      <div className="FB-Container">
        <div className={`FB-Header ${fadeIn ? "visible" : ""}`}>
          Fantasy Basketball Hub
        </div>
        <div className="FB-Button-Container">
          <div
            className={`Hub-Team-Analyzer ${isTeamHovered ? "Hovered" : ""}`}
            onMouseEnter={() => setIsTeamHovered(true)}
            onMouseLeave={() => setIsTeamHovered(false)}
          >
            <Button
              as={Link}
              to="/projects/fantasy-basketball/team-analyzer"
              className="FB-Button"
            >
              Team Analyzer
            </Button>
          </div>

          <div
            className={`Hub-Schedule-Analyzer ${
              isScheduleHovered ? "Hovered" : ""
            }`}
            onMouseEnter={() => setIsScheduleHovered(true)}
            onMouseLeave={() => setIsScheduleHovered(false)}
          >
            <Button
              as={Link}
              to="/projects/fantasy-basketball/schedule-analyzer/"
              className="FB-Button"
            >
              Schedule Analyzer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FantasyBasketball;
