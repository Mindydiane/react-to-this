import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
// import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import About from './components/About';


function App() {
  return (
    <div className = 'min-h-screen py-10 px-3 sm: px-5 bg-grapy-100'>
      <Header/>
      <Nav/>
      <About></About>
      <Footer/>
    </div>
  );
}

export default App;
