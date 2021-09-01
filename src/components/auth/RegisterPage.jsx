import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { useForm } from "../../hooks/useForm";
import { Input } from "../global/Input";
import { Button } from "../global/Button";
import { addError, registerStart } from "../../action/auth";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.auth);

  const [formValue, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formIsValid()) {
      dispatch(registerStart(email, password, name));
    }
  };

  const formIsValid = () => {
    if (name.trim().length <= 2) {
      dispatch(addError("el nombre no es valido"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(addError("el email no es valido"));
      return false;
    } else if (password.trim().length <= 4 && password !== password2) {
      dispatch(addError("la contrasena no es valida o no coinciden"));
      return false;
    } else {
      return true;
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
        Register now
      </h1>
      {errorMessage && (
        <div className="bg-red-500 w-full max-w-xs h-20 text-center flex justify-center items-center rounded text-lg font-semibold text-white mb-5 p-4">
          <p>{errorMessage}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
        <Input
          icon="badge"
          name={"name"}
          handleInputChange={handleInputChange}
          title={"Name"}
        />
        <Input
          title={"Email"}
          icon="email"
          name={"email"}
          handleInputChange={handleInputChange}
        />
        <Input
          title={"Password"}
          icon="lock"
          name={"password"}
          handleInputChange={handleInputChange}
          type={"password"}
        />
        <Input
          title={"Confirm password"}
          icon="lock"
          name={"password2"}
          handleInputChange={handleInputChange}
          type={"password"}
        />
        <Button title="Login" />
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
