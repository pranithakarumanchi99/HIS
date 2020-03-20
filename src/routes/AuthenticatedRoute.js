import React from 'react'
import commonService from '../services/CommonService';
import * as routePath from '../utils/path'
import { Route,Redirect } from "react-router-dom";

function AuthenticatedRoute({ component: Comp, path, ...rest }) {
    return (
        <Route
          path={path}
          {...rest}
          render={props => {

            if(commonService.isAutheticated())
            {
              return <Comp {...props} />
                 
            }
            else{
              return  <Redirect
                to={{
                  pathname: routePath.LOGIN_PATH,
                  state: {
                    prevLocation: path,
                    error: "You need to login first!",
                  },
                }}
              />

            }
           
          }}
        />
      );
}

export default AuthenticatedRoute
