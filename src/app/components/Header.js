import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Header.css';

const Header = () => (
  <header className="header">
    <h1>Math Magicians</h1>
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </nav>
  </header>
);

export default Header;
