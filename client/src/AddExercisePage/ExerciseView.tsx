import { TextField } from "@material-ui/core";
import moment from "moment";
import React from "react";
import { IExercise } from "../common/types";

interface IExercisesViewProps {
  exercises: IExercise[];
  programDate: Date;
  setProgramDate: React.Dispatch<Date>;
  // delete handler
}

export const ExerciseView = ({
  exercises,
  programDate,
  setProgramDate,
}: IExercisesViewProps) => {
  return (
    <div>
      <TextField
        type="date"
        defaultValue={moment(programDate).format("YYYY-MM-DD")}
        name="dateOfExercise"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => setProgramDate(new Date(e.currentTarget.value))}
        label="Date of Program"
      />
      <hr />
      {exercises.map((i) => (
        <div>
          {/* STRENGTH TRAINING VIEW */}
          {i.type === "strength" ? (
            <div className="exercise-addition">
              <div onClick={() => console.log(exercises)}>
                Exercise: {i.exercise}
              </div>
              {i.reps ? <div>Reps: {i.reps}</div> : null}
              {i.sets ? <div>Sets: {i.sets}</div> : null}
              {i.weight ? (
                <div>
                  {i.weight} {i.weightUnit}
                </div>
              ) : null}
            </div>
          ) : null}

          {/* CARDIO TRAINING VIEW */}
          {i.type === "cardio" ? (
            <div className="exercise-addition">
              <div onClick={() => console.log(exercises)}>
                Exercise: {i.exercise}
              </div>
              {i.time ? <div>Total time: {i.time} minutes</div> : null}
              {i.distance ? (
                <div>
                  Total distance: {i.distance} {i.distanceUnit}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};
