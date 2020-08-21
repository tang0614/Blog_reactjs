import React from "react";
import { Switch, Route } from "react-router-dom";
import Classes from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./containers/Hero/Hero";
import Home from "./containers/Home/Home";
import Cake from "./containers/Cake/Cake";
import Ingredient from "./containers/Ingredient/Ingredient";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className={Classes.App}>
      <Header />
      <Hero />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cake/:postId" component={Cake} />
        <Route exact path="/cake" component={Cake} />

        <Route exact path="/byIngredient" component={Cake} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
