export interface IExercise {
  exercise: string;
  sets?: number | 0;
  reps?: number | 0;
  weight?: number | 0;
  weightUnit?: "lb" | "kg";
  time?: number | 0;
}

export interface IUser {
  login: string;
  password: string;
}

export interface IUserSignUp extends IUser {
  retypePassword: string;
}
