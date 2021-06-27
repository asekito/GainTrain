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
  // changeHandler: (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => void;
  setCurrentExercise: React.Dispatch<IExercise>;
}

export const AddExerciseForm = ({
  currentExercise,
  // changeHandler,
  setCurrentExercise,
}: IAddExerciseFormProps) => {
  const [strengthView, setStrengthView] = useState<boolean>(true);

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setCurrentExercise({ ...currentExercise, [name]: value });
  };

  return (
    <div className="form-container">
      <ButtonGroup
        color="secondary"
        aria-label="outlined primary button group"
        style={{ placeSelf: "center", marginBottom: "1em" }}
      >
        <Button
          onClick={() => {
            setStrengthView(false);
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
          }}
        >
          Cardio
        </Button>
        <Button
          onClick={() => {
            setStrengthView(true);
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
      {strengthView ? (
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
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Miles</InputAdornment>
              ),
            }}
          />
        </>
      )}
    </div>
  );
};
