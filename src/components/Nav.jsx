import { CartNav, Cross, PageLogo, SearchNav } from './Icon'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {
    const location = useLocation(); const [isOpen, setOpen] = useState(false); const [search, setSearch] = useState(false); const [input, setInput] = useState([]);
    useEffect(() => {
        if (search) { document.body.classList.add('overflow-hidden'); }
        else { document.body.classList.remove('overflow-hidden'); }
    }, [search]);
    const openinput = (item) => {
        setInput([input, item]);
        setSearch(true);
    };
    const closeModal = () => {
        setSearch(false);
    };
    if (isOpen == true) { document.body.classList.add("overflow-hidden") }
    else { document.body.classList.remove("overflow-hidden") }
    function RemoveOverflow() {
        setOpen(false)
        document.body.classList.remove("overflow-hidden")
    }
    const [nav, setNav] = useState(false)
    function show() {
        setNav(!nav)
        if (nav === false) {
            document.body.classList.add("max-lg:overflow-hidden")
        }
        else {
            document.body.classList.remove("max-lg:overflow-hidden")
        }
    }
    return (
        <>
            <nav className='max-w-[1320px] mx-auto px-3 pt-4'>
                <div className='flex items-center justify-between'>
                    <Link className='flex items-center gap-2'>
                        <PageLogo />
                        <h2 className='text-white text-[33.02px] font-bold font-roboto'>FURNITURE</h2>
                    </Link>
                    <div className='flex items-center'>
                        <ul className={`${nav ? "right-0" : "right-[-100%]"} flex items-center gap-14 mobileView duration-300`}>
                            <li><Link to={"/"} onClick={show} className={`${location.pathname === "/" && " !font-bold relative after:absolute after:w-full after:duration-300 after:h-[3px] after:bg-[#BD7D41] after:-bottom-4 after:left-0"} link1 text-white text-lg font-normal font-roboto`}>HOME</Link></li>
                            <li><Link to="/about" onClick={show} className={`${location.pathname === "/about" && " !font-bold relative after:absolute after:w-full after:duration-300 after:h-[3px] after:bg-[#BD7D41] after:-bottom-4 after:left-0"} link1 text-white text-lg font-normal font-roboto`} >ABOUT US</Link></li>
                            <li><Link to={"/shop"} onClick={show} className={`${location.pathname === "/shop" && " !font-bold relative after:absolute after:w-full after:duration-300 after:h-[3px] after:bg-[#BD7D41] after:-bottom-4 after:left-0"} link1 text-white text-lg font-normal font-roboto`} >SHOP</Link></li>
                            <li><Link to={"contactus"} onClick={show} className={`${location.pathname === "/contactus" && " !font-bold relative after:absolute after:w-full after:duration-300 after:h-[3px] after:bg-[#BD7D41] after:-bottom-4 after:left-0"} link1 text-white text-lg font-normal font-roboto`} >CONTACT US</Link></li>
                            <li className='gap-7 hidden max-sm:flex'>
                                <div onClick={() => openinput('item')} className=' cursor-pointer'>
                                    <SearchNav />
                                </div>
                                <CartNav />
                            </li>
                        </ul>
                        <ul className='flex items-center gap-7 pl-10 max-sm:hidden'>
                            <div onClick={() => openinput('item')} className=' cursor-pointer'>
                                <SearchNav />
                            </div>
                            <li><Link ><CartNav /></Link></li>
                        </ul>
                        <label className='lg:hidden pl-7' onClick={show}>
                            {nav ? (
                                <div className='relative z-40'>
                                    <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl rotate-45 mb-1'></span>
                                    <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl absolute top-0 -rotate-45 mb-1'></span>
                                </div>
                            ) : (
                                <div className='relative z-40'>
                                    <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl mb-1'></span>
                                    <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl mb-1'></span>
                                    <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl'></span>
                                </div>)}
                        </label>
                    </div>
                </div>
                {search && (<div>
                    <div className='bg-white max-w-[300px] hidden   xs:max-w-[380px] sm:max-w-[470px] md:max-w-[600px] min-h-[50px] sm:min-h-[80px] shadow-2xl rounded-full sm:rounded-[40px] fixed z-40 w-full lg:flex flex-col justify-center items-center top-20 left-[67%] -translate-x-1/2'>
                        <div className='flex w-full items-center justify-between'>
                            <input className='px-10 text-black text-base sm:text-xl font-Poppins font-normal w-[90%] bg-transparent outline-none' placeholder='Search...' type="text" name="" id="" />
                            <span onClick={closeModal} className="cursor-pointer pr-10">
                                <Cross/>
                            </span>
                        </div>
                    </div>
                </div>
                )}
            </nav>
        </>
    )
}

export default Navbar 