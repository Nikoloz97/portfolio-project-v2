import React, { useState, useEffect } from "react";

function Alarm() {
  const [inputTime, setInputTime] = useState("");
  const [beginCoutndown, setBeginCountdown] = useState(false);
  const [isRinging, setIsRinging] = useState(false);
  const [remainingTime, setRemainingTime] = useState(inputTime - new Date());

  const handleTimeChange = (event) => {
    setInputTime(event.target.value);
  };

  const updateRemainingTime = () => {
    setRemainingTime(inputTime - new Date());
  };

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

    const timer = setTimeout(() => {
      setIsRinging(true);
    }, timeUntilAlarm);
  };

  useEffect(() => {
    const timer = setInterval(updateRemainingTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Alarm</h1>
      {beginCoutndown ? <p>{formatTime(remainingTime)}</p> : null}
      <input type="time" value={inputTime} onChange={handleTimeChange} />
      {isRinging ? <p>Alarm is ringing!</p> : null}
      <button onClick={startAlarm}>Start</button>
    </div>
  );
}

export default Alarm;
