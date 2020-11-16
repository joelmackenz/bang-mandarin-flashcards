import React from 'react';
import {Link} from 'react-router-dom';
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <Link className="nav-logo" to='/home'>照!</Link>
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
