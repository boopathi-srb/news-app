
import React from 'react';
import classes from './App.module.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Topbar from './pages/topbar/Topbar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import Footer from './pages/Footer/Footer';
import Apple from './components/apple/Apple';
import India from './components/india/India';
import WSJ from './components/wsj/WSJ';
import Tesla from './components/tesla/Tesla';
import Techcrunch from './components/techcrunch/Techcrunch';
import USA from './components/usa/USA'


function App(){
  return(
   
      <div className={classes.App}>
        <Router>
      <div><header><Topbar/></header></div>
      <div  className={classes.body}>
        <Switch>
          <Route path="/" exact>
             <Home/>
          </Route>
          <Route path="/About" exact>
             <About/>
          </Route>
          <Route path="/Contact" exact>
             <Contact/>
          </Route> 
          <Route path="/Apple" exact>
             <Apple/>
          </Route>
          <Route path="/India" exact>
              <India/>
          </Route>
          <Route path="/Tesla" exact>
              <Tesla/>
          </Route>
          <Route path="/Techcrunch" exact>
              <Techcrunch/>
          </Route>
          <Route path="/USA" exact>
              <USA/>
          </Route>
          <Route path="/WSJ" exact>
              <WSJ/>
          </Route>
        </Switch>
      </div>
      <div>
        {/* <footer>
           <Footer/>
        </footer> */}
      </div>
      </Router> 
    </div>
   
  )
}

  


export default App;
