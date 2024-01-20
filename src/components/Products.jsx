import React, { useEffect, useState } from "react";
import sofa1 from "../assets/images/sofa1.webp";
import sofa2 from "../assets/images/sofa2.webp";
import sofa3 from "../assets/images/sofa3.webp";
import sofa4 from "../assets/images/sofa4.webp";
import sofa5 from "../assets/images/sofa5.webp";
import sofa6 from "../assets/images/sofa6.webp";
import { Cross, Fivestars } from "./Icon";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";


const Products = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [clear, setClear] = useState(false);
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    const addToCart = (el) => {
        let AddItems = true
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === el.id){

            }
        }
        if (AddItems) {
            setCart([...cart, el]);
            setIsOpen(true);
            setClear(false);
        }
    };
    const clearAll = () => {
        setClear(true);
    };
    const removeToCart = (el) => {
        let items = [...cart]
        items = items.filter(cartItem => cartItem.id !== el.id)
        setCart(items)
    };
    const closeCart = () => {
        setIsOpen(false);
    };
    const ProductData = [
        {
            id: 1,
            img: sofa1,
            ProductName: "Single Sofa",
            Rating: <Fivestars />,
            Description: "Lorem ip sumdolor",
            price: "₹1200.00",
            AddToCart: <SecondaryButton text="ADD TO CART" />,
        },
        {
            id: 2,
            img: sofa2,
            ProductName: "Single Sofa",
            Rating: <Fivestars />,
            Description: "Lorem ip sumdolor",
            price: "₹1200.00",
            AddToCart: <SecondaryButton text="ADD TO CART" />,
        },
        {
            id: 3,
            img: sofa3,
            ProductName: "Single Sofa",
            Rating: <Fivestars />,
            Description: "Lorem ip sumdolor",
            price: "₹1200.00",
            AddToCart: <SecondaryButton text="ADD TO CART" />,
        },
        {
            id: 4,
            img: sofa4,
            ProductName: "Single Sofa",
            Rating: <Fivestars />,
            Description: "Lorem ip sumdolor",
            price: "₹1200.00",
            AddToCart: <SecondaryButton text="ADD TO CART" />,
        },
        {
            id: 5,
            img: sofa5,
            ProductName: "Single Sofa",
            Rating: <Fivestars />,
            Description: "Lorem ip sumdolor",
            price: "₹1200.00",
            AddToCart: <SecondaryButton text="ADD TO CART" />,
        },
        {
            id: 6,
            img: sofa6,
            ProductName: "Single Sofa",
            Rating: <Fivestars />,
            Description: "Lorem ip sumdolor",
            price: "₹1200.00",
            AddToCart: <SecondaryButton text="ADD TO CART" />,
        },
    ];
    const cardcomponent = ProductData.map((el) => (
        <div className=" w-full max-w-[422px] max-h-[483px] bg-white py-3 sm:py-5 px-3 sm:px-6 hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)] duration-300 group overflow-hidden" key={el.id}>
            <img className="w-full group-hover:scale-[0.9] duration-300  " src={el.img} alt="sofa1" />
            <div className=" flex justify-between pt-4">
                <p className=" text-[20px] font-medium font-[poppins] text-black">{el.ProductName}</p>
                <span>{el.Rating}</span>
            </div>
            <p className=" text-lg font-normal font-[poppins] text-[#4D4D4D] pt-4">{el.Description}</p>
            <div className=" flex justify-between pt-5 pb-5 sm:pb-[53px]">
                <p className=" text-[28px] font-semibold font-[poppins] text-black ">{el.price}</p>
                <div onClick={() => addToCart(el)}>{el.AddToCart}</div>
            </div>
        </div>
    ));
    return (
        <div className=" max-w-[1320px] mx-auto px-3 pt-7 sm:pt-10 md:pt-[135px]">
            <h2 className="text-[#BD7D41] text-sm sm:text-xl font-normal font-[poppins] relative before:absolute lg:before:w-[96px] before:h-[1px] max-lg:text-center before:bg-black before:left-0 before:top-[45%] lg:pl-[110px]">Shopping Store
            </h2>
            <div className=" flex md:flex-row flex-col justify-between pb-5 sm:pb-8 md:pb-11 lg:pb-[90px]">
                <p className="text-[#243040] max-lg:text-center text-xl sm:text-[35px] font-bold font-poppins max-md:pb-5">Our Products</p>
                <div className="max-lg:text-center">
                    <PrimaryButton name="VIEW ALL PRODUCT" />
                </div>
            </div>
            <div className=" grid xl:grid-cols-3 justify-center md:grid-cols-2 gap-3 sm:gap-5 lg:gap-[42px]">{cardcomponent}</div>
            {isOpen && (
                <div className='bg-white sm:max-w-[450px]  md:max-w-[500px] shadow-2xl h-full fixed z-50 w-full  top-0 right-0'>
                    <div className='p-8 flex flex-col justify-between h-full gap-20 overflow-y-scroll'>
                        <div>
                            <div className='flex items-center justify-between'>
                                <div onClick={closeCart} className="cursor-pointer pr-4">
                                    <PrimaryButton  name="Close" />
                                </div>
                                <div onClick={clearAll}>
                                    <PrimaryButton name="Clear All" />
                                </div>
                            </div>
                            <h2 className='text-[#243040] text-2xl sm:text-3xl lg:text-[35px] font-Poppins font-bold max-w-[436px] mt-3 md:mt-4 lg:mt-6 leading-normal'>Products</h2>
                            <p className='text-[#243040] text-xl sm:text-2xl lg:text-3xl font-Poppins font-medium max-w-[436px] mt-7 md:mt-10 lg:mt-12 leading-normal'>Checkout</p>
                            {clear ? (<div><img className='mt-8' src="../assets/images/laptop.webp" alt="" /></div>) : (<div>
                                {
                                    cart.map((el) => (
                                        <div key={el.id}>
                                            <div className='bg-white rounded-lg shadow mt-6 relative'>
                                            <div onClick={() => removeToCart(el)} className=' cursor-pointer absolute top-2 right-2'><Cross /></div>
                                                <div className='py-2 px-2 flex max-sm:flex-col flex-row  w-full'>
                                                    <img className=' rounded-xl max-w-[200px]' src={el.img} alt="cart-items" />
                                                    <div className='flex w-full flex-col mt-3 sm:mt-0 sm:ml-4'>
                                                        <div className='flex justify-between  items-center'>
                                                            <p className='text-[#243040] text-sm sm:text-base font-Poppins font-normal max-w-[436px] leading-normal'>{el.ProductName}</p>                                                            
                                                        </div>
                                                        <p className='text-[#4D4D4D] text-base sm:text-sm font-Poppins font-normal mt-1 leading-normal'>{el.Description}</p>
                                                        <div className='flex'>
                                                            <p className='text-black text-xs xl:text-[13px] mt-2 font-Poppins opacity-90 font-medium leading-normal'>{el.price}</p>
                                                            <p className='text-black text-[11px] xl:text-[12px] mt-2 font-Poppins opacity-60 ml-2 font-normal leading-normal line-through'>₹ 2000.00</p>
                                                        </div>
                                                        <div className='flex gap-2 mt-2'>
                                                            <p className='text-black text-xs xl:text-[13px] mt-1 font-Poppins font-medium leading-normal'>Quantity :</p>
                                                            <p className='text-black text-xs xl:text-[13px] mt-1 font-Poppins font-normal leading-normal'>1</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>)
                            }
                        </div>
                        <PrimaryButton name="Buy Now" />
                    </div>
                </div>
            )}
        </div>
    )
};

export default Products;