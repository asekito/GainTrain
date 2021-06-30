import axios from "axios";
import React, { useState, useEffect } from "react";
import { IExercise, IProgram } from "../../common/types";
import "./ProgramHistoryPage.scss";
import moment from "moment";

export const ProgramHistoryPage = () => {
  const [exercises, setExercises] = useState<IProgram[] | []>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    axios
      .get(`/api/programs/${page}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((r) => {
        const { success, data } = r.data;
        if (success) {
          setExercises(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div id="program-history-view">
      <h1
        onClick={() => {
          exercises.forEach((e: IProgram) => {
            e.program_exercises.forEach((i: IExercise) => {
              console.log(i);
            });
          });
        }}
      >
        Program History Page
      </h1>
      <div>
        {exercises.map((e) => (
          <div className="program-tile">
            <h3>{moment(e.program_date).format("dddd  MMMM DD, YYYY")}</h3>

            {e.program_exercises.map((i) => (
              <div className="program-exercise">
                <div>{i.predefined_exercise?.exercise}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
