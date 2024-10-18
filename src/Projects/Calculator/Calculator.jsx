import React, { useState } from "react";
import "./Calculator.css";
import { Button } from "semantic-ui-react";
import { evaluate } from "mathjs";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    setResult(result.concat(event.target.name));
  };

  const calculateSquareRoot = () => {
    try {
      const sqrtResult = evaluate(`sqrt(${result})`);
      setResult(sqrtResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(evaluate(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="Default-Page">
      <h1>Calculator Project</h1>
      <div className="Calc-Display-Buttons-Container">
        <div className="Calc-Display">{result}</div>
        <div className="Calc-Buttons-Container">
          <div className="Calc-Circular-Buttons-Container">
            <Button
              className="Calc-Circular-Button"
              name="%"
              onClick={handleClick}
            >
              %
            </Button>
            <Button
              className="Calc-Circular-Button"
              name="√"
              onClick={calculateSquareRoot}
            >
              √
            </Button>
            <Button className="Calc-Circular-Button" onClick={clear}>
              Clear
            </Button>
            <Button className="Calc-Circular-Button" onClick={backspace}>
              C
            </Button>
          </div>

          <div className="Calc-Number-Buttons-Container">
            <div className="Calc-Number-Buttons-Row">
              <Button name="7" onClick={handleClick}>
                7
              </Button>
              <Button name="8" onClick={handleClick}>
                8
              </Button>
              <Button name="9" onClick={handleClick}>
                9
              </Button>
            </div>
            <div className="Calc-Number-Buttons-Row">
              <Button name="4" onClick={handleClick}>
                4
              </Button>
              <Button name="5" onClick={handleClick}>
                5
              </Button>
              <Button name="6" onClick={handleClick}>
                6
              </Button>
            </div>
            <div className="Calc-Number-Buttons-Row">
              <Button name="1" onClick={handleClick}>
                1
              </Button>
              <Button name="2" onClick={handleClick}>
                2
              </Button>
              <Button name="3" onClick={handleClick}>
                3
              </Button>
            </div>
            <div className="Calc-Number-Buttons-Row">
              <Button name="0" onClick={handleClick}>
                0
              </Button>
              <Button name="." onClick={handleClick}>
                .
              </Button>
            </div>
          </div>

          <div className="Calc-Circular-Buttons-Container">
            <Button
              className="Calc-Circular-Button"
              name="/"
              onClick={handleClick}
            >
              /
            </Button>
            <Button
              className="Calc-Circular-Button"
              name="*"
              onClick={handleClick}
            >
              *
            </Button>
            <Button
              className="Calc-Circular-Button"
              name="-"
              onClick={handleClick}
            >
              -
            </Button>
            <Button
              className="Calc-Circular-Button"
              name="+"
              onClick={handleClick}
            >
              +
            </Button>
          </div>
        </div>
        <div className="Calc-Equals-Button-Container">
          <Button className="Calc-Equals-Button" onClick={calculate}>
            =
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
