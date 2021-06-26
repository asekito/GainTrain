import React from "react";
import { InputAdornment, MenuItem, TextField, Button } from "@material-ui/core";
import { IExercise } from "../common/types";

interface IAddExerciseFormProps {
  currentExercise: IExercise;
  changeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const AddExerciseForm = ({
  currentExercise,
  changeHandler,
}: IAddExerciseFormProps) => {
  return (
    <div>
      <TextField
        value={currentExercise.exercise}
        label="Exercise"
        name="exercise"
        onChange={(e) => changeHandler(e)}
      />
      <TextField
        value={currentExercise.sets}
        label="Sets"
        type="number"
        name="sets"
        onChange={(e) => changeHandler(e)}
      />
      <TextField
        value={currentExercise.reps}
        label="Reps"
        type="number"
        name="reps"
        onChange={(e) => changeHandler(e)}
      />
      <div>
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
        />
        {/* <TextField
          select
          value={""}
          helperText="Select a unit"
          name="weightUnit"
        >
          <MenuItem value="lb">Pounds</MenuItem>
          <MenuItem value="kg">Kilograms</MenuItem>
        </TextField> */}
      </div>
      <TextField
        label="Time"
        type="number"
        value={currentExercise.time}
        InputProps={{
          startAdornment: <InputAdornment position="start">Min</InputAdornment>,
        }}
        name="time"
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
};
