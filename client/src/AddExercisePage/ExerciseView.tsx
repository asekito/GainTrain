import { TextField } from "@material-ui/core";
import moment from "moment";
import React from "react";
import { IExercise } from "../common/types";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import DeleteIcon from "@material-ui/icons/Delete";

interface IExercisesViewProps {
  exercises: IExercise[];
  programDate: Date;
  setProgramDate: React.Dispatch<Date>;
  // delete handler
  deleteExercise: (i: number) => void;
}

export const ExerciseView = ({
  exercises,
  programDate,
  setProgramDate,
  deleteExercise,
}: IExercisesViewProps) => {
  return (
    <div>
      <TextField
        type="date"
        defaultValue={moment(programDate).format("YYYY-MM-DD")}
        name="dateOfExercise"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          setProgramDate(new Date(e.currentTarget.value));
        }}
        label="Date of Program"
      />
      <hr />
      {exercises.map((i, idx) => (
        <div key={idx}>
          {/* STRENGTH TRAINING VIEW */}
          {i.type === "strength" ? (
            <div className="exercise-addition">
              <div style={{ flex: 1 }}>
                <FitnessCenterIcon />
              </div>
              <div style={{ flex: 3 }}>
                <div>Exercise: {i.exerciseName}</div>
                {i.reps ? <div>Reps: {i.reps}</div> : null}
                {i.sets ? <div>Sets: {i.sets}</div> : null}
                {i.weight ? (
                  <div>
                    {i.weight} {i.weightUnit}
                  </div>
                ) : null}
              </div>
              <div style={{ flex: 1, textAlign: "right" }}>
                <DeleteIcon
                  onClick={() => deleteExercise(idx)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          ) : null}

          {/* CARDIO TRAINING VIEW */}
          {i.type === "cardio" ? (
            <div className="exercise-addition">
              <div style={{ flex: 1, textAlign: "right" }}>
                <DirectionsRunIcon />
              </div>
              <div style={{ flex: 3 }}>
                <div>Exercise: {i.exerciseName}</div>
                {i.time ? <div>Total time: {i.time} minutes</div> : null}
                {i.distance ? (
                  <div>
                    Total distance: {i.distance} {i.distanceUnit}
                  </div>
                ) : null}
              </div>
              <div style={{ flex: 1, textAlign: "right" }}>
                <DeleteIcon
                  onClick={() => deleteExercise(idx)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};
