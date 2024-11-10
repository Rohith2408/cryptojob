import React from 'react';
import logo from './logo.svg';
import './App.css';
import Section1 from './components/Section1';
import About from './components/About';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Section1/>
      <About/>
      <Form/>
    </div>
  );
}

export default App;
