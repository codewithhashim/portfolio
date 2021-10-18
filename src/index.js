import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';

import About from './components/About'
import Projects from './components/Projects';
import Skills from './components/Skills'

import Hero from './components/Hero';
import './index.css';
import './components/Hero.scss'
import Btt from './components/Btt'



function Home() {
  return (
    <div>
      <Hero />


      <About />
      <Projects />

      <Skills />

      <Footer />
      <Btt />
    </div>
  )
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);

