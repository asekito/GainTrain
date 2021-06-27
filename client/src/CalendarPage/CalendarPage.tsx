import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../../node_modules/react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export const CalendarPage = () => {
  return (
    <Calendar
      localizer={localizer}
      // events={exerciseEvents}
      events={[]}
      selectable
      startAccessor="start"
      endAccessor="end"
      defaultDate={new Date(Date.now())}
      style={{ height: 500, fontFamily: "Roboto Condensed" }}
      defaultView="month"
    />
  );
};
