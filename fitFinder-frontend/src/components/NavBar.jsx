import React from 'react'


const NavBar = () => {
  return (
    <nav className='bg-gradient-to-r from-pink-500 to-orange-400 backdrop-blur-sm h-24 fixed top-0 left-0 right-0 p-4 z-50'>
      <div className='container mx-auto flex justify-between items-center h-full  gap-[100px] font-bold text-lg font-sans  '>
        <nav className=''>
          <a href="#" className='text-black '><img className="w-24 h-24 rounded-lg"src="public/logo3.png" alt='logo'></img></a>
        </nav>
        <nav className='flex justify-center gap-36 items-center'>
        <a href="#" className='text-white hover:text-blue-200'>Home</a>
        <a href="#" className='text-white hover:text-blue-200'>FAQ</a>
        <a href="#" className='text-white hover:text-blue-200'>Login</a>
        </nav>
        <div className='links flex justify-center items-center'>
          {/* Add your links here */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
