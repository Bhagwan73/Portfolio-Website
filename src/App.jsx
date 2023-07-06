import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import './Responsive.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience';
import StarsCanvas from './components/canvas/Start';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <div className="contact-wrapper">
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
}
