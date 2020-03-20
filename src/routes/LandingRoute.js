import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import * as path from '../utils/path'
import AuthenticatedRoute from './AuthenticatedRoute'

function LandingRoute() {
  return (
    <div>
      <Switch>
        <Route
          path={path.LOGIN_PATH}
          exact
          component={Loadable({
            loader: () => import("../components/login/Login"),
            loading: () => ""
          })}
        />
      
        <AuthenticatedRoute
          path={path.LANDING_PATH}
          exact
          component={Loadable({
            loader: () => import("../components/Landing"),
            loading: () => ""
          })}
        />
      </Switch>
    </div>
  );
}

export default LandingRoute;
