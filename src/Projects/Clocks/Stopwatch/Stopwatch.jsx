import React, { useState, useRef } from "react";
import { Button } from "semantic-ui-react";
import "./Stopwatch.css";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef();

  const start = () => {
    if (!isRunning) {
      const startTime = Date.now() - elapsedTime;
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10);

      setIsRunning(true);
    }
  };

  const stop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setElapsedTime(0);
    setIsRunning(false);
  };

  // Custom function by react
  // time = required of the function (see display div)
  const formatTime = (time) => {
    const milliseconds = `0${time % 1000}`.slice(-3);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 1000 / 60) % 60)}`.slice(-2);
    const hours = `0${Math.floor(time / 1000 / 3600)}`.slice(-2);
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="Stopwatch-Container">
      <h1 style={{ textAlign: "center" }}>Stopwatch</h1>
      <div className="Stopwatch-Display">{formatTime(elapsedTime)}</div>
      <div className="Stopwatch-Button-Container">
        {isRunning ? (
          <Button className="Stopwatch-Button" onClick={stop}>
            Stop
          </Button>
        ) : (
          <Button className="Stopwatch-Button" onClick={start}>
            Start
          </Button>
        )}
        <Button className="Stopwatch-Button" onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default Stopwatch;
