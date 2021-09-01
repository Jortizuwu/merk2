import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";

import { startForgotPassword } from "../../action/auth";
import { useForm } from "../../hooks/useForm";
import { Button } from "../global/Button";
import { Input } from "../global/Input";

export const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    email: "",
  });

  console.log(validator.isEmail(formValues.email));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.isEmail(formValues.email)) {
      // dispatch(startForgotPassword(formValues.email));
    }
  };
  return (
    <>
      <img
        className="h-8 w-8 object-cover mb-2"
        src="https://i.imgur.com/G1AVCyy.jpg"
        alt=""
      />
      <h1 className="mb-4 font-semibold text-gray-600 text-2xl">
        Reset password
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
        <Input
          title="Email"
          icon="email"
          handleInputChange={handleInputChange}
          name="email"
        />
        <Button title="send" />
      </form>
      <p className="font-semibold mt-6">
        Not a member?
        <Link className="link" to="/auth/login">
          {" "}
          Login now
        </Link>
      </p>
    </>
  );
};
