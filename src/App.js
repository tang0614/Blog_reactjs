import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Classes from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Home from "./containers/Home/Home";
import Bread from "./containers/Bread/Bread";
import Cake from "./containers/Cake/Cake";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Ingredient from "./containers/Ingredient/Ingredient";
import Notfound from "./containers/NotFound/Notfound";

function App() {
  return (
    <div className={Classes.App}>
      <Header />
      <Hero />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/bread/" component={Bread} />
        <Route exact path="/bread/:postId" component={Bread} />
        <Route exact path="/cake/" component={Cake} />
        <Route exact path="/cake/:postId" component={Cake} />
        <Route exact path="/ingredient" component={Ingredient} />
      </Switch>
    </div>
  );
}

export default App;
