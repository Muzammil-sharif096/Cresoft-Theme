import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { FaLocationPin, FaMessage, FaVoicemail } from 'react-icons/fa6'

const ContactCard = () => {
    return (
        <div className='2xl:p-20 p-4 bg-black flex flex-wrap 2xl:flex-row justify-evenly gap-8'>
            <div className='p-4'>
                <h1 className='text-white text-4xl p-2 font-bold'>Contact Us If You Have <br /> More Questions.</h1>
                <div className='lg:flex md:flex-col lg:flex-row p-4 gap-8 items-center'>
                    <div className=' text-white w-max rounded-full bg-gray-800 p-4 space-y-2'>
                        <h1 className='text-3xl'><FaLocationPin /></h1>
                    </div>
                    <div className='text-white space-y-2'>
                        <h1 className='text-4xl'>Location</h1>
                        <p className='text-lg'>
                            2001, City Tower 2, Near Emirates Tower Metro station, <br /> Sheikh Zaid road Dubai</p>
                    </div>
                </div>
                <div className='lg:flex md:flex-col lg:flex-row p-4 gap-8 items-center'>
                    <div className=' text-white w-max  rounded-full bg-gray-800 p-4 space-y-2'>
                        <h1 className='text-3xl'><FaPhone /></h1>
                    </div>
                    <div className='text-white space-y-2'>
                        <h1 className='text-4xl'>Phone</h1>
                        <p className='text-lg'>
                            +971506443271</p>
                    </div>
                </div>
                <div className='lg:flex md:flex-col lg:flex-row p-4 gap-8 items-center space-y-2'>
                    <div className=' text-white w-max rounded-full bg-gray-800 p-4'>
                        <h1 className='text-3xl'><FaEnvelope /></h1>
                    </div>
                    <div className='text-white space-y-2'>
                        <h1 className='text-4xl'>Email</h1>
                        <p className='text-lg'>
                            info@creasoft.io</p>
                    </div>
                </div>
                <div className='flex 2xl:justify-center mt-4'>
                    <button
                        className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                    >
                        <span className='relative z-10'>Book Meeting</span>
                        <div
                            className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                        >
                        </div>
                    </button>
                </div>
            </div>
            <div className='text-white'>
                <img className='xl:w-[600px] w-full' src="./img/vt (87).png" alt="" />
            </div>
        </div>
    )
}

export default ContactCard
