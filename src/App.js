import React from 'react';
import { Footer, Team, Box1, Box2, Box3 } from './containers';
import { CTA, Navbar, Logos } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Box1 />
    </div>
    <Logos />
    <Box2 />
    <Box3 />
    <CTA />
    <Team />
    <Footer />
  </div>
  )
}

export default App