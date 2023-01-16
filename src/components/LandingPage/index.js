import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import InfoSection from './InfoSection'
import Services from './Services'
import Footer from './Footer'
import {homeObjOne, homeObjTwo, homeObjThree} from './Data'

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  )
}

export default LandingPage