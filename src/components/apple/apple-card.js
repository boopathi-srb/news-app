import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import Apple from './Apple';
import classes from '../card.module.css'
import Appleimage from './Apple.png'

const appleCard = ()=>{
  return(
    
    <Router className={classes.App}>
     <div className={classes.card}>
       <img src={Appleimage} alt='apple-news'/>
       <div className={classes.cardcontent}>
         <h1 className={classes.card_title}>Apple - Latest news</h1>
         <a href="/Apple" className={classes.Button}>
            See more!
         </a>
          
             
        
        </div>
     </div>
    </Router>
    
  )
}
export default appleCard