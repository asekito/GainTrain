import React, { useState, useEffect } from "react";
import {
  InputAdornment,
  MenuItem,
  TextField,
  Button,
  ButtonGroup,
  FormControl,
  Select,
} from "@material-ui/core";
import { IExercise, IPredefinedExercises } from "../common/types";
import axios from "axios";

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
  const [predefinedWeightExercises, setPredefinedWeightExercises] = useState<
    IPredefinedExercises[] | []
  >([]);
  const [predefinedCardioExercises, setPredefinedCardioExercises] = useState<
    IPredefinedExercises[] | []
  >([]);

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    console.log(e);
    setCurrentExercise({ ...currentExercise, [name]: value });
  };

  const selectChangeHandler = (name: string, value: string) => {
    const splitValue = value.split(",");
    const [idVal, exerciseName] = splitValue;

    setCurrentExercise({
      ...currentExercise,
      [name]: idVal,
      exerciseName: exerciseName,
    });
  };

  useEffect(() => {
    axios
      .get("/api/predefined-exercises", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((r) => {
        const { cardioExercises, weightExercises } = r.data.data;
        setPredefinedCardioExercises(cardioExercises);
        setPredefinedWeightExercises(weightExercises);
      })
      .catch((err) => {
        console.error(err);
        alert(err);
      });
  }, []);

  return (
    <div className="form-container">
      <h1 onClick={() => console.log(currentExercise)}>Add your workout</h1>
      <ButtonGroup
        color="secondary"
        aria-label="outlined primary button group"
        style={{ marginLeft: "3em" }}
      >
        <Button
          onClick={() => {
            setCurrentExercise({
              exerciseName: "",
              exercise: -1,
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
          }}
        >
          Strength
        </Button>
      </ButtonGroup>
      {currentExercise.type === "strength" ? (
        <>
          <Select
            label="Exercise"
            name="exercise"
            className="add-exercise-input"
            onChange={(e) => {
              let { name, value } = e.target;
              selectChangeHandler(name as string, value as string);
            }}
          >
            {predefinedWeightExercises.map((p) => (
              <MenuItem value={`${p.id}, ${p.exercise}`}>{p.exercise}</MenuItem>
            ))}
          </Select>
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
          <Select
            label="Exercise"
            name="exercise"
            className="add-exercise-input"
            onChange={(e) => {
              let { name, value } = e.target;
              selectChangeHandler(name as string, value as string);
            }}
          >
            {predefinedCardioExercises.map((p) => (
              <MenuItem value={`${p.id}, ${p.exercise}`}>{p.exercise}</MenuItem>
            ))}
          </Select>
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
