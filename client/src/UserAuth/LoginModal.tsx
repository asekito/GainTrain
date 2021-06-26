import React from "react";
import { Modal, TextField, Button } from "@material-ui/core";

export const LoginModal = ({
  loginModalOpen,
  setLoginModalOpen,
}: LoginModalProps) => {
  return (
    <Modal
      open={loginModalOpen}
      onClose={() => setLoginModalOpen(false)}
      aria-labelledby="simple-modal-title"
    >
      <div className="medium-modal-white">
        <h1>Login</h1>
        <div>
          <TextField label="username or email" name="cred" />
          <TextField label="password" name="pass" />
        </div>
        <Button variant="contained" color="secondary">
          Login
        </Button>
      </div>
    </Modal>
  );
};

export interface LoginModalProps {
  setLoginModalOpen: React.Dispatch<boolean>;
  loginModalOpen: boolean;
}
