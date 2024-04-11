import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to ="/login">Login</Link></li>
        <li><Link to="/registration">Registration</Link></li>

      </ul>
    </nav>
  );
}

export default NavBar;
