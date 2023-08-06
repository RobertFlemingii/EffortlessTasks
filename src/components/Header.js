import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Effortless Tasks</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#">Home</a></li>
          <li className="nav-item"><a href="#">Tasks</a></li>
          <li className="nav-item"><a href="#">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
