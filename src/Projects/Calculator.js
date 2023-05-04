import React, { useState } from "react";
import "../App.css";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    setResult(result.concat(event.target.name));
    console.log(event);
  };

  const clear = () => {
    setResult("");
  };

  // -1 = last item in array = omitted
  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
      console.log(result);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="Default-Page">
      <h1>Calculator Project</h1>
      <div className="Display-Screen">{result}</div>
      <div className="Keys">
        <button className="Clear" onClick={clear}>
          Clear
        </button>
        <button className="Backspace" onClick={backspace}>
          C
        </button>

        {/* name -> event.target.name */}
        <button name="+" onClick={handleClick}>
          +
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="-" onClick={handleClick}>
          -
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="*" onClick={handleClick}>
          x
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="/" onClick={handleClick}>
          /
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
