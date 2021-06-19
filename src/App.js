import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetUsers from "./components/DataTables/Users";
import Dupa from "./components/DataTables/Dupa";
import Home from "./components/DataTables/Home";
import Dziwki from "./components/DataTables/Dziwki";
import Payee from "./components/DataTables/Payee";
import Process from "./components/DataTables/Process";
import Header from "./components/Header";

const App = () => (
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={GetUsers} />
        <Route path="/dupa" component={Dupa} />
        <Route path="/dziwki" component={Dziwki} />
        <Route path="/payee" component={Payee} />
        <Route path="/process" component={Process} />
      </Switch>
    </Router>
  </React.StrictMode>
);

export default App;
