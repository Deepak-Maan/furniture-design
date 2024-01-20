import React from 'react'
import { PageLogo } from './Icon'

const Preloader = () => {
    return (
        <div>
            <div class='flex space-x-2 justify-center items-center flex-col bg-white h-screen '>
                <div className=' animate-bounce mb-11'><div className='flex justify-center items-center'><PageLogo/></div>
                <h2 className='text-black text-[33.02px] font-bold font-roboto'>FURNITURE</h2>

                </div>

                <div className='flex gap-1'>
                    <span class='sr-only'>Loading...</span>
                    <div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                    <div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                    <div class='h-8 w-8 bg-black rounded-full animate-bounce'></div>
                </div>
            </div>
        </div>
    )
}

export default Preloader
