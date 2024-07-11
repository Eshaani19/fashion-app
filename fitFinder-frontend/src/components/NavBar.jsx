import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = ({ loggedIn, handleLogout }) => {
  return (
    <nav className='bg-gradient-to-r from-pink-500 to-orange-400 backdrop-blur-sm h-24 fixed top-0 left-0 right-0 p-4 z-50'>
      <div className='container mx-auto flex justify-between items-center h-full  gap-[100px] font-bold text-lg font-sans  '>
        <nav className=''>
          <a href="#" className='text-black '><img className="w-24 h-24 rounded-lg"src="logo3.png" alt='logo'></img></a>
        </nav>
        <nav className='flex justify-center gap-36 items-center'>
          <Link to="/" className="text-white hover:text-blue-200">Home</Link>
          <Link to="/faq" className="text-white hover:text-blue-200">FAQ</Link>
          {!loggedIn && <Link to="/login" className="text-white hover:text-blue-200">Login</Link>}
          {!loggedIn && <Link to="/signup" className="text-white hover:text-blue-200">Signup</Link>}
          {loggedIn && <Link to="/account" className="text-white hover:text-blue-200">My Account</Link>}
          {loggedIn && <button onClick={handleLogout} className="text-white">Logout</button>}
        </nav>
      </div>
    </nav>
  )
}

export default NavBar
