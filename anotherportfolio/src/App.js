import React from 'react';
import "./styles.css";
import Header from './Header';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles =makeStyles({})

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>

      <Header />     
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} /> 
        <Route exact path="/portfolio" render={props => <Portfolio {...props} />} />
        <Route exacxt path="/contact" render={props => <Contact {...props} />} />
      </Switch>
   
    </div>
  );
}


 