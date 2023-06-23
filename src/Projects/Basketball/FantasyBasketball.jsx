import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const FantasyBasketball = () => {
  return (
    <div className="Default-Page">
      <div>Welcome to the Fantasy Basketball Project</div>
      <Button as={Link} to="/projects/fantasy-basketball/team-analyzer">
        Team Analyzer
      </Button>
      <Button as={Link} to="/projects/fantasy-basketball/schedule-analyzer/">
        Schedule Analyzer
      </Button>
    </div>
  );
};

export default FantasyBasketball;
