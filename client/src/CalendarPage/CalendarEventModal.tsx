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
          <>
            {e.type === "cardio" ? (
              <div>
                <div>{e.exercise}</div>
                <div>Total time: {e.time} Min</div>
                <div>
                  Total distance: {e.distance} {e.distanceUnit}
                </div>
              </div>
            ) : null}
            {e.type === "strength" ? (
              <div>
                <div>{e.exercise}</div>
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
    </Modal>
  );
};
