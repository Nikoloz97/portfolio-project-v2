import React from "react";
import Stopwatch from "./Stopwatch/Stopwatch";
import Alarm from "./Alarm";

function Clocks() {
  return (
    <div className="Default-Page">
      <h1>Clocks Project</h1>
      <Stopwatch />
      <Alarm />
    </div>
  );
}

export default Clocks;
