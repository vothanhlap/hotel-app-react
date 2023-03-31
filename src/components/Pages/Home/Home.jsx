import React from 'react'
import DestinationHome from '../../HomeSection/Destina/DestinationHome'
import Download from '../../HomeSection/Download/Download'
import Gallery from '../../HomeSection/Gallery/Gallery'
import Hero from '../../HomeSection/Hero'
import HomeAbout from '../../HomeSection/HomeAbout'
import MostPouplar from '../../HomeSection/popular/MostPouplar'
import Works from '../../Work/Works'

import "./Home.css"


const Home = () => {
  return (
   <>
    <Hero/>
    <HomeAbout/>
    <MostPouplar/>
    <DestinationHome/>
    <Download/>
    <Works/>
    <Gallery/>
    
    
   </>
  )
}

export default Home