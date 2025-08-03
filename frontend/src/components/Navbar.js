import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Login</Link>
      <Link to="/signup" style={{ marginRight: '10px' }}>Signup</Link>
      <Link to="/stores" style={{ marginRight: '10px' }}>Stores</Link>
      <Link to="/admin">Admin Dashboard</Link>
    </nav>
  );
};

export default Navbar;
