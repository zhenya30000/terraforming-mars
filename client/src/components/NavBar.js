import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isAuthenticated, onLogout }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {isAuthenticated ?
          <>
            <li><Link to="/players">Players</Link></li>
            <li><Link to="/games">Games</Link></li>
            <li><button onClick={onLogout}>Logout</button></li>
          </>
          :
          <li><Link to="/login">Login</Link></li>
        }
      </ul>
    </nav>
  );
}

export default NavBar;
