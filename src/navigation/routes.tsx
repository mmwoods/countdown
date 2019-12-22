import { RouteComponentProps, Router } from "@reach/router";
import React from "react";

import { NavigationConstants } from "./navigation-constants";
import { HomeScene } from "../scenes/home-scene";

const Home = (props: RouteComponentProps) => <HomeScene {...props} />;

export const Routes = () => (
  <Router>
    <Home path={NavigationConstants.home} default />
    <Home path={`${NavigationConstants.home}/:name`} />
  </Router>
);
