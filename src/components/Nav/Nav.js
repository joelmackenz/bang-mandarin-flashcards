import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import "./Nav.css";

function Nav() {

const navStyle = {
    color:'black'
}

  return (
    <nav>
        <ul className="nav-links">

            <Link className="navStyle" to='/study'>
              Study
            </Link>

            <Link className="navStyle" to='/shop'>
              Shop
            </Link>

            <Link className="navStyle" to='/dictionary'>
              Dictionary
            </Link>

            <Link className="navStyle" to='/API'>
              API
            </Link>
            
        </ul>
    </nav>
  );
}

export default Nav;
