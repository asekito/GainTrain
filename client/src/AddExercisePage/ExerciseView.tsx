import React from "react";
import { IExercise } from "../common/types";

interface IExercisesViewProps {
  exercises: IExercise[];
  // delete handler
}

export const ExerciseView = ({ exercises }: IExercisesViewProps) => {
  return (
    <div>
      <h1>Exercises</h1>
      {exercises.map((i) => (
        <div>
          <div>{i.exercise}</div>
          {i.reps ? <div>{i.reps}</div> : null}
          {i.sets ? <div>{i.sets}</div> : null}
          {i.weight ? (
            <div>
              {i.weight} {i.weightUnit}
            </div>
          ) : null}
          {i.time ? <div>{i.time} minutes</div> : null}
        </div>
      ))}
    </div>
  );
};
