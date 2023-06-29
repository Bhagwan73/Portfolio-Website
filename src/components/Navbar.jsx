import React from 'react';

export default function Navbar(){

  return (
    <header className="header">
      <a href="#home" className="logo">
      <img src="/logo.svg" alt='logo' />
      </a>
      <nav className="navbar">
        <a href="#home" >Home</a>
        <a href="#about">About</a>
        <a href="#experience">Expertise</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

