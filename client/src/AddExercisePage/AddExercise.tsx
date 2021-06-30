import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { IExercise } from "../common/types";
import { AddExerciseForm } from "./AddExerciseForm";
import { ExerciseView } from "./ExerciseView";
import "./assets/AddExercise.scss";
// import moment from "moment";
import axios from "axios";

const AddExercise = () => {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [currentExercise, setCurrentExercise] = useState<IExercise>({
    exerciseName: "",
    exercise: -1,
    sets: 0,
    reps: 0,
    weight: 0,
    weightUnit: "lb",
    time: 0,
    distance: 0,
    distanceUnit: "mi",
    type: "strength",
  });
  const [programDate, setProgramDate] = useState<Date>(new Date(Date.now()));

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
      console.log(currentExercise);
      return console.log(
        "Please fill outa weightlifting or cardiovascular exercise. Make this a popover Andrea"
      );
    }

    setExercises((exercises) => [...exercises, currentExercise]);
    // setStrengthView(true);
    setCurrentExercise({
      ...currentExercise,
      exercise: -1,
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
    // setStrengthView(true);
    setCurrentExercise({
      ...currentExercise,
      exercise: -1,
      sets: 0,
      reps: 0,
      weight: 0,
      weightUnit: "lb",
      time: 0,
      distance: 0,
      distanceUnit: "mi",
      // type: strengthView ? "strength" : "cardio",
    });
  };

  const submitHandler = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Expired token.");
      return console.log("No token. Not logged in or expired token refresh.");
    }
    axios
      .post("/api/add-exercise", {
        program: exercises,
        programDate: programDate,
        token: token,
      })
      .then((res) => {
        const { success, msg } = res.data;
        if (success) {
          // window.location.href = "/add-exercise";
        }
      })
      .catch((err) => {
        return console.error(err);
      });
  };

  return (
    <div className="container">
      <div className="add-view">
        <div style={{ flex: 1 }}>
          <AddExerciseForm
            currentExercise={currentExercise}
            setCurrentExercise={setCurrentExercise}
            addExercise={addExercise}
            clearForm={clearForm}
          />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex" }}>
            <h1 style={{ marginRight: "1em" }}>Program</h1>
            <Button
              variant="contained"
              color="secondary"
              style={{ width: "20px", placeSelf: "center" }}
              onClick={() => submitHandler()}
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
