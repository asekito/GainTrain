import React, { useState } from "react";
import {
  InputAdornment,
  MenuItem,
  TextField,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import { IExercise } from "../common/types";

interface IAddExerciseFormProps {
  currentExercise: IExercise;
  setCurrentExercise: React.Dispatch<IExercise>;
  clearForm: () => void;
  addExercise: () => void;
  // setStrengthView: React.Dispatch<boolean>;
  // strengthView: boolean;
}

export const AddExerciseForm = ({
  currentExercise,
  setCurrentExercise,
  clearForm,
  addExercise,
}: IAddExerciseFormProps) => {
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setCurrentExercise({ ...currentExercise, [name]: value });
  };

  return (
    <div className="form-container">
      <h1>Add your workout</h1>
      <ButtonGroup
        color="secondary"
        aria-label="outlined primary button group"
        style={{ marginLeft: "3em" }}
      >
        <Button
          onClick={() => {
            setCurrentExercise({
              exercise: "",
              sets: 0,
              reps: 0,
              weight: 0,
              weightUnit: "lb",
              time: 0,
              distance: 0,
              distanceUnit: "mi",
              type: "cardio",
            });
          }}
        >
          Cardio
        </Button>
        <Button
          onClick={() => {
            // setStrengthView(true);
            setCurrentExercise({
              exercise: "",
              sets: 0,
              reps: 0,
              weight: 0,
              weightUnit: "lb",
              time: 0,
              distance: 0,
              distanceUnit: "mi",
              type: "strength",
            });
          }}
        >
          Strength
        </Button>
      </ButtonGroup>
      <TextField
        value={currentExercise.exercise}
        label="Exercise"
        name="exercise"
        onChange={(e) => changeHandler(e)}
        className="add-exercise-input"
      />
      {currentExercise.type === "strength" ? (
        <>
          <TextField
            value={currentExercise.sets}
            label="Sets"
            type="number"
            name="sets"
            onChange={(e) => changeHandler(e)}
            className="add-exercise-input"
          />
          <TextField
            value={currentExercise.reps}
            label="Reps"
            type="number"
            name="reps"
            onChange={(e) => changeHandler(e)}
            className="add-exercise-input"
          />
          <TextField
            value={currentExercise.weight}
            label="Weight"
            type="number"
            name="weight"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Lbs</InputAdornment>
              ),
            }}
            onChange={(e) => changeHandler(e)}
            className="add-exercise-input"
          />
        </>
      ) : (
        <>
          <TextField
            label="Time"
            type="number"
            value={currentExercise.time}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Min</InputAdornment>
              ),
            }}
            name="time"
            onChange={(e) => changeHandler(e)}
            className="add-exercise-input"
          />
          <TextField
            label="Distance"
            name="distance"
            type="number"
            onChange={(e) => changeHandler(e)}
            className="add-exercise-input"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Miles</InputAdornment>
              ),
            }}
          />
        </>
      )}
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
  );
};
