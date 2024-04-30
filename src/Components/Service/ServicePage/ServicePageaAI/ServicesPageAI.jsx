import React from 'react'

const ServicesPageAI = () => {
    return (
        <div className='flex flex-col xl:flex-row justify-center gap-12 items-center text-white p-5 lg:p-20 bg-black'>
            <div className='space-y-8'>
                <h1 className='text-3xl lg:text-5xl font-bold text-center lg:text-left'>AI Development</h1>
                <p className='text-base lg:text-lg text-center xl:w-[700px] w-auto lg:text-left '>Unlock the potential of Artificial Intelligence with our cutting-edge AI Development Services. From machine learning algorithms to natural language processing, we specialize in crafting intelligent solutions that elevate your business. Embrace innovation, enhance efficiency, and stay ahead in the digital landscape with Creasoft's AI Development Services</p>
                <div className='flex xl:justify-start justify-center'>
                    <button
                        className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                    >
                        <span className='relative z-10'>Hire Us</span>
                        <div
                            className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
    w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                        >
                        </div>
                    </button>

                </div>
            </div>
            <div className=''>
                <img className='rounded-xl ' src="./img/Rectangle_53_xrmjlu.webp" alt="" />
            </div>
        </div>
    )
}

export default ServicesPageAI
