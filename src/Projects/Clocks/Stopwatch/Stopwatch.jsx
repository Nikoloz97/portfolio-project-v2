import React, { useState } from "react";
import CountUp from "./CountUp";
import CountDown from "./CountDown";

function Stopwatch() {
  const [useCountUp, setUseCountUp] = useState(false);

  const [buttonDisplay, setButtonDisplay] = useState("Count Up");

  const toggleCountDirection = () => {
    if (!useCountUp) {
      setUseCountUp(true);
      setButtonDisplay("Count Down");
    } else {
      setUseCountUp(false);
      setButtonDisplay("Count Up");
    }
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>

      {/* TODO: fix countdown component */}
      {/* {!useCountUp && <CountDown />} */}

      {useCountUp && <CountUp />}

      <button onClick={toggleCountDirection}>{buttonDisplay}</button>
    </div>
  );
}

export default Stopwatch;
