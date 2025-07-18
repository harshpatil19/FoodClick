import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <Link className="navbar-brand fs-3 fst-italic" to="/">
          <img src="/images/NavbarLogo.png" width="30" height="30" alt="Logo" /> FoodClick
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Login</Link>
              </li>
             <li className="nav-item">
              <Link className="nav-link" to="/SignUp">Sign-Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
