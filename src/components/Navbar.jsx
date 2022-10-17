import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <Link to={'/'}>Home</Link>
        <Link to={'cart'} className='cart'><ShoppingCartIcon /> Cart</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
