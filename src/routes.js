import React from 'react'
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import { Route, Switch } from "react-router";


export const publicPath = "/"
export const routeCodes = {
    COM1: publicPath,
    COM2: `${publicPath}com2`
  };
  
  export default () => {
    return (
        <Switch>
          <Route path={routeCodes.COM1} render={() => <Component1 />} />
          <Route path={routeCodes.COM2} render={() => <Component2 />} />
        </Switch>
    );
  };