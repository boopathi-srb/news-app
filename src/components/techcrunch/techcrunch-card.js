import {Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Tech from './Techcrunch';
import classes from '../card.module.css'
import techcrunchimage from './Techcrunch.png'

const techcrunchCard = ()=>{
  return(
    
    <Router className={classes.App}>
     <div className={classes.card}>
       <img src={techcrunchimage} alt='techcrunch-news'/>
       <div className={classes.cardcontent}>
         <h1 className={classes.card_title}>Techcrunch - Latest news</h1>
         
         <Link to ="/Techcrunch">
           <button className={classes.Button}>See more!</button>
         </Link>
         
        </div>
     </div>
    </Router>
    
  )
}
export default techcrunchCard