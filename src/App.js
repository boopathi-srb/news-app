import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import {Card, Button } from 'antd'
import Meta from 'antd/lib/card/Meta';



function App() {
  const [data, setData]= useState([]);
  useEffect(()=>{
    const loadNews= async()=>{
      const resp = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=18dde8a47aa34ac8b657a9c7a1a76592")
      setData(resp.data.articles);
    };
    loadNews();
  },[]);
  console.log(data, "NEWS")

  return (
    <div className='App'>
      <h1>Welcome to SRB's news page</h1>
      <h3>Done using NewsAPI</h3>
     {data && data.map((item,index)=>{
       return (
         <div>
          <div key= {index} hoverable className='wrapper' >
           <img alt='news' src={item.urlToImage}/>
           <h3>{item.title}</h3>
           <p>{item.description}</p>
           <Button href={item.urlToImage} type='primary'>Read More</Button>
          </div> 
         </div>)
     }) }
    </div>
  )
}

  


export default App;
