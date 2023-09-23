import React from "react";
import Stopwatch from "./Stopwatch/Stopwatch";
import Alarm from "./Alarm/Alarm";
import ClockDisplay from "./Clock/Clock";

function Chronos() {
  return (
    <div className="Default-Page">
      <Stopwatch />
      <Alarm />
      <ClockDisplay />
    </div>
  );
}

export default Chronos;
