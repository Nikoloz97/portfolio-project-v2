import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./FantasyBasketball.css";

const FantasyBasketball = () => {
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
          <Button as={Link} to="/projects/fantasy-basketball/team-analyzer">
            Team Analyzer
          </Button>
          <Button
            as={Link}
            to="/projects/fantasy-basketball/schedule-analyzer/"
          >
            Schedule Analyzer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FantasyBasketball;
