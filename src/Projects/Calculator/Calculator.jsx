import React, { useState } from "react";
import "./Calculator.css";
import { Button } from "semantic-ui-react";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    setResult(result.concat(event.target.name));
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
      // TODO: Replace eval function (not best practice??)
      setResult(eval(result).toString());
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
          {/* name -> event.target.name */}
          <div className="Calc-Section-Container">
            {/* TODO: make sure this button works */}
            <Button name="%" onClick={handleClick}>
              %
            </Button>
            <Button name="7" onClick={handleClick}>
              7
            </Button>
            <Button name="8" onClick={handleClick}>
              8
            </Button>
            <Button name="9" onClick={handleClick}>
              9
            </Button>
            <Button name="/" onClick={handleClick}>
              /
            </Button>
          </div>
          <div className="Calc-Section-Container">
            {/* TODO: make sure this button works */}
            <Button name="sqr-root" onClick={handleClick}>
              sqr root
            </Button>
            <Button name="4" onClick={handleClick}>
              4
            </Button>
            <Button name="5" onClick={handleClick}>
              5
            </Button>
            <Button name="6" onClick={handleClick}>
              6
            </Button>
            <Button name="*" onClick={handleClick}>
              x
            </Button>
          </div>
          <div className="Calc-Section-Container">
            <Button onClick={clear}>Clear</Button>
            <Button name="1" onClick={handleClick}>
              1
            </Button>
            <Button name="2" onClick={handleClick}>
              2
            </Button>
            <Button name="3" onClick={handleClick}>
              3
            </Button>
            <Button name="-" onClick={handleClick}>
              -
            </Button>
          </div>
          <div className="Calc-Section-Container">
            <Button onClick={backspace}>C</Button>
            <Button name="0" onClick={handleClick}>
              0
            </Button>
            <Button name="." onClick={handleClick}>
              .
            </Button>
            <Button name="+" onClick={handleClick}>
              +
            </Button>
            <Button onClick={calculate}>=</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
