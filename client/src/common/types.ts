export interface IExercise {
  exerciseName?: string;
  exercise: number;
  sets?: number | 0;
  reps?: number | 0;
  weight?: number | 0;
  weightUnit?: "lb" | "kg";
  time?: number | 0;
  distance?: number | 0;
  distanceUnit?: "mi" | "km";
  type: "strength" | "cardio";
  predefined_exercise?: {
    exercise: string;
  };
}

export interface IUser {
  login: string;
  password: string;
}

export interface IProgram {
  id: number;
  user_id: number;
  program_exercises: IExercise[];
  program_date: Date;
}

export interface IPredefinedExercises {
  id: number;
  exercise: string;
  description: string | null;
  image_example: string | null;
  main_target_muscle_group: number;
  complementary_muscle_group: number;
}
