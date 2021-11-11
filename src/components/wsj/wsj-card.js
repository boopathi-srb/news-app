import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Wsj from './wsj';
import classes from '../card.module.css'
import wsjimage from './wsj.png'

const wsjCard = ()=>{
  return(
    
    <Router className={classes.App}>
     <main className={classes.card}>
       <img src={wsjimage} alt='wsj-news'/>
       <div className={classes.cardcontent}>
         <h1 className={classes.card_title}>Latest news from WSJ</h1>
        
         <Link to ="/wsj">
           <button className={classes.Button}>See more!</button>
         </Link>
      
        </div>
     </main>
    </Router>
    
  )
}
export default wsjCard