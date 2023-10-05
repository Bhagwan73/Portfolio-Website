import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience';
import StarsCanvas from './components/canvas/Start';
import Header from './components/Header';
import Tech from './components/Tech';
import StylishCursor from './components/Cursor';

export default function App() {
  return (
    <BrowserRouter >
    <StylishCursor/>
      <Header />
      <Home />
      <About />
      <Experience />
        <Tech/>
      <Projects/>
      <div className="contact-wrapper">
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
}
