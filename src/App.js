import React from 'react';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import { Route, Switch } from "react-router";
import { withRouter } from "react-router-dom";
import { routeCodes } from './routes';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={routeCodes.COM1} component={Component1}></Route>
        <Route path={routeCodes.COM2} component={Component2}></Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
