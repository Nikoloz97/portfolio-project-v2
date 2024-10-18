import React, { useState, useEffect } from "react";
import "./Alarm.css";
import { Button, Input } from "semantic-ui-react";

function Alarm() {
  const [inputTime, setInputTime] = useState("");
  const [beginCountdown, setBeginCountdown] = useState(false);
  const [isRinging, setIsRinging] = useState(false);
  const [remainingTime, setRemainingTime] = useState(inputTime - new Date());

  const handleTimeChange = (event) => {
    setInputTime(event.target.value);
  };

  const updateRemainingTime = () => {
    setRemainingTime(inputTime - new Date());
  };

  // TODO: fix the display problem - either this function, the remainingTime state (param), or both
  const formatTime = (time) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const startAlarm = () => {
    setBeginCountdown(true);

    const currentTime = new Date();
    const [hours, minutes] = inputTime.split(":");
    const alarmTime = new Date();
    alarmTime.setHours(hours);
    alarmTime.setMinutes(minutes);

    // If alarmTime = earlier than currentTime, push it for next day
    if (alarmTime < currentTime) {
      alarmTime.setDate(currentTime.getDate() + 1);
    }

    const timeUntilAlarm = alarmTime - currentTime;

    // Should this timer variable be used somewhere?
    const timer = setTimeout(() => {
      setIsRinging(true);
    }, timeUntilAlarm);
  };

  useEffect(() => {
    const timer = setInterval(updateRemainingTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="Alarm-Container">
      <h1 style={{ textAlign: "center" }}>Alarm</h1>

      <div className="Alarm-Display-Container">
        {beginCountdown ? (
          <div className="Alarm-Time-Display">
            {isRinging ? <h2>Alarm is ringing!</h2> : formatTime(remainingTime)}
          </div>
        ) : (
          <div className="Alarm-Input-Start-Container">
            <Button
              style={{ marginTop: "0.2em" }}
              color="red"
              onClick={startAlarm}
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
