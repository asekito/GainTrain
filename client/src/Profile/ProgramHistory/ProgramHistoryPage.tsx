import axios from "axios";
import React, { useState, useEffect } from "react";
import { IGetProgramsResults } from "../../common/types";
import "./ProgramHistoryPage.scss";

export const ProgramHistoryPage = () => {
  const [exercises, setExercises] = useState<IGetProgramsResults[] | []>([]);
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
          console.log(data);
          setExercises(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div id="program-history-view">
      <h1>Program History Page</h1>
      <div>
        {exercises.map((e) => (
          <div className="program-tile">
            {e.exercises.map((i) => (
              <div className="program-exercise">
                <div>{i.exercise}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
