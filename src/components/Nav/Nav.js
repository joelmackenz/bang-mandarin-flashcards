import React from 'react';
import {Link} from 'react-router-dom';
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <h1 className="nav-logo">照!</h1>
      <ul className="nav-links">
          <Link className="nav-style" to='/study'>
            Study
          </Link>

          <Link className="nav-style" to='/dictionary'>
            Dictionary
          </Link>

          <Link className="nav-style" to='/charactersearch'>
            Character Search
          </Link>    
        </ul>
    </nav>
  );
}

export default Nav;