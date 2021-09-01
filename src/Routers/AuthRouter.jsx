import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { ForgotPasswordPage } from "../components/auth/ForgotPasswordPage";
import { LoginPage } from "../components/auth/LoginPage";
import { RegisterPage } from "../components/auth/RegisterPage";

export const AuthRouter = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-100">
      <div className="flex flex-col justify-center items-center w-auto px-8 py-5 shadow-lg h-auto bg-white rounded-md">
        <Switch>
          <Route exact path="/auth/login" component={LoginPage} />
          <Route exact path="/auth/register" component={RegisterPage} />
          <Route exact path="/auth/forgot" component={ForgotPasswordPage} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </div>
  );
};
