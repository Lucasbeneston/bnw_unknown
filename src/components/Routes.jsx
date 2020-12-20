import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Cities from "./pages/Cities/Cities";
import Portraits from "./pages/Portraits/Portraits";
import NoMatch from "./pages/NoMatch/NoMatch";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/cities" component={Cities} />
      <Route exact path="/portraits" component={Portraits} />
      <Route path="*" component={NoMatch} />
    </Switch>
  );
}
