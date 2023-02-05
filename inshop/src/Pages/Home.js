import React from 'react'
import Benefits from '../components/Benefits'
import Category from '../components/Category'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Popular from '../components/Popular'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <Popular />
      <Benefits />
      <Testimonials />
      <NewsLetter />
    </div>
  )
}
 
export default Home