import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import { IProgram } from "../common/types";
import axios from "axios";

const localizer = momentLocalizer(moment);

export const CalendarPage = () => {
  const [programs, setPrograms] = useState<IProgram[] | []>([]);

  useEffect(() => {
    axios
      .get("/api/programs", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((r) => {
        setPrograms(r.data.data);
        console.log(r);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);
  const title = "test";

  return (
    <Calendar
      localizer={localizer}
      titleAccessor="program_date"
      events={programs}
      selectable
      startAccessor="program_date"
      endAccessor="program_date"
      defaultDate={new Date(Date.now())}
      style={{ height: 500, fontFamily: "Roboto Condensed" }}
      defaultView="month"
    />
  );
};
