import React, { useState } from "react";
import Stopwatch from "./Stopwatch/Stopwatch";
import Alarm from "./Alarm/Alarm";
import Clock from "./Clock/Clock";
import { Button, Icon } from "semantic-ui-react";
import "./Kronos.css";

function Kronos() {
  const toolTextDisplays = ["Stopwatch", "Alarm", "Clock"];
  const [currentToolIndex, setCurrentToolIndex] = useState(0);

  const renderTool = () => {
    switch (currentToolIndex) {
      case 0:
        return <Stopwatch />;
      case 1:
        return <Alarm />;
      case 2:
        return <Clock />;
      default:
        return null;
    }
  };

  const handlePreviousClick = () => {
    if (currentToolIndex > 0) {
      setCurrentToolIndex(currentToolIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentToolIndex < 2) {
      setCurrentToolIndex(currentToolIndex + 1);
    }
  };

  return (
    <div className="Kronos-Page">
      <div className="Kronos-Prev-Next-Container">
        <Button disabled={currentToolIndex === 0} onClick={handlePreviousClick}>
          <Icon name="arrow left" style={{ marginRight: "10px" }} />
        </Button>
        <div style={{ width: "4em" }}>
          {currentToolIndex > 0 && (
            <h3>{toolTextDisplays[currentToolIndex - 1]}</h3>
          )}
        </div>
      </div>

      <div style={{ width: "33%", display: "flex", justifyContent: "center" }}>
        {renderTool()}
      </div>

      <div className="Kronos-Prev-Next-Container">
        <div style={{ width: "4em" }}>
          <h3>{toolTextDisplays[currentToolIndex + 1]}</h3>
        </div>
        <Button disabled={currentToolIndex === 2} onClick={handleNextClick}>
          <Icon name="arrow right" style={{ marginRight: "10px" }} />
        </Button>
      </div>
    </div>
  );
}

export default Kronos;
