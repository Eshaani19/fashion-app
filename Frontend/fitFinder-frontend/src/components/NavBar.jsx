import React from 'react'

const NavBar = () => {
  return (
    <nav className='bg-opacity-70 backdrop-blur-sm h-24 fixed top-0 left-0 right-0 p-4 '>
      <div className='container mx-auto flex justify-between items-center h-full  gap-[100px] font-bold text-lg font-["gilroy"]  '>
        <nav className=''>
          <a href="#" className='text-black'><img className="w-24 h-24 "src="public/logo1.png" alt='logo'></img></a>
        </nav>
        <nav className='flex justify-center gap-36 items-center'>
        <a href="#" className='text-black'>Home</a>
        <a href="#" className='text-black'>FAQ</a>
        <a href="#" className='text-black'>Login</a>
        </nav>
        <div className='links flex justify-center items-center'>
          {/* Add your links here */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
