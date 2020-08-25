import React from "react";
import { Switch, Route } from "react-router-dom";
import Classes from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./containers/Hero/Hero";
import Home from "./containers/Home/Home";
import AsyncCompo from "./hoc/asyncCompo";

import "bootstrap/dist/css/bootstrap.min.css";

const AsyncCake = AsyncCompo(() => {
  return import("./containers/Cake/Cake");
});

const AsyncContact = AsyncCompo(() => {
  return import("./containers/Contact/Contact");
});

const AsyncAbout = AsyncCompo(() => {
  return import("./containers/About/About");
});
function App() {
  return (
    <div className={Classes.App}>
      <Header />
      <Hero />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={AsyncContact} />
        <Route exact path="/cake/:postId" component={AsyncCake} />
        <Route exact path="/cake" component={AsyncCake} />

        <Route exact path="/about" component={AsyncAbout} />
      </Switch>
    </div>
  );
}

export default App;
