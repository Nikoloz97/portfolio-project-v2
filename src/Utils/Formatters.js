export const postDateFormatter = (stringDate) => {
  let splitDateArray = stringDate.split("-");
  const year = splitDateArray[0];
  const month = splitDateArray[1];
  const dayTime = splitDateArray[2];
  const formattedMonth = monthConverter(month);
  const formattedDay = dayTimeConverter(dayTime)[0];
  const formattedTime = dayTimeConverter(dayTime)[1];
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();

  if (year === currentYear) {
    // On the same month
    if (month === currentMonth) {
      // On the same day
      if (formattedDay === currentDay) {
        // ... Then indicate time
        return `$ Today (${formattedTime})`;
      }
    }
    // If same year, don't indicate year
    return `${formattedMonth}-${formattedDay}`;
  }
  // If different year, indicate year
  return `${formattedMonth}-${formattedDay}-${year}`;
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
