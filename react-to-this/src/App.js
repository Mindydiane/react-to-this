import React from 'react';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import About from './components/About';
import Header from './components/Header';


function App() {
  return (
    <div className = 'min-h-screen py-10 px-3 sm: px-5 bg-purple-200'>
      <Header/>
      <Portfolio/>
      <About></About>
      <Footer/>
    </div>
  );
}

export default App;
