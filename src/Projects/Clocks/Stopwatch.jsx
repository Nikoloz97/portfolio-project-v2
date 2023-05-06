import React, { useState } from "react";

function Stopwatch() {
  const [input, setInput] = useState("");

  const numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const handleClick = (event) => {
    setInput(input.concat(event.target.name));
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const clear = () => {
    setInput("");
  };
  return (
    <div>
      <div className="SW">
        <h2>Stopwatch</h2>
        <div className="Display">{input}</div>
        {numberButtons.map((item) => (
          <button key={item} name={item} onClick={handleClick}>
            {item}
          </button>
        ))}

        <button onClick={backspace}>C</button>
        <button onClick={clear}>Clear</button>
        <button name="submit">Start</button>
      </div>

      <div className="Alarm"></div>
    </div>
  );
}

export default Stopwatch;
