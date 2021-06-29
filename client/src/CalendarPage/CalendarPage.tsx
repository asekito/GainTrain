import React, { useState, useEffect, lazy } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import { IExercise, IProgram } from "../common/types";
import axios from "axios";

const CalendarEventModal = lazy(() =>
  import("./CalendarEventModal").then((m) => ({
    default: m.CalendarEventModal,
  }))
);

const localizer = momentLocalizer(moment);

export const CalendarPage = () => {
  const [programs, setPrograms] = useState<IProgram[] | []>([]);
  const [eventModal, setEventModal] = useState<boolean>(false);
  const [eventExercises, setEventExercises] = useState<IExercise[] | []>([]);

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

  return (
    <>
      <Calendar
        localizer={localizer}
        titleAccessor="program_date"
        startAccessor="program_date"
        endAccessor="program_date"
        events={programs}
        defaultDate={new Date(Date.now())}
        style={{ height: 500, fontFamily: "Roboto Condensed" }}
        defaultView="month"
        onSelectEvent={(e) => {
          console.log(e);
          setEventExercises(e.exercises);
          setEventModal(true);
        }}
      />
      <CalendarEventModal
        eventModal={eventModal}
        setEventModal={setEventModal}
        exercises={eventExercises}
      />
    </>
  );
};
