import React from "react";

import Classes from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className={Classes.App}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
