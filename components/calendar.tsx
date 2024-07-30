"use client";
import React from "react";
import { Calendar } from "@nextui-org/calendar";
import {
  today,
  getLocalTimeZone,
  isWeekend,
  CalendarDate,
} from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";

// import { parseDate } from "@internationalized/date";

const CalendarComponent = ({ calDate, handleCalDate, handleRecipe }) => {
  const establishWeekly = (date, days, weeks) => {
    let spread = [];

    for (let i = 0; i < weeks; i++) {
      let start = date.add({ days: 1 + i * 7 });
      let end = date.add({ days: days + i * 7 });

      spread.push([start, end]);
    }

    return spread;
  };

  let now = today(getLocalTimeZone());
  let date = new CalendarDate(2024, 7, 17);
  let disabledRanges = establishWeekly(date, 6, 14);
  let { locale } = useLocale();
  const maxValue = now.add({ months: 3 });

  let isDateUnavailable = (date) =>
    isWeekend(date, locale) ||
    disabledRanges.some(
      (interval) =>
        date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
    );

  let dateChange = (e) => {
    handleCalDate(e);
    handleRecipe();
  };

  return (
    <div className="flex gap-x-4 items-center">
      <Calendar
        aria-label="Date (Unavailable)"
        defaultFocusedValue={now}
        isDateUnavailable={isDateUnavailable}
        maxValue={maxValue}
        minValue={now}
        value={calDate}
        onChange={dateChange}
      />
    </div>
  );
};

export default CalendarComponent;
