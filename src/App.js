import React from 'react';
import Header from './components/header';
import Body from './components/Body';
import Footer from './components/footer';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
