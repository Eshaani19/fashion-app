import React from 'react'
import NavBar from './NavBar'
import { motion, useScroll } from "framer-motion"

const LandingPage = () => {
  const {scrollYProgress} = useScroll()
  return (
    <div className=' h-screen w-full bg-gray-100'> 
      <div className="bg-gray-100 h-screen relative w-full  ">
      <motion.div
      style={{scaleX:scrollYProgress}}
       className='h-28 w-full bg-orange-600 fixed origin-left z-20  '>
</motion.div>
      </div>
       <NavBar/>
    
       <div className="container mx-auto flex h-[calc(100vh-88px)] mt-24">
        <div className="w-1/2 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-orange-100 opacity-50"></div>
          <div className="relative z-10 text-center px-8">
            <h1 className="text-6xl font-bold mb-4 text-pink-700">SUMMER COLLECTION</h1>
            <p className="text-gray-700 mb-6 text-orange-600">A specialist creating essentials. Crafted with an unwavering commitment to exceptional quality.</p>
            <button className="bg-pink-600 text-white px-6 py-3 hover:bg-pink-600 transition duration-300">TRY NOW →</button>
          </div>
        </div>
        <div className="w-1/2">
          <img src="public/outfit-img3.jpeg" alt="fitFinder App" className="w-full h-auto" />
        </div>
      </div>
      {/* Product Categories */}
      <div className="container mx-auto py-16 mt-24">
        <h2 className="text-3xl font-bold mb-8 text-orange-700">CLOTHING COLLECTIONS</h2>
        <div className="bg-gradient-to-r from-pink-200 to-orange-100 p-8 rounded-lg">
          <div className="flex gap-8">
            <div className="w-3/4">
              <img src="public/outfit-img2.jpeg" alt="Outfit Collection" className="w-full h-auto rounded-lg" />
              <h3 className="text-3xl font-bold mb-8 text-pink-700 mt-4">SEASONAL OUTFITS</h3>
              <div className="flex justify-center mt-4 space-x-4">
                <button className="text-gray-800 hover:text-black">Spring</button>
                <button className="text-gray-800 hover:text-black">Summer</button>
                <button className="text-gray-800 hover:text-black">Fall</button>
                <button className="text-gray-800 hover:text-black">Winter</button>
              </div>
            </div>
            <div className="w-1/4">
              <img src="public/outfit-img1.jpeg" alt="Clothing Items" className="w-full h-auto rounded-lg" />
              <h3 className="text-2xl font-semibold text-pink-500 mt-4">OCCASION OUTFITS</h3>
              <a href="#" className="text-orange-500 hover:underline">TRY NOW</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage