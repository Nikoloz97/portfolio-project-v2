import React, { useState } from "react";
import CountUp from "./CountUp";
import CountDown from "./Countdown";

function Stopwatch() {
  const [useCountUp, setUseCountUp] = useState(false);

  const toggleCountDirection = () => {
    if (!useCountUp) {
      setUseCountUp(true);
    } else {
      setUseCountUp(false);
    }
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>

      {!useCountUp && (
          <button onClick={toggleCountDirection}>Count Up</button>
        ) && <CountDown />}
      {useCountUp && (
          <button onClick={toggleCountDirection}>Count Down</button>
        ) && <CountUp />}
    </div>
  );
}

export default Stopwatch;
