import React, { useState } from "react";
import { Modal, TextField, Button } from "@material-ui/core";
import "./assets/LoginModal.scss";
import axios from "axios";

export const SignUpModal = ({
  signupModalOpen,
  setSignupModalOpen,
}: ISignUpModalProps) => {
  const [signupInfo, setSignupInfo] = useState<IUserSignupInfo>({
    username: "",
    email: "",
    password: "",
    retypePassword: "",
    firstname: "",
    lastname: "",
  });

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.currentTarget;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const submitHandler = () => {
    const { username, email, password, retypePassword, firstname, lastname } =
      signupInfo;

    if (
      !username ||
      !email ||
      !password ||
      !retypePassword ||
      !firstname ||
      !lastname
    )
      return console.log("One or more fields are not filled out."); // turn all console logs into popovers

    if (password !== retypePassword)
      return console.log("Passwords do not match.");

    if (password.length < 8 || password.length > 16)
      return console.log(
        "Password must be at least 8 characters or less than 17 characters."
      );

    if (username.length <= 3 || username.length > 16)
      return console.log(
        "Password must be at least 3 characters or less than 17 characters."
      );

    if (email.indexOf("@") === -1)
      return console.log("Must be a valid email address.");

    axios
      .post("/api/sign-up", signupInfo)
      .then((res) => {
        const { success, msg } = res.data;
        if (success) {
          window.location.href = "/";
        } else {
          return alert("Make this a popover please " + msg);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal
      open={signupModalOpen}
      onClose={() => setSignupModalOpen(false)}
      aria-labelledby="simple-modal-title"
    >
      <div className="medium-modal-white">
        <h1>Sign Up</h1>
        <div className="modal-container-forms">
          <TextField
            label="Email"
            name="email"
            onChange={(e) => changeHandler(e)}
          />
          <TextField
            label="Username"
            name="username"
            onChange={(e) => changeHandler(e)}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            onChange={(e) => changeHandler(e)}
          />
          <TextField
            label="Retype Password"
            name="retypePassword"
            type="password"
            onChange={(e) => changeHandler(e)}
          />
          <TextField
            label="First Name"
            name="firstname"
            onChange={(e) => changeHandler(e)}
          />
          <TextField
            label="Last Name"
            name="lastname"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div style={{ textAlignLast: "center", marginTop: "2em" }}>
          <Button
            variant="contained"
            color="secondary"
            style={{ placeSelf: "center" }}
            onClick={() => submitHandler()}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </Modal>
  );
};

interface ISignUpModalProps {
  signupModalOpen: boolean;
  setSignupModalOpen: React.Dispatch<boolean>;
}

interface IUserSignupInfo {
  username: string;
  email: string;
  password: string;
  retypePassword: string;
  firstname: string;
  lastname: string;
}
