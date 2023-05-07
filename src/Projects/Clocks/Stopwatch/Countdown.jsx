import React, { useState, useEffect } from "react";

function CountDown() {
  const [secondsArray, setSecondsArray] = useState([0, 0]);
  const [minutesArray, setMinutesArray] = useState([0, 0]);
  const [hoursArray, setHoursArray] = useState([0, 0]);

  const numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const [clickCounter, setClickCounter] = 0;

  const handleClick = (event) => {
    // clickCounter = 1/2 = hours, 3/4 = minutes, 5/6 = seconds
    setClickCounter(clickCounter + 1);

    switch (clickCounter) {
      case 1:
        setHoursArray((hoursArray[1] = event.target.name));
        break;
      case 2:
        setHoursArray((hoursArray[0] = event.target.name));
        break;
      case 3:
        setMinutesArray((minutesArray[1] = event.target.name));
        break;

      case 4:
        // Cannot have greater than 59 minutes
        if (event.target.name < 6) {
          setMinutesArray((minutesArray[0] = event.target.name));
          break;
        } else {
          break;
        }
      case 5:
        setSecondsArray((secondsArray[0] = event.target.name));
        break;
      case 6:
        // Cannot have greater than 59 seconds
        if (event.target.name < 6) {
          setSecondsArray((secondsArray[1] = event.target.name));
          break;
        } else {
          break;
        }
      default:
        break;
    }
  };

  const reset = () => {
    setSecondsArray([0, 0]);
    setMinutesArray([0, 0]);
    setHoursArray([0, 0]);
  };

  const start = () => {};

  const displayTime = () => {
    return `${hoursArray[0]}:
            ${hoursArray[1]}:
            ${minutesArray[0]}:
            ${minutesArray[1]}:
            ${secondsArray[1]}:
            ${secondsArray[0]}`;
  };

  useEffect(() => {
    let countdownInterval;
    if (
      secondsArray[0] > 0 ||
      secondsArray[1] > 0 ||
      minutesArray[0] > 0 ||
      secondsArray[1] > 0 ||
      hoursArray[0] > 0 ||
      hoursArray[1] > 0
    ) {
      countdownInterval = setInterval(() => {
        if (secondsArray[1] > 0) {
          setSecondsArray(secondsArray[1] - 1);
        } else if (secondsArray[0] > 0) {
          setSecondsArray(secondsArray[0] - 1);
        } else if (minutesArray[1] > 0) {
          setMinutesArray(minutesArray[1] - 1);
        } else if (minutesArray[0] > 0) {
          setMinutesArray(minutesArray[0] - 1);
        } else if (hoursArray[1] > 0) {
          setHoursArray(hoursArray[1] - 1);
        } else if (hoursArray[0] > 0) {
          setHoursArray(hoursArray[0] - 1);
        }
      }, 1000);
    }
    return () => clearInterval(countdownInterval);
  }, [secondsArray, minutesArray, hoursArray]);

  return (
    <div>
      <div className="SW">
        <div className="Display"> {displayTime}</div>

        {numberButtons.map((item) => (
          <button key={item} name={item} onClick={handleClick}>
            {item}
          </button>
        ))}
        <button onClick={reset}>Reset</button>
        <button onClick={start}>Start</button>
      </div>

      <div className="Alarm"></div>
    </div>
  );
}

export default CountDown;
