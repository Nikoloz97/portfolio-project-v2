import React, { useState } from "react";
import Stopwatch from "./Stopwatch/Stopwatch";
import Alarm from "./Alarm/Alarm";
import Clock from "./Clock/Clock";
import { Button, Icon } from "semantic-ui-react";

function Kronos() {
  const [currentTool, setCurrentTool] = useState(1);

  const renderTool = () => {
    switch (currentTool) {
      case 1:
        return <Stopwatch />;
      case 2:
        return <Alarm />;
      case 3:
        return <Clock />;
      default:
        return null;
    }
  };

  const handlePreviousClick = () => {
    if (currentTool > 1) {
      setCurrentTool(currentTool - 1);
    }
  };

  const handleNextClick = () => {
    if (currentTool < 3) {
      setCurrentTool(currentTool + 1);
    }
  };

  return (
    <div className="Default-Page">
      {renderTool()}
      <Button
        disabled={currentTool > 1 ? false : true}
        onClick={handlePreviousClick}
      >
        <Icon name="arrow left" style={{ marginRight: "10px" }} />
      </Button>
      <Button
        disabled={currentTool < 3 ? false : true}
        onClick={handleNextClick}
      >
        <Icon name="arrow right" style={{ marginRight: "10px" }} />
      </Button>
    </div>
  );
}

export default Kronos;
