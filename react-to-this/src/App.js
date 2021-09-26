import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
// import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import About from './components/About';
import Card from './components/About/card';


function App() {
  return (
    <div className = 'min-h-screen py-10 px-3 sm: px-5 bg-purple-200'>
      <Header/>
      <Nav/>
      <Card/>
      <About></About>
      <Footer/>
    </div>
  );
}

export default App;
