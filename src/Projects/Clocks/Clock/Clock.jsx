import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import "./Clock.css";

function ClockDisplay() {
  const [time, setTime] = useState(new Date());
  const [ButtonDisplay, setButtonDisplay] = useState("24 hr");

  const [isTwelveHour, setIsTwelveHour] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClockTypeConversion = () => {
    if (ButtonDisplay === "24 hr") {
      setButtonDisplay("12 hr");
    } else {
      setButtonDisplay("24 hr");
    }
    const tempIsTwelveHour = isTwelveHour;
    setIsTwelveHour(!tempIsTwelveHour);
  };

  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: isTwelveHour,
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "4em" }}>Clock</h1>
      <div className="Clock-Button-Container">
        <Button onClick={handleClockTypeConversion}>{ButtonDisplay}</Button>
        <div className="Clock-Container">
          {time.toLocaleTimeString("en-US", options)}
        </div>
      </div>
    </div>
  );
}

export default ClockDisplay;
