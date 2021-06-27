import { TextField } from "@material-ui/core";
import React from "react";
import { IExercise } from "../common/types";

interface IExercisesViewProps {
  exercises: IExercise[];
  programDate: string;
  setProgramDate: React.Dispatch<string>;
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
        defaultValue={programDate}
        name="dateOfExercise"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => setProgramDate(e.currentTarget.value)}
        label="Date of Program"
      />
      <hr />
      {exercises.map((i) => (
        <div>
          <div>Exercise: {i.exercise}</div>
          {i.reps ? <div>Reps: {i.reps}</div> : null}
          {i.sets ? <div>Sets: {i.sets}</div> : null}
          {i.weight ? (
            <div>
              {i.weight} {i.weightUnit}
            </div>
          ) : null}
          {i.time ? <div>Total time: {i.time} minutes</div> : null}
        </div>
      ))}
    </div>
  );
};
