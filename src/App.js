
import React from 'react';
import classes from './App.module.css';
import Home from './pages/Home/Home';
import Topbar from './components/topbar/Topbar';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


function App(){
  return(
   
    <div className={classes.App}>
      <div><header><Topbar/></header></div>
      <div  className={classes.body}>
        <Home/>
      </div>
      
    </div>
    
  )
}

  


export default App;
