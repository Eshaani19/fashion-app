import React from 'react'
import LandingPage from './components/LandingPage'
import PageTwo from './components/PageTwo'
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();


const App = () => {
  return (
    <div>
    <LandingPage/>
    {/* <PageTwo/> */}
    </div>
  )
}

export default App