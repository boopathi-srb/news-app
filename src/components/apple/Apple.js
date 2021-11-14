import React, {useState, useEffect} from 'react'
import axios from 'axios';
import classes from '../news.module.css';


function Apple() {
  const [News, setData] = useState([]);
  useEffect(()=>{
    const loadNews= async()=>{
      const resp = await axios.get
      ("https://newsapi.org/v2/everything?q=apple&from=2021-11-13&to=2021-11-13&sortBy=popularity&apiKey=18dde8a47aa34ac8b657a9c7a1a76592");
      setData(resp.data.articles);
    };
    loadNews( );
  },[]);
  console.log(News, "RESPONSE")

  return (
    <div className={classes.App} > 
     {News && News.map((item) => {
       return (
         <div>
           <div className={classes.card}>
             <img alt='news' src={item.urlToImage} />
             <h3 className={classes.card_title}>{item.title}</h3>
             <p>{item.description}</p>
             <button className={classes.Button}>Read More</button>
           </div>
         </div>);
     }) }
    </div>
  )
}

export default Apple
