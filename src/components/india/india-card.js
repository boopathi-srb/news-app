import {Switch, Route,  BrowserRouter as Router } from 'react-router-dom';
// import India from './India';
import classes from '../card.module.css'
import indiaimage from './india.png'
import { Link } from "react-router-dom";
// import Home from '../../pages/Home/Home';
import React from 'react';
// import {browserHistory} from 'react-router'

const indiaCard=()=> {
  return(
    
    <Router className={classes.App}>
     <div className={classes.card}>
       <img src={indiaimage} alt='indiua-news'/>
       <div className={classes.cardcontent}>
         <h1 className={classes.card_title}>India - Latest news</h1>
         
         <Link to ="/India">
           <button className={classes.Button}>See more!</button>
         </Link>
         
        
         {/* <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/India" component={India}/>
         </Switch> */}
        </div>
     </div>
    </Router>
    
  )
}

export default indiaCard