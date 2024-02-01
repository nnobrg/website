import React from 'react';
import { Footer, OurTeam, DentalAI, Header, Information, Information2 } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <DentalAI />
    <Information />
    <Information2 />
    <CTA />
    <OurTeam />
    <Footer />
  </div>
  )
}

export default App