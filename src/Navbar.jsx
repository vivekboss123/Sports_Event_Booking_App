
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          
          <li className="dropdown">
            <span>Login as</span> 
            <ul className="dropdown-content">
              <li><Link to="/employee-login">Employee Login</Link></li>
              <li><Link to="/hr-login">HR Login</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
