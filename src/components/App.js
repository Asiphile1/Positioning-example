import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Content from './Content';
import ContentCircle from './Contentcircle';
import Footer from './Footer';
import '../assets/styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Content />
      <ContentCircle />
      <Footer />
    </div>
  );
}

export default App;
