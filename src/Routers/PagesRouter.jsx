import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Navbar } from "../components/global/Navbar";
import { Saved } from "../components/home/Saved";
import { UnplashPage } from "../components/home/UnplashPage";
import { ProductPage } from "../components/Product/ProductPage";
import { Sponsor } from "../components/Product/Sponsor";
import { ProfileScreen } from "../components/profile/ProfileScreen";

export const PagesRouter = () => {
  return (
    <div className="">
      <Navbar />
      <Switch>
        <Route exact path="/" component={UnplashPage} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/profile" component={ProfileScreen} />
        <Route exact path="/product/:id" component={ProductPage} />
        <Route exact path="/uwu/:title" component={Sponsor} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
