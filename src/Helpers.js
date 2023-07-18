import React from "react";

export const postDateFormatter = (stringDate) => {
  let splitDateArray = stringDate.split("-");
  const formattedMonth = monthConverter(splitDateArray[1]);
  const formattedDay = dayTimeConverter(splitDateArray[2])[0];
  const formattedTime = dayTimeConverter(splitDateArray[2])[1];
  return `${formattedMonth}-${formattedDay}-${splitDateArray[0]} (${formattedTime})`;
};

export const commentDateFormatter = (stringDate) => {};

const dayTimeConverter = (dayTimeInput) => {
  let splitDayTimeArray = dayTimeInput.split("T");
  const convertedTime = timeConverter(splitDayTimeArray[1]);
  splitDayTimeArray[1] = convertedTime;
  return splitDayTimeArray;
};

const timeConverter = (timeInput) => {
  let splitTimeArray = timeInput.split(":");
  let hour = splitTimeArray[0];
  let minute = splitTimeArray[1];
  let meridiem = "am";
  let formattedHour = hour;
  if (hour >= 12) {
    meridiem = "pm";
    if (hour > 12) {
      formattedHour -= 12;
    }
  }
  return `${formattedHour}:${minute} ${meridiem}`;
};

const monthConverter = (numericMonth) => {
  let convertedMonth;
  switch (numericMonth) {
    case "01":
      convertedMonth = "Jan";
      break;
    case "02":
      convertedMonth = "Feb";
      break;
    case "03":
      convertedMonth = "Mar";
      break;
    case "04":
      convertedMonth = "Apr";
      break;
    case "05":
      convertedMonth = "May";
      break;
    case "06":
      convertedMonth = "Jun";
      break;
    case "07":
      convertedMonth = "Jul";
      break;
    case "08":
      convertedMonth = "Aug";
      break;
    case "09":
      convertedMonth = "Sept";
      break;
    case "10":
      convertedMonth = "Oct";
      break;
    case "11":
      convertedMonth = "Nov";
      break;
    case "12":
      convertedMonth = "Dec";
      break;
    default:
      convertedMonth = "InvalidMonth";
      break;
  }
  return convertedMonth;
};
