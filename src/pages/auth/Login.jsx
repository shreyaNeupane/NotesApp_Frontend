import React, { useState } from "react";
import Form from "./component/Form";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);

  const navigate = useNavigate();
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const data = { email, password };
      const res = await AuthService.loginUser(data);
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      const errmessage = error?.response?.data?.message;
      toast.error(errmessage);
      console.log(error);
    }
  };
  return (
    // where we define type(props)is parent , and where we use type(prop) is children
    // props = prent component tells child component what to do
    <Form type="Login" email={email} password={password} setEmail={setEmail} setPassword={setPassword} onSubmit={loginHandler} />
  );
};

export default Login;
