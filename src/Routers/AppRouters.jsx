import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { AuthRouter } from "./AuthRouter";
import { PagesRouter } from "./PagesRouter";
import { PublicRouter } from "./PublicRouter";
import { PrivateRoute } from "./PrivatesRouter";

export const AppRouters = () => {
  const { status } = useSelector((state) => state.auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [status]);

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
