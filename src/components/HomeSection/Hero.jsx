import React from 'react'
import Data from './Data'
import Slide from './Slide'
import '../Pages/Home/Home.css';
const Hero = () => {
  return (
    <>
    <Slide slides={Data}/>
    </>
  )
}

export default Hero