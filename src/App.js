import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
// import Project from './components/Project';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <Router>
      
      <div className = 'min-h-screen py-10 px-3 sm: px-5 bg-purple-200'>
        <Header/>
        
        <Switch> 
          <Route path="/contact">
            <Contact/>
            
          </Route>
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch> 
         
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
