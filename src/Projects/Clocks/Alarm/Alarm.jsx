import React, { useState, useEffect } from "react";
import "./Alarm.css";
import { Button, Input } from "semantic-ui-react";

function Alarm() {
  const [inputTime, setInputTime] = useState("");
  const [alarmTime, setAlarmTime] = useState(new Date());
  const [isCountdownBegun, setIsCountdownBegun] = useState(false);
  const [isTimeSet, setIsTimeSet] = useState(false);
  const [isRinging, setIsRinging] = useState(false);
  const [milliSecondsRemaining, setMillisecondsRemaining] = useState(0);

  useEffect(() => {
    if (inputTime) {
      const timer = setInterval(updateRemainingTime, 1000);
      return () => clearInterval(timer);
    }
  }, [milliSecondsRemaining]);

  const handleTimeChange = (event) => {
    setIsTimeSet(true);
    setInputTime(event.target.value);
  };

  const updateRemainingTime = () => {
    if (inputTime) {
      const currentTime = new Date();
      setMillisecondsRemaining(alarmTime - currentTime);
    }
  };

  const formatTime = (milliSeconds) => {
    const hours = Math.floor(milliSeconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliSeconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliSeconds % (1000 * 60)) / 1000);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleStartAlarm = () => {
    setIsCountdownBegun(true);

    const currentTime = new Date();
    const [hours, minutes] = inputTime.split(":");
    const tempAlarmTime = new Date();
    tempAlarmTime.setHours(hours);
    tempAlarmTime.setMinutes(minutes);

    // If alarmTime = earlier than currentTime, push it for next day
    if (tempAlarmTime < currentTime) {
      setAlarmTime(tempAlarmTime.setDate(currentTime.getDate() + 1));
    } else {
      setAlarmTime(tempAlarmTime);
    }

    const millisecondsUntilAlarm = tempAlarmTime - currentTime;

    setMillisecondsRemaining(millisecondsUntilAlarm);
  };

  const handleReset = () => {
    setIsCountdownBegun(false);
    setInputTime("");
    setIsRinging(false);
    setIsTimeSet(false);
  };

  return (
    <div className="Alarm-Container">
      <div className="Alarm-Display-Container">
        {isCountdownBegun ? (
          <div className="Alarm-Time-Display">
            <Button
              style={{ marginTop: "0.2em" }}
              color="red"
              onClick={handleReset}
            >
              Reset
            </Button>
            <div style={{ marginTop: "1.5em" }}>
              {isRinging ? (
                <div>Alarm is ringing!</div>
              ) : (
                <div>{formatTime(milliSecondsRemaining)}</div>
              )}
            </div>
          </div>
        ) : (
          <div className="Alarm-Input-Start-Container">
            <h1 style={{ textAlign: "center" }}>Alarm</h1>
            <Button
              style={{ marginTop: "0.2em" }}
              color="red"
              disabled={!isTimeSet}
              onClick={handleStartAlarm}
            >
              Start
            </Button>
            <Input
              className="Alarm-Input"
              type="time"
              value={inputTime}
              onChange={handleTimeChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Alarm;
