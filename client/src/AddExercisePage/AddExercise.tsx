import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { IExercise } from "../common/types";
import { AddExerciseForm } from "./AddExerciseForm";
import { ExerciseView } from "./ExerciseView";
import "./assets/AddExercise.scss";

export const AddExercise = () => {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [currentExercise, setCurrentExercise] = useState<IExercise>({
    exercise: "",
    sets: 0,
    reps: 0,
    weight: 0,
    weightUnit: "lb",
    time: 0,
  });

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setCurrentExercise({ ...currentExercise, [name]: value });
  };

  const addExercise = () => {
    if (
      (currentExercise.sets === 0 || currentExercise.reps === 0) &&
      currentExercise.time === 0
    ) {
      return console.log(
        "Please fill outa weightlifting or cardiovascular exercise. Make this a popover Andrea"
      );
    }

    setExercises((exercises) => [...exercises, currentExercise]);
    setCurrentExercise({
      exercise: "",
      sets: 0,
      reps: 0,
      weight: 0,
      weightUnit: "lb",
      time: 0,
    });
  };

  const clearForm = () => {
    setCurrentExercise({
      exercise: "",
      sets: 0,
      reps: 0,
      weight: 0,
      weightUnit: "lb",
      time: 0,
    });
  };

  return (
    <div>
      <h1 onClick={() => console.log(exercises)}>Add your workout</h1>
      <div className="form-container">
        <AddExerciseForm
          currentExercise={currentExercise}
          changeHandler={changeHandler}
        />
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => clearForm()}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addExercise()}
        >
          Add
        </Button>
        <Button variant="contained" color="secondary">
          Submit
        </Button>
      </div>
      <div>
        <ExerciseView exercises={exercises} />
      </div>
    </div>
  );
};
