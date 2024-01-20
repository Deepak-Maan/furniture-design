import React from 'react'
import SecondaryButton from "./SecondaryButton"
const Festival = () => {
  return (
    <div className='max-w-[1320px] mx-auto px-3 pb-28 pt-[138px]'>
      <div className="grid lg:grid-cols-2 gap-9">
        <div className='bg-[url("./assets/images/Festival1.webp")] bg-no-repeat bg-cover bg-center ps-5 sm:ps-[107px] pb-5 sm:pb-[71px]'>
            <p className='text-black font-normal text-xl font-poppins pb-5 pt-8'>Festival Offer</p>
            <h2 className='text-[#BD7D41] text-[35px] font-bold font-poppins pb-4'>Upto 40% Off</h2>
            <p className='max-w-[262px] text-[#3F3F3E] text-lg font-normal pb-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <SecondaryButton text='ADD TO CART'/>
        </div>
        <div className='bg-[url("./assets/images/Festival2.webp")] bg-no-repeat bg-cover  bg-center ps-5 sm:ps-[107px] pb-5 sm:pb-[71px]'>
            <p className='text-black font-normal text-xl font-poppins pb-5 pt-8'>Festival Offer</p>
            <h2 className='text-[#BD7D41] text-[35px] font-bold font-poppins pb-4'>Upto 40% Off</h2>
            <p className='max-w-[262px] text-[#3F3F3E] text-lg font-normal pb-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <SecondaryButton text='ADD TO CART'/>
        </div>
      </div>
    </div>
  )
}

export default Festival
