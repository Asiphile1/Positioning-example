import React from 'react';
import '../assets/styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="circle"></div>
      <div className="box-container">
        <div className="box box1"></div>
        <div className="box box2"></div>
        <div className="box box3"></div>
        <div className="circle"></div>
      </div>
    </nav>
  );
}

export default Navbar;
