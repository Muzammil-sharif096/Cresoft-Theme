import React from 'react'
import { NavbarData } from '../../Data'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const handleclk = () => {
        setShowNavbar(false)
    }

    return (
        <nav className='flex justify-between items-center lg:px-28 px-2 py-5 bg-gray-700'>
            <img src="./img/logo (1).svg" alt="" />
            <ul className='xl:flex hidden gap-12 font-bold tracking-wide text-white items-center'>
                {
                    NavbarData.map((ele) => {
                        return (
                            <li className='hover:text-[#63B597]'><Link to={ele.Link}>{ele.Li}</Link></li>
                        )
                    })
                }
                <button
                    className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-black text-white overflow-hidden'
                >
                    <span className='relative z-10'>Get Consultation</span>
                    <div
                        className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                    >
                    </div>
                </button>
            </ul>
            <button onClick={() => setShowNavbar(true)} className='xl:hidden lg:block'>
                <FaBars className='text-2xl' />
            </button>
            {
                showNavbar && (
                    <div className='lg:hidden fixed top-0 left-0 w-96 h-screen bg-black bg-opacity-90 z-50'>
                        <div className='flex justify-end p-7'>
                            <button className='text-white text-2xl cursor-pointer' onClick={() => setShowNavbar(false)}>
                                <FaTimes />
                            </button>
                        </div>
                        <div className='mt-4 p-2'>
                            <h1 className='text-3xl px-4 tracking-wide text-white font-bold'>Exclusive</h1>
                            <hr className='border-[#63B597] p-2 mt-2' />
                            <ul className='text-white flex flex-col cursor-pointer items-start px-4 text-base font-semibold text-center'>
                                {
                                    NavbarData.map((ele, index) => (
                                        <React.Fragment key={index}>
                                            <li className='py-3 tracking-wider' key={index}><Link onClick={handleclk} to={ele.Link}>{ele.Li}</Link></li>
                                            <hr className='border w-full' />
                                        </React.Fragment>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar
