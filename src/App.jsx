import React from "react";
import { Provider } from "react-redux";
import { AppRouters } from "./Routers/AppRouters";
import { store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <AppRouters/>  
    </Provider>
  );
};
