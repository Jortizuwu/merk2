import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";

import { StartSingIn, addError } from "../../action/auth";
import { useForm } from "../../hooks/useForm";
import { Input } from "../global/Input";
import { Button } from "../global/Button";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.auth);

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      dispatch(StartSingIn(email, password));
      return;
    }
    dispatch(addError("el email no es valido"));
  };

  const handleLoginWithGoogle = () => {
    // dispatch(startLoginWithGoogle());
  };

  return (
    <>
      <img
        className="h-8 w-8 object-cover mb-2"
        src="https://i.imgur.com/G1AVCyy.jpg"
        alt=""
      />
      <h1 className="mb-4 font-semibold text-gray-600 text-2xl">
        Log in to see more
      </h1>
      {errorMessage && (
        <div className="bg-red-500 w-full max-w-xs h-20 text-center flex justify-center items-center rounded text-lg font-semibold text-white mb-5 p-4">
          <p>{errorMessage}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
        <Input
          title="Email"
          icon="email"
          handleInputChange={handleInputChange}
          name="email"
        />
        <Input
          title="Password"
          icon="lock"
          handleInputChange={handleInputChange}
          name="password"
          type="password"
        />
        <Button title="Login" />
      </form>
      <div className="flex mt-1 w-full justify-between items-center">
        <div>
          <label className="mr-2 text-sm text-gray-500"> remember?</label>
          <input type="checkbox" name="remember" id="remember" />
        </div>
        <Link className="link" to="/auth/forgot">
          Forgot password?
        </Link>
      </div>
      <div className="mt-7 mb-7 flex flex-col w-full">
        <p className="text-center font-semibold text-gray-500">
          Or sign up using
        </p>
        <div className="flex w-full space-x-3 mt-3">
          <button
            onClick={handleLoginWithGoogle}
            disabled={true}
            className={`${
              false ? "cursor-wait opacity-50" : ""
            }btn w-full font-semibold hover:shadow-lm border border-gray-400 flex justify-center items-center h-10`}
          >
            <img
              className="w-6  mr-2"
              src="https://th.bing.com/th/id/R.dc783842a31aa50a0cf06196a8019cc5?rik=x%2bDpKL3LmJFnFw&pid=ImgRaw"
              alt=""
            />
            Google
            {/* {loadingGoogle && <Spinner />} */}
          </button>
        </div>
      </div>
      <p className="font-semibold">
        Not a member?
        <Link className="link" to="/auth/register">
          {" "}
          Signup now
        </Link>
      </p>
    </>
  );
};
