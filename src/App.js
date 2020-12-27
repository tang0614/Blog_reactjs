import React,{useEffect} from "react";
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Switch as Switches, Route, Redirect } from "react-router-dom";
import Classes from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./containers/Hero/Hero";
import Home from "./containers/Home/Home";
import AsyncCompo from "./hoc/asyncCompo";
import "bootstrap-css-only/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import "animate.css/animate.min.css";
import PostContent from "./components/PostContent/PostContent";
import SmallProject from "./containers/SmallProject/SmallProject";
import Posts from "./containers/Posts/Posts";
import SmallProjects from "./containers/SmallProjects/SmallProjects";

require("dotenv").config();



const AsyncContact = AsyncCompo(() => {
  return import("./containers/Contact/Contact");
});

const AsyncAbout = AsyncCompo(() => {
  return import("./containers/About/About");
});

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme'); 
  }
  return theme;
};

function App(props) {
  const [theme, setTheme] = React.useState(getStorageTheme());
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
   
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);


  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };


  return (
    <div className={Classes.App}>
      
      <Header />
      <Hero />
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onClick={toggleTheme}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        style={{float:"right", padding:'0.5rem'}}
        label="SWITCH MODE"
      />
      <Switches>
        <Route exact path="/" component={Home} />

        <Route exact path="/posts/:_id" component={PostContent} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/contact" component={AsyncContact} />
        <Route exact path="/about" component={AsyncAbout} />
        <Route exact path="/side/:_id" component={SmallProject} />
        <Route exact path="/side" component={SmallProjects} />
      </Switches>
    </div>
  );
}

export default App;
