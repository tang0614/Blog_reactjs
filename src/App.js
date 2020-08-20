import React from "react";
import { Switch, Route } from "react-router-dom";
import Classes from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./containers/Hero/Hero";
import Home from "./containers/Home/Home";
import Cake from "./containers/Cake/Cake";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Ingredient from "./components/Ingredient/Ingredient";
import Notfound from "./containers/NotFound/Notfound";
import Search from "./components/common/search";

function App() {
  return (
    <div className={Classes.App}>
      <Header />
      <Hero />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/search/:postId" component={Search} />
        <Route exact path="/cake" component={Cake} />
        <Route exact path="/cake/:postId" component={Cake} />
        <Route exact path="/ingredient" component={Ingredient} />
        <Route exact path="/notfound" component={Notfound} />
      </Switch>
    </div>
  );
}

export default App;
