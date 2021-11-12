import React, { Component } from 'react'
import classes from "../../App.module.css"

export class About extends Component {
  render() {
    return (
      <div>
       <h1 className={classes.About_title}>About</h1>
       <p>
         This News App is created using NewsAPI and React framework.
       </p>
       <p>
          My previous project: 
          <a href="www.amazon-page-by-srb.vercel.app">  Smart watch</a>
       </p>

      </div>
    )
  }
}

export default About 
