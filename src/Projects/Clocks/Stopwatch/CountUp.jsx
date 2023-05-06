import React, { useState, useRef } from "react";

function CountUp() {
  const [running, setRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef();

  const start = () => {
    if (!running) {
      const startTime = Date.now() - elapsedTime;
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10);

      setRunning(true);
    }
  };

  const stop = () => {
    if (running) {
      clearInterval(intervalRef.current);
      setRunning(false);
    }
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setElapsedTime(0);
    setRunning(false);
  };

  // Custom function by react
  // time = required of the function (see display div)
  const formatTime = (time) => {
    const milliseconds = `0${time % 1000}`.slice(-3);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 1000 / 60) % 60)}`.slice(-2);
    const hours = `0${Math.floor(time / 1000 / 3600)}`.slice(-2);
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="countUp">
      <div className="display"> {formatTime(elapsedTime)}</div>
      <div className="controls">
        {!running && <button onClick={start}>Start</button>}
        {running && <button onClick={stop}>Stop</button>}
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default CountUp;
