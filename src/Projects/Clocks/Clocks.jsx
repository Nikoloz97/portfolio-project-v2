import React from "react";
import Stopwatch from "./Stopwatch/Stopwatch";
import Alarm from "./Alarm";
import ClockDisplay from "./ClockDisplay";

function Clocks() {
  return (
    <div className="Default-Page">
      <h1>Clocks Project</h1>
      <Stopwatch />
      <Alarm />
      <ClockDisplay />
    </div>
  );
}

export default Clocks;
