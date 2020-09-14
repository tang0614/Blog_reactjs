import React from "react";
import { Switch, Route } from "react-router-dom";
import Classes from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./containers/Hero/Hero";
import Home from "./containers/Home/Home";
import AsyncCompo from "./hoc/asyncCompo";

import "bootstrap/dist/css/bootstrap.min.css";
import Posts from "./containers/Posts/Posts";
import PostContent from "./components/PostContent/PostContent";
import SmallProject from "./containers/SmallProject/SmallProject";
require("dotenv").config();

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
        <Route exact path="/posts/:_id" component={PostContent} />
        <Route exact path="/contact" component={AsyncContact} />
        <Route exact path="/about" component={AsyncAbout} />
        <Route exact path="/side/:name" component={SmallProject} />
      </Switch>
    </div>
  );
}

export default App;
