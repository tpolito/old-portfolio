import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
// Section Imports (in order)
import Hero from './components/sections/Hero';
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

const App = () => {
  return (
    <div className="App">
      <div className="colorBand" />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
