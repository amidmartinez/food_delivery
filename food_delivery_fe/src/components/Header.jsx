import React from 'react';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <p></p>
        </div>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
