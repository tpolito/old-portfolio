import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item">Home</a>
          <a className="navbar-item">About</a>
          <a className="navbar-item">Projects</a>
          <a className="navbar-item">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
