import React, { useState } from 'react'
import WecomeImg from "../assets/images/WelcomeImg.webp"
import PrimaryButton from './PrimaryButton'
import { PlayIcon } from './Icon'

const Welcome = () => {
    const [showModal, setshowModal] = useState(false);
  function showme() {
    setshowModal(true);
  }
    return (
        <div className='relative'>
            <div className='max-w-[1320px] px-3 mx-auto'>
                <div className="grid lg:grid-cols-2 lg:pt-32 md:pt-16 sm:pt-8 pt-4">
                    <div className='relative order-2 lg:order-1'>
                        <div  className='relative inline-block max-lg:mt-4'>
                            <img className='relative z-[3]  shadow-[3px_8px_26px_0px_rgba(0,0,0,0.12)]' src={WecomeImg} alt="sofa img" />
                            <div onClick={showme} className=' px-4 flex items-center bg-white py-1 sm:py-4 absolute bottom-0 right-0 z-[5]'>
                                <p className='relative before:absolute before:w-[66px] before:h-[1px] before:bg-black before:right-[10px] before:top-[56%] pr-[85px] text-[#243040] text-sm font-normal font-poppins'>Explore Video</p> <div className=' cursor-pointer'><PlayIcon/></div>
                            </div>
                        </div>
                        <div className='w-[416px] h-[336px] max-lg:hidden bg-gradient-to-l from-gray-300 to-gray-800 absolute top-[-10%] left-[-10%]'></div>
                    </div>
                    <div className='order-1 lg:order-2'>
                        <p className='text-[#BD7D41] text-xl font-normal font-poppins relative before:absolute sm:before:w-[96px] before:h-[1px] before:bg-black before:left-0 before:top-[45%] sm:pl-[110px] max-sm:text-center'>Welcome Our Story</p>
                        <h2 className='text-[#243040] text-xl sm:text-[35px] font-bold font-poppins max-w-[436px] pt-5 max-sm:text-center'>We create the product you tell us you wish existed.</h2>
                        <p className='text-[#4D4D4D] text-base sm:text-lg font-normal font-poppins max-w-[596px] pt-5 pb-4 max-sm:text-center sm:pb-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, urna at pulvinar porta, augue lorem ullamcorper orci, non rhoncus nisi neque sit amet nibh. Phasellus consectetur semper ante et mattis</p>
                        <div className="max-sm:text-center">
                            <PrimaryButton name='READ MORE' />
                        </div>
                    </div>
                </div>
            </div>
            {showModal ? (
        <>
          <div onClick={() => setshowModal(false)} className="fixed z-[7] top-0 left-0 h-full min-h-screen backdrop-blur-sm w-full flex items-center justify-center bg-[rgba(2,80,102,0.67)]">
            <div onClick={() => setshowModal(true)}  className="bg-white p-5 rounded-[5px] relative">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PaTDGJeyCso?si=XRtqIm9Hx4s5S56M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
             <div className="flex items-center justify-end mt-5">
                <button onClick={() => setshowModal(false)} className="mt-4 text-end py-3 rounded-[4px] group hover:bg-[#025066] px-8 border border-solid border-[#025066] transition-colors duration-300 ease-linear" ><p className="text-[16px] font-medium group-hover:text-white text-[#025066]"> Close</p></button>
              </div>
            </div>
          </div>
        </>
      ) : null}
        </div>
    )
}

export default Welcome
