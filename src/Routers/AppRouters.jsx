import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { AuthRouter } from "./AuthRouter";
import { PagesRouter } from "./PagesRouter";
import { PublicRouter } from "./PublicRouter";
import { PrivateRoute } from "./PrivatesRouter";
import { notAuthenticated, singUp } from "../action/auth";
import storeApi from "../api/storeApi";
import { Spinner } from "../components/global/Spinner";

export const AppRouters = () => {
  const { status } = useSelector((state) => state.auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "authenticated") {
      setIsLoggedIn(true);
      localStorage.getItem("token");
    } else {
      setIsLoggedIn(false);
    }
  }, [status]);

  const validaToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(notAuthenticated());
    const { data } = await storeApi.get("/auth");
    dispatch(singUp(data.token, data.usuario));
  };

  useEffect(() => {
    validaToken();
  }, []);

  if (status === "checking") {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <p className="text-2xl font-semibold">Espere...</p>
        <Spinner />
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            path="/auth"
            component={AuthRouter}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute
            path="/"
            isLoggedIn={isLoggedIn}
            component={PagesRouter}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
