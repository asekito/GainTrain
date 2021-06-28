import React from "react";
import { IExercise } from "../common/types";
import { Modal } from "@material-ui/core";

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
    <Modal open={eventModal} onClose={() => setEventModal(false)}>
      <div className="medium-modal-white">
        {exercises.map((e) => (
          <div>{e.exercise}</div>
        ))}
      </div>
    </Modal>
  );
};
