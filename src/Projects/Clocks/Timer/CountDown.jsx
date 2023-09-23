import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";

function CountDown() {
  // Just use this file as reference in building new timer file (if app.)
  // Fix countdown (not working)
  // Whenever minute decreases, seconds = go up to 59 (same for hours-minutes)

  const [timeArray, setTimeArray] = useState([0, 0, 0, 0, 0, 0]);

  const numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const [clickCounter, setClickCounter] = useState(0);

  const [sum, setSum] = useState(0);

  let updatedTimeArray = [...timeArray];

  let updatedClickCounter = clickCounter;

  const [isStartClicked, setIsStartClicked] = useState(false);

  const handleNumberButtonClick = (event) => {
    // clickCounter = 1/2 = hours, 3/4 = minutes, 5/6 = seconds

    updatedClickCounter++;

    setClickCounter(updatedClickCounter);

    // TODO: figure out why ClickCounter cannot be placed in this switch statement
    switch (updatedClickCounter) {
      case 1:
        updatedTimeArray[0] = Number(event.target.name);
        setTimeArray(updatedTimeArray);
        break;

      case 2:
        updatedTimeArray[1] = Number(event.target.name);
        setTimeArray(updatedTimeArray);
        break;

      case 3:
        // Cannot have greater than 59 minutes
        if (event.target.name < 6) {
          updatedTimeArray[2] = Number(event.target.name);
          setTimeArray(updatedTimeArray);
        } else {
          setClickCounter(updatedClickCounter - 1);
        }
        console.log("Oops try again: put in a number lower than 6");
        break;

      case 4:
        updatedTimeArray[3] = Number(event.target.name);
        setTimeArray(updatedTimeArray);
        break;

      case 5:
        // Cannot have greater than 59 minutes
        if (event.target.name < 6) {
          updatedTimeArray[4] = Number(event.target.name);
          setTimeArray(updatedTimeArray);
        } else {
          setClickCounter(updatedClickCounter - 1);
        }
        console.log("Oops try again: put in a number lower than 6");
        break;

      case 6:
        updatedTimeArray[5] = Number(event.target.name);
        setTimeArray(updatedTimeArray);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setTimeArray([0, 0, 0, 0, 0, 0]);
    setClickCounter(0);
    setIsStartClicked(false);
    setSum(0);
  };

  const start = () => {
    setIsStartClicked(true);

    let sumVal = 0;

    timeArray.forEach((number) => {
      sumVal += number;
    });

    setSum(sumVal);
  };

  const stop = () => {
    setIsStartClicked(false);
  };

  let displayTime = `${timeArray[0]}${timeArray[1]}:${timeArray[2]}${timeArray[3]}:${timeArray[4]}${timeArray[5]}`;

  useEffect(() => {
    if (isStartClicked) {
      let countdownInterval;

      let updatedArray2 = [...timeArray];

      if (sum !== 0) {
        let newSum = sum - 1;
        setSum(newSum);
        countdownInterval = setInterval(() => {
          if (timeArray[5] === 0 && timeArray[4] === 0)
            if (timeArray[5] > 0) {
              updatedArray2[5] = timeArray[5] - 1;
            } else if (timeArray[4] > 0) {
              updatedArray2[4] = timeArray[4] - 1;
            } else if (timeArray[3] > 0) {
              updatedArray2[3] = timeArray[3] - 1;
            } else if (timeArray[2] > 0) {
              updatedArray2[2] = timeArray[2] - 1;
            } else if (timeArray[1] > 0) {
              updatedArray2[1] = timeArray[1] - 1;
            } else if (timeArray[0] > 0) {
              updatedArray2[0] = timeArray[0] - 1;
            }

          setTimeArray(updatedArray2);
        }, 1000);
      }
      return () => clearInterval(countdownInterval);
    }
  }, [isStartClicked, sum, timeArray]);

  return (
    <div>
      <div className="SW">
        <div className="Container">
          <div className="Display">{displayTime}</div>
        </div>

        {numberButtons.map((item) => (
          <Button onClick={handleNumberButtonClick}>{item}</Button>
        ))}
        <Button onClick={reset}>Reset</Button>
        <Button onClick={start}>Start</Button>
        <Button onClick={stop}>Stop</Button>
      </div>
    </div>
  );
}

export default CountDown;
