import React from 'react';
import classes from './Home.module.css';
import Tech from './Techcrunch';
import Appleimage from '../Images/Apple.png'
import Teslaimage from '../Images/Tesla.jpg'
import Techcrunchimage from '../Images/Techcrunch.png'
import WSJimage from '../Images/wsj.png'
import businessimage from '../Images/business.jpg'



function Home(){
  return(
    <div className={classes.body}>
      <div className={classes.greeting}>
      <h1>Welcome to SRB's news page</h1>
      <h3>Done using NewsAPI</h3>
      </div>
      <div className={classes.App}>
        <div className={classes.card}>
          <img src={Appleimage} alt='apple-news'/>
          <div className={classes.cardcontent}>
            <h1 className={classes.card_title}>Apple - Latest news</h1>
            <button className={classes.Button}>See more</button>
          </div>
        </div>
        <div className={classes.card}>
         <img src={Teslaimage} alt='Tesla-news'/>
         <div className={classes.cardcontent}>
           <h1 className={classes.card_title}>Tesla - latest news</h1>
           <button  className={classes.Button}>See more</button>
         </div>
        </div>
        <div className={classes.card}>
         <img src={Techcrunchimage} alt='Techcrunch-news'/>
         <div className={classes.cardcontent}>
          <h1 className={classes.card_title}>Techcrunch news</h1>
          <button className={classes.Button} onClick={Tech}>See more</button>
         </div>
        </div>
        <div className={classes.card}>
         <img src={WSJimage}  alt='Wallstreet-news'/>
         <div className={classes.cardcontent}>
          <h1 className={classes.card_title}>Wallstreet journal</h1>
          <button className={classes.Button}>See more</button>
         </div>
        </div>
        <div className={classes.card}>
          <img src={businessimage}  alt='business-news'/>
          <div className={classes.cardcontent}>
           <h1 className={classes.card_title}>Top business news</h1>
           <button className={classes.Button}>See more</button>
         </div>
        </div>
      </div>
    </div>
  )
}

  


export default Home;