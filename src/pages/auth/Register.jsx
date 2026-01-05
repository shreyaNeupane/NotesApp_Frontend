import React, { useState } from "react";

import Form from "./component/Form";
import AuthService from "../services/AuthService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password, username);
  const navigate = useNavigate();
  const registerHandler = () => {
    try {
      const data = { email, username, password };
      const res = AuthService.registerUser(data);
      console.log(res);
      toast.success(res.status.message);
      navigate("/login");
    } catch (error) {
      const message = error?.response?.data?.message || "something went wrong";
      toast.error(message);
      console.log(error);
    }
  };

  return (
    <Form
      type="Register"
      email={email}
      setEmail={setEmail}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      onSubmit={registerHandler}
    />
  );
};

export default Register;
