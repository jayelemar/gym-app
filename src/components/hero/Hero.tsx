import React from 'react'
import HeroSlider from './HeroSlider'


const Hero = () => {
  return (
    <section id='home' className='h-[912px] bg-hero bg-cover bg-center bg-no-repeat bg-red-300'>
      <div className="container mx-auto h-full">
        {/* Hero Slider */}
        <HeroSlider />
      </div>
    </section>
  )
}

export default Hero