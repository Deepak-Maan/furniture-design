import React from 'react'

const PrimaryButton = (props) => {
  return (
    <div>
<button className='bg-[#BD7D41] py-3 px-6 sm:py-[19px] sm:px-12 text-base sm:text-xl font-poppins font-semibold  text-white z-[1] before:z-[-1] hover:text-[#BD7D41] border before:transition-all before:ease-linear before:hover:bg-white duration-300 before:duration-300 before:absolute before:top-[-100%] before:bg-transparent before:hover:top-[0] before:hover:w-full before:left-0 before:w-full before:h-full border-none outline outline-[#BD7D41] relative overflow-hidden inline-block'>{props.name}</button>
    </div>
  )
}

export default PrimaryButton
