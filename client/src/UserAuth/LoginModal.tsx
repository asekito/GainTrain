import React, { useState } from "react";
import { Modal, TextField, Button } from "@material-ui/core";
import { IUser } from "../common/types";
import "./assets/LoginModal.scss";
import axios from "axios";
export interface LoginModalProps {
  loginModalOpen: boolean;
  setLoginModalOpen: React.Dispatch<boolean>;
}

export const LoginModal = ({
  loginModalOpen,
  setLoginModalOpen,
}: LoginModalProps) => {
  const [credentials, setCredentials] = useState<IUser>({
    login: "",
    password: "",
  });

  const changeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };

  const loginHandler = () => {
    axios
      .post("/api/login", credentials)
      .then((res) => {
        if (res.data.auth) {
          console.log("hit hit hit ");
          localStorage.setItem("token", res.data.token);
          window.location.href = "/";
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal
      open={loginModalOpen}
      onClose={() => setLoginModalOpen(false)}
      aria-labelledby="simple-modal-title"
    >
      <div className="medium-modal-white">
        <h1>Login</h1>
        <div className="modal-container-forms">
          <TextField
            label="username or email"
            name="login"
            onChange={(e) => changeHandler(e)}
            autoFocus
          />
          <TextField
            label="password"
            name="password"
            type="password"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div style={{ textAlignLast: "center" }}>
          <Button
            variant="contained"
            color="secondary"
            style={{ placeSelf: "center" }}
            onClick={() => loginHandler()}
          >
            Login
          </Button>
        </div>
      </div>
    </Modal>
  );
};
