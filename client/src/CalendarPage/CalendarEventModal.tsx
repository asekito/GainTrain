import React from "react";
import { IExercise } from "../common/types";
import { Modal, Popover } from "@material-ui/core";
import "./assets/CalendarPage.scss";

interface ICalendarEventModal {
  exercises: IExercise[];
  eventModal: boolean;
  setEventModal: React.Dispatch<boolean>;
}

export const CalendarEventModal = ({
  exercises,
  eventModal,
  setEventModal,
}: ICalendarEventModal) => {
  return (
    <Popover
      open={eventModal}
      onClose={() => setEventModal(false)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <div className="popover">
        {exercises.map((e) => (
          <>
            {e.type === "cardio" ? (
              <div className="calendar-popover-exercise">
                <div>{e.predefined_exercise?.exercise}</div>
                <div>Total time: {e.time} Min</div>
                <div>
                  Total distance: {e.distance} {e.distanceUnit}
                </div>
              </div>
            ) : null}
            {e.type === "strength" ? (
              <div className="calendar-popover-exercise">
                <div>{e.predefined_exercise?.exercise}</div>
                <div>Sets: {e.sets}</div>
                <div>Reps: {e.reps}</div>
                <div>
                  Weight: {e.weight} {e.weightUnit}
                </div>
              </div>
            ) : null}
          </>
        ))}
      </div>
    </Popover>
  );
};
