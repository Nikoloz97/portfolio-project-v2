import React, { useState, useEffect } from "react";

function ClockDisplay() {
  const [time, setTime] = useState(new Date());

  const [startTracking, setStartTracking] = useState(false);

  const [ButtonDisplay, setButtonDisplay] = useState("Show");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [startTracking]);

  const handleClick = () => {
    if (ButtonDisplay === "Show") {
      setStartTracking(true);
      setButtonDisplay("Hide");
    } else {
      setStartTracking(false);
      setButtonDisplay("Show");
    }
  };

  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  // TODO: Figure out why first div's curly = updating even though second
  // startTracking isn't changed yet (see useEffect's 2nd param)
  return (
    <div>
      <h1>Clock</h1>
      <div>{time.toLocaleTimeString("en-US", options)}</div>
      <div>
        {startTracking ? time.toLocaleTimeString("en-US", options) : null}
      </div>
      <button onClick={handleClick}>{ButtonDisplay}</button>
    </div>
  );
}

export default ClockDisplay;
