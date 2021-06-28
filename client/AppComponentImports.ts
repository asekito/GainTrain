import React, { lazy } from "react";

export const AddExercise = lazy(
  () => import("./src/AddExercisePage/AddExercise")
);

export const Home = lazy(() => import("./src/HomePage/Home"));

export const LoginModal = lazy(() =>
  import("./src/UserAuth/LoginModal").then((m) => ({ default: m.LoginModal }))
);

export const CalendarPage = lazy(() =>
  import("./src/CalendarPage/CalendarPage").then((m) => ({
    default: m.CalendarPage,
  }))
);

export const SignUpModal = lazy(() =>
  import("./src/UserAuth/SignUpModal").then((m) => ({ default: m.SignUpModal }))
);

export const ProfilePage = lazy(() =>
  import("./src/Profile/ProfilePage").then((m) => ({ default: m.ProfilePage }))
);
