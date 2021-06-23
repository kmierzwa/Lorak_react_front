import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetUsers from "./components/DataTables/Users";
import Hierarchy from "./components/DataTables/Hierarchy";
import Home from "./components/DataTables/Home";
import unitmaster from "./components/DataTables/UnitMaster";
import Payee from "./components/DataTables/Payee";
import Process from "./components/DataTables/Process";
import Login from "./components/Login";

const App = () => (
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/users" component={GetUsers} />
        <Route path="/hierarchy" component={Hierarchy} />
        <Route path="/unitmaster" component={unitmaster} />
        <Route path="/payee" component={Payee} />
        <Route path="/process" component={Process} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  </React.StrictMode>
);

export default App;
