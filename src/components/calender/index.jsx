import React, { useState } from "react";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";

function CustomCalender() {
  const defaultValue = {
    year: 2019,
    month: 10,
    day: 5,
  };
  const [selectedDay, setSelectedDay] = useState(defaultValue);
  const [calendarState, setCalenderState] = useState(false);

  const myCustomLocale = {
    // months list by order
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],

    // week days by order
    weekDays: [
      {
        name: "Sunday", // used for accessibility
        short: "Sun", // displayed at the top of days' rows
        isWeekend: true, // is it a formal weekend or not?
      },
      {
        name: "Monday",
        short: "Mon",
      },
      {
        name: "Tuesday",
        short: "Tue",
      },
      {
        name: "Wednesday",
        short: "Wed",
      },
      {
        name: "Thursday",
        short: "Thu",
      },
      {
        name: "Friday",
        short: "Fri",
      },
      {
        name: "Saturday",
        short: "Sat",
        isWeekend: true,
      },
    ],

    // just play around with this number between 0 and 6
    weekStartingIndex: 0,

    // return a { year: number, month: number, day: number } object
    getToday(gregorainTodayObject) {
      return gregorainTodayObject;
    },

    // return a native JavaScript date here
    toNativeDate(date) {
      return new Date(date.year, date.month - 1, date.day);
    },

    // return a number for date's month length
    getMonthLength(date) {
      return new Date(date.year, date.month, 0).getDate();
    },

    // return a transformed digit to your locale
    transformDigit(digit) {
      return digit;
    },

    // texts in the date picker
    nextMonth: "Next Month",
    previousMonth: "Previous Month",
    openMonthSelector: "Open Month Selector",
    openYearSelector: "Open Year Selector",
    closeMonthSelector: "Close Month Selector",
    closeYearSelector: "Close Year Selector",
    defaultPlaceholder: "Select...",

    // for input range value
    from: "from",
    to: "to",

    // used for input value when multi dates are selected
    digitSeparator: ",",

    // if your provide -2 for example, year will be 2 digited
    yearLetterSkip: 0,

    // is your language rtl or ltr?
    isRtl: false,
  };

  return (
    <div>
      <button onClick={() => setCalenderState(!calendarState)}>
        Toggle Calender
      </button>
      {calendarState && (
        <div>
          <h1>kkk</h1>
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            inputPlaceholder="Select a day"
            colorPrimary="#E81E61"
            locale={myCustomLocale}
            calendarClassName="my_calender"
            calendarSelectedDayClassName="active_date"
          />
        </div>
      )}
    </div>
  );
}

export default CustomCalender;
