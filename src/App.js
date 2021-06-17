import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacts from "./components/DataTables/Contacts";
import Dupa from "./components/DataTables/Dupa";
import Dziwki from "./components/DataTables/Dziwki";
import Header from "./components/Header";

const App = () => (
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Contacts} />
        <Route path="/dupa" component={Dupa} />
        <Route path="/dziwki" component={Dziwki} />
      </Switch>
    </Router>
  </React.StrictMode>
);

export default App;
