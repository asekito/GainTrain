import React from "react";
import { IExercise } from "../common/types";

interface IExercisesViewProps {
  exercises: IExercise[];
  // delete handler
}

export const ExerciseView = ({ exercises }: IExercisesViewProps) => {
  return (
    <div>
      <h1>Exercise View</h1>
      {exercises.map((i) => (
        <div>{i.exercise}</div>
      ))}
    </div>
  );
};
