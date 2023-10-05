import React from 'react';
import '../css/Header.css'

export default function Header(){

  return (
    <header className="header-section">

      <a href="#home" className="logo">
      <img src="/logo.svg" alt='logo' />
      </a>

      <nav className="navbar">
        <a href="#home" >Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

