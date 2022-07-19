import React from 'react';
import '../final.css'
import logo from'../assets/logo.svg'
const Navbar = () => {
  return (
    <section className="navbar">
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <div className="location">
          <span className="city">Balasore</span>
          <span className="state">Odisha, India</span>
        </div>
        <div className="navbar-options">
          <div className="navbar-option">
            <span className="material-icons">person_outline</span> Sign In
          </div>
          <div className="navbar-option">
            <span className="material-icons">shopping_bag</span> Cart
          </div>
          <div className="navbar-option">
            <span className="material-icons">support</span> Help
          </div>
          <div className="navbar-option">
            <span className="material-icons">search</span> Search
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
