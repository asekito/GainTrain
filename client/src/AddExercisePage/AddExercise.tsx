import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { IExercise } from "../common/types";
import { AddExerciseForm } from "./AddExerciseForm";
import { ExerciseView } from "./ExerciseView";
import "./assets/AddExercise.scss";
import moment from "moment";

const AddExercise = () => {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [currentExercise, setCurrentExercise] = useState<IExercise>({
    exercise: "",
    sets: 0,
    reps: 0,
    weight: 0,
    weightUnit: "lb",
    time: 0,
    distance: 0,
    distanceUnit: "mi",
  });
  const [programDate, setProgramDate] = useState<string>(
    moment(new Date(Date.now())).format("YYYY-MM-DD")
  );

  const addExercise = () => {
    if (!currentExercise.exercise) {
      return console.log(
        "Please fill out exercise name. Make this a popover Andrea pleaseee"
      );
    }

    if (
      (currentExercise.sets === 0 ||
        currentExercise.reps === 0 ||
        currentExercise.weight === 0) &&
      (currentExercise.time === 0 || currentExercise.distance === 0)
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
      distance: 0,
      distanceUnit: "mi",
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
      distance: 0,
      distanceUnit: "mi",
    });
  };

  return (
    <div className="container">
      <div className="add-view">
        <div>
          <h1 onClick={() => console.log(programDate)}>Add your workout</h1>
          <AddExerciseForm
            currentExercise={currentExercise}
            // changeHandler={changeHandler}
            setCurrentExercise={setCurrentExercise}
          />
          <div className="add-exercise-button-container">
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => clearForm()}
              style={{ margin: "1em" }}
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
          </div>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <h1 style={{ marginRight: "1em" }}>Exercises</h1>
            <Button
              variant="contained"
              color="secondary"
              style={{ width: "20px", placeSelf: "center" }}
            >
              Submit
            </Button>
          </div>
          <ExerciseView
            exercises={exercises}
            setProgramDate={setProgramDate}
            programDate={programDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AddExercise;
