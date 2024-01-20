import React from 'react'
import PrimaryButton from './PrimaryButton'
import WoodenSofa from "../assets/images/wooden-sofa.webp"
const Wooden = () => {
    return (
        <div className='bg-[#F7F7F8] overflow-x-clip'>
            <div className='max-w-[1220px] px-3 mx-auto pt-5 md:pt-16'>
                <div className="grid lg:grid-cols-2">
                    <div className='max-lg:pb-5'>
                        <p className='text-[#BD7D41] text-xl font-normal font-poppins relative max-lg:text-center before:absolute lg:before:w-[96px] before:h-[1px] before:bg-black before:left-0 before:top-[45%] lg:pl-[110px]'>Shopping Store</p>
                        <h2 className='text-[#243040] text-xl sm:text-[35px] font-bold font-poppins max-lg:text-center lg:max-w-[436px] max-lg:mx-auto lg:pb-14 pb-4 pt-5 sm:pt-6 leading-[3rem]'>Wooden Sofa Starts From ₹1200.00</h2>
                        <div className='max-lg:text-center max-lg:pb-5'>
                            <PrimaryButton name='SHOP NOW' />
                        </div>
                    </div>
                    <div className='relative'>
                        <img className=' lg:-translate-x-32 relative z-[5]' src={WoodenSofa} alt="sofa" />
                        <div className='w-[741px] max-lg:hidden h-[270px] bg-[#243040] absolute bottom-[-25%] right-[-61%]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wooden
