import React from 'react'
import HomeAbout from '../../Home/HomeAbout/HomeAbout'

const AboutChoose = () => {
    return (
        <>
            <div className='p-5 lg:p-20 bg-black'>
                <div className='flex flex-col xl:flex-row justify-center gap-12 items-center text-white '>
                    <div className=''>
                        <img className='rounded-xl ' src="./img/about-baner-1_cvxzp8.webp" alt="" />
                    </div>
                    <div className='space-y-8'>
                        <h1 className='text-3xl lg:text-5xl font-bold text-center lg:text-left'>Why Choose Creasoft</h1>
                        <div className='flex flex-col xl:flex-row xl:text-left text-center justify-between'>
                            <div className='space-y-1'>
                                <h1 className='text-4xl font-bold text-[#63B597]'>100+</h1>
                                <h2 className='tracking-wide font-bold'>Project Completed</h2>
                            </div>
                            <div>
                                <h1 className='text-4xl font-bold text-[#63B597]' >120+</h1>
                                <h2 className='tracking-wide font-bold'>Satisfied Clients</h2>
                            </div>
                            <div>
                                <h1 className='text-4xl font-bold text-[#63B597]'>10+</h1>
                                <h2 className='tracking-wide font-bold'>Awards Wins</h2>
                            </div>
                        </div>
                        <p className='text-base lg:text-lg text-center xl:w-[700px] w-auto lg:text-left '>At Creasoft, we're not just a service provider; we're your dedicated partner in success. Our commitment to excellence permeates every aspect of what we do. With a team of seasoned experts, a proven track record of delivering results, and a client-centric approach, we stand out in the industry. Choose us for unparalleled quality, reliability, and a personalized experience that goes beyond your expectations. Join hands with us and embark on a journey of service excellence that's tailored to your unique needs. Your success is our success, and we're here to make it happen.</p>
                        <div className='flex flex-col xl:space-y-0 space-y-2 xl:flex-row justify-between'>
                            <button
                                className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                            >
                                <span className='relative z-10'>24/7 Support</span>
                                <div
                                    className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                                >
                                </div>
                            </button>
                            <button
                                className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                            >
                                <span className='relative z-10'>Unique Design</span>
                                <div
                                    className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                                >
                                </div>
                            </button>
                            <button
                                className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                            >
                                <span className='relative z-10'>Clean Code Develop</span>
                                <div
                                    className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                                >
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <HomeAbout />
            </div>
        </>

    )
}

export default AboutChoose
