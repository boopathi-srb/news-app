import React from "react";
import ReactDOM from 'react-dom';
import classes from './topbar.module.css';
import logo from "./logo.png";
import { useState } from "react";

const Topbar =()=>{
  const[showLinks, setShowLinks] = useState(false)
  return(
    <div>
     <div className={classes.topbar}>
       <div>
       </div>
      <img  classname={classes.logo}src={logo} alt="logo"/>
      <div className={classes.rightside}>
       <input type="checkbox" id="toggle_button" className={classes.toggle_button}>
       </input>
       <nav className={classes.topbar_links} id={showLinks ? "hidden" : " "}>
         <a href="../../pages/Home/Home">Home</a>
         <a href="../../pages/About">About</a>
         <a href="../../pages/Contact">Contact</a>
       </nav>
       <label for="toggle_button" className={classes.toggle_button_label}>
         <span></span>
       </label>
      </div>
     </div>
    </div>
  )
}
export default Topbar