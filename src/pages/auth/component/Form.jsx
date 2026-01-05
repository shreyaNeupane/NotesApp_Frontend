import React from "react";
import { Link } from "react-router-dom";
import AuthServices from "./../../services/AuthService";

const Form = ({
  type,
  email,
  password,
  setEmail,
  username,
  setUsername,
  setPassword,
  onSubmit,
}) => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <form
          onSubmit={onSubmit}
          className="max-w-sm mx-auto p-10 border-lime-400 rounded-md  bg-lime-200 text-center text-gray-700 font-mono "
        >
          <h1 className="font-bold text-xl text-center">
            {type === "Login"
              ? "Login here to continue...."
              : "Register Here to continue...."}
          </h1>
          <div className="">
            <label htmlFor="email"></label>
            <br />

            <input
              type="email"
              required
              id="email"
              placeholder="Enter email"
              className="border text-lg border-lime-600 rounded-md p-1 "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {type === "Register" && (
            <div>
              <label htmlFor="username"></label>
              <br />
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                className="border text-lg  border-lime-600 rounded-md p-1 "
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          <div className="">
            <label htmlFor="password"></label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="border text-lg  border-lime-600 rounded-md p-1 mb-2"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {type === "Register" ? (
            <p>
              if you already have an account. please{" "}
              <Link to="/login">
                <b className="hover:text-gray-900">SIGN IN</b>
              </Link>
            </p>
          ) : (
            <p>
              if you dont have an account. Please{" "}
              <Link to="/register">
                <b className="hover:text-gray-900">SIGN UP</b>
              </Link>
            </p>
          )}
          <button
            type="submit"
            className="bg-lime-600 p-2 border-none rounded-md w-full mt-5 hover:bg-lime-500"
          >
            {type === "Register" ? "SIGN UP" : "SIGN IN"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
