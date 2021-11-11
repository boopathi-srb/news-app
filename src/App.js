
import React from 'react';
import classes from './App.module.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Topbar from './pages/topbar/Topbar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


function App(){
  return(
   <Router>
      <div className={classes.App}>
      <div><header><Topbar/></header></div>
      <div  className={classes.body}>
        <Switch>
          <Route path="/" exact>
             <Home/>
          </Route>
          <Route path="/About" exact>
             <About/>
          </Route>
          <Route path="/Contact" exact>
             <Contact/>
          </Route> 
        </Switch>
      </div>
    </div>
   </Router> 
  )
}

  


export default App;
