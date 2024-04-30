import React from 'react'
import { Link } from 'react-router-dom'
import { ServiceCards } from '../../../Data'
const ServiceCard = () => {
    return (
        <div className='bg-black xl:p-52 p-4 space-y-10 py-28 text-white '>
            <div className='-mt-28 space-y-8'>
                <h1 className='font-bold text-center text-3xl lg:text-5xl'>Services</h1>
                <p className='text-center'>Unlock Success with Our Expert Service Offerings - Get Started Today!</p>
            </div>
            <div className=' grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-5 '>
                {
                    ServiceCards.map((ele) => {
                        return (
                            <div className='bg-gray-950 px-5 py-4 lg:px-10   lg:py-8 rounded-lg space-y-4'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <img className='text-white' src={ele.img} alt="qqq" />
                                    </div>
                                    <div>
                                        <h2 className='text-3xl lg:text-5xl font-bold text-[#63B597]'>{ele.h2}</h2>
                                    </div>
                                </div>
                                <h1 className='text-xl lg:text-3xl font-bold text-white tracking-wider'>{ele.h1}</h1>
                                <p className='text-sm lg:text-base text-white tracking-wider'>{ele.p}</p>
                                <div className='flex justify-end'>
                                    <Link to="/servicepage">
                                        <button
                                            className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-black opacity-80 text-white overflow-hidden'
                                        >
                                            <span className='relative z-10'>Read More</span>
                                            <div
                                                className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                                            >
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ServiceCard
