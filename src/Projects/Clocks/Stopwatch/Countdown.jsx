import React, { useState, useEffect } from "react";

function CountDown() {
  // TODO: Create a sum variable (keeps track when useEffect stops)
  // TODO: Whenever minute decreases, seconds = go up to 59 (same for hours-minutes)

  const [timeArray, setTimeArray] = useState([0, 0, 0, 0, 0, 0]);

  const numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const [clickCounter, setClickCounter] = useState(0);

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
        updatedTimeArray[0] = event.target.name;
        setTimeArray(updatedTimeArray);
        break;

      case 2:
        updatedTimeArray[1] = event.target.name;
        setTimeArray(updatedTimeArray);
        break;

      case 3:
        // Cannot have greater than 59 minutes
        if (event.target.name < 6) {
          updatedTimeArray[2] = event.target.name;
          setTimeArray(updatedTimeArray);
        } else {
          setClickCounter(updatedClickCounter - 1);
        }
        console.log("Oops try again: put in a number lower than 6");
        break;

      case 4:
        updatedTimeArray[3] = event.target.name;
        setTimeArray(updatedTimeArray);
        break;

      case 5:
        // Cannot have greater than 59 minutes
        if (event.target.name < 6) {
          updatedTimeArray[4] = event.target.name;
          setTimeArray(updatedTimeArray);
        } else {
          setClickCounter(updatedClickCounter - 1);
        }
        console.log("Oops try again: put in a number lower than 6");
        break;

      case 6:
        updatedTimeArray[5] = event.target.name;
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
  };

  const start = () => {
    setIsStartClicked(true);
  };

  const stop = () => {
    setIsStartClicked(false);
  };

  const displayTime = () => {
    return `${timeArray[0]}:
            ${timeArray[1]}:
            ${timeArray[2]}:
            ${timeArray[3]}:
            ${timeArray[4]}:
            ${timeArray[5]}`;
  };

  useEffect(() => {
    if (isStartClicked) {
      let countdownInterval;

      let updatedArray2 = [...timeArray];

      if (!timeArray.includes(0)) {
        countdownInterval = setInterval(() => {
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
  }, [timeArray, isStartClicked]);

  return (
    <div>
      <div className="SW">
        <div> {displayTime} </div>

        {numberButtons.map((item) => (
          <button key={item} name={item} onClick={handleNumberButtonClick}>
            {item}
          </button>
        ))}
        <button onClick={reset}>Reset</button>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
      </div>

      <div className="Alarm"></div>
    </div>
  );
}

export default CountDown;
