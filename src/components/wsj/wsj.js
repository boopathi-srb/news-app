import React, {useState, useEffect} from 'react'
import axios from 'axios';
import classes from '../news.module.css';

function render1(){
  return []
}
function WSJ() {
  const [News, setData] = useState(()=> render1());
  useEffect(()=>{
    const loadNews= async()=>{
      const resp = await axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=18dde8a47aa34ac8b657a9c7a1a76592")
      setData(resp.data.articles);
    };
    loadNews();
  },[]);
  console.log(News, "NEWS")

  return (
    <div>
      <h1>Welcome to SRB's news page</h1>
      <h3>Done using NewsAPI</h3>
     {News && News.map((item)=>{
       return (
         <div className={classes.body}>
          <div className={classes.wrapper} >
           <img alt='news' src={item.urlToImage}/>
           <h3 className={classes.title}>{item.title}</h3>
           <p className={classes.description}>{item.description}</p>
           <button className={classes.Button} type='primary'>Read More</button>
          </div> 
         </div>)
     }) }
    </div>
  )
}

export default WSJ