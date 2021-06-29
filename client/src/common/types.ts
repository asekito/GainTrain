export interface IExercise {
  exercise: string;
  sets?: number | 0;
  reps?: number | 0;
  weight?: number | 0;
  weightUnit?: "lb" | "kg";
  time?: number | 0;
  distance?: number | 0;
  distanceUnit?: "mi" | "km";
  type: "strength" | "cardio";
}

export interface IUser {
  login: string;
  password: string;
}

export interface IProgram {
  id: number;
  user_id: number;
  exercises: IExercise[];
  program_date: Date;
}

export interface IGetProgramsResults {
  id: number;
  user_id: number;
  exercises: IExercise[];
  program_date: Date;
}
