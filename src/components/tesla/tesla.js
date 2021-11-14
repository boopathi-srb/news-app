import React, {useState, useEffect} from 'react'
import axios from 'axios';
import classes from '../card.module.css';

function render1(){
  return []
}
function Tesla() {
  const [News, setData] = useState(()=> render1());
  useEffect(()=>{
    const loadNews= async()=>{
      const resp = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2021-09-24&sortBy=publishedAt&apiKey=18dde8a47aa34ac8b657a9c7a1a76592")
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
         <div>
          <div className={classes.wrapper} >
           <img alt='news' src={item.urlToImage}/>
           <h3>{item.title}</h3>
           <p>{item.description}</p>
           <button type='primary'>Read More</button>
          </div> 
         </div>)
     }) }
    </div>
  )
}

export default Tesla