import React, { Component } from 'react'
import classes from './footer.module.css'
import logo from '../topbar/logo.png'


export class Footer extends Component {
  render() {
    return (
      <div className={classes.body}>

       <div className={classes.footer}>
         <img  classname={classes.logo} src={logo} alt="logo"/>
         <div className={classes.footer_rightside}>
         <h3 className={classes.title}> Quick links</h3>
         <div className={classes.footer_links} >
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/Contact">Contact</a>
         </div>
         </div>
        </div>
     
      </div>
    )
  }
}

export default Footer
