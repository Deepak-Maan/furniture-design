import React from 'react'
import PrimaryButton from './PrimaryButton'

const Hero = () => {
  return (
    <div className='max-w-[1320px] mx-auto px-3 '>
      <h1 className='text-white font-poppins font-bold text-center pt-5 sm:pt-8 md:pt-16 text-xl lg:pt-32 md:text-2xl lg:text-5xl max-w-[908px] mx-auto'>Awesome Design Best Furniture For Your Interior</h1>
      <p className='text-center text-white font-poppins text-base sm:text-xl font-normal pt-4 pb-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus </p>
      <div className='text-center'><PrimaryButton name="SHOP NOW" /></div>
    </div>
  )
}

export default Hero
