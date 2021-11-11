import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Tesla from './tesla';
import classes from '../card.module.css'
import teslaimage from './tesla.png'

const teslaCard = ()=>{
  return(
    
    <Router className={classes.App}>
     <div className={classes.card}>
       <img src={teslaimage} alt='tesla-news'/>
       <div className={classes.cardcontent}>
         <h1 className={classes.card_title}>Tesla - Latest news</h1>
         
         <Link to ="/Tesla">
           <button className={classes.Button}>See more!</button>
         </Link>
       
        </div>
     </div>
    </Router>
    
  )
}
export default teslaCard