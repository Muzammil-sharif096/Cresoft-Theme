import React from 'react'

const ServicePageImg = () => {
    return (
        <div className='flex justify-center flex-col items-center p-20 bg-gray-950 text-white space-y-5'>
            <img src="./img/Daniel_G_zdzelv (1).webp" alt="" />
            <h1 className='text-5xl font-bold'>Still Have Questions?</h1>
            <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
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
        </div>
    )
}

export default ServicePageImg
