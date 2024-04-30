import React from 'react'

const Homeproject = () => {
    return (
        <div  className='bg-black opacity-85 space-y-8 xl:p-20 p-4'>
            <h1 className='text-4xl font-bold text-white text-center'>Project</h1>
            <p className='text-center text-white'>Unlock Success with Our Expert Service Offerings - Get Started Today!</p>
            <ul className='text-white flex flex-wrap list-none justify-center lg:gap-8 md:gap-6 gap-3'>
                <li className='px-8 py-3 bg-[#63B597] rounded-xl font-bold'>All</li>
                <li className='px-8 py-3 bg-gray-950 hover:bg-[#63B597] hover:text-black rounded-xl font-bold'>AI Development</li>
                <li className='px-8 py-3 bg-gray-950 hover:bg-[#63B597] hover:text-black rounded-xl font-bold'>Blockchain Development</li>
                <li className='px-8 py-3 bg-gray-950 hover:bg-[#63B597] hover:text-black rounded-xl font-bold'>Web Development</li>
                <li className='px-8 py-3 bg-gray-950 hover:bg-[#63B597] hover:text-black rounded-xl font-bold'>App Development</li>
                <li className='px-8 py-3 bg-gray-950 hover:bg-[#63B597] hover:text-black rounded-xl font-bold'>UI/UX Design</li>
            </ul>
            <div className='grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 lg:px-40 px-2 p-4 gap-4 '>
                <div className='relative'>
                    <img className='' src="./img/Group_1261152861_sdjjzi.webp" alt="" />
                    <div className='bg-black xl:flex hidden rounded-md absolute bottom-4 group w-[calc(100%-20px)] left-2.5 h-12 px-3 py-2 overflow-hidden hover:h-24 transition-all duration-500'>
                        <h1 className='text-xl text-white font-bold tracking-wider'>Jones Dao</h1>
                        <button className='hidden group-hover:block absolute bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-[#63B597] transition-all duration-1000 font-bold'>View Details</button>
                    </div>
                </div>
                <div className='relative'>
                    <img className='' src="./img/Group_1261152991_fngg0d.webp" alt="" />
                    <div className='bg-black xl:flex hidden rounded-md absolute bottom-4 group w-[calc(100%-20px)] left-2.5 h-12 px-3 py-2 overflow-hidden hover:h-24 transition-all duration-500'>
                        <h1 className='text-xl text-white font-bold tracking-wider'>Copin</h1>
                        <button className='hidden group-hover:block absolute bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-[#63B597] transition-all duration-1000 font-bold'>View Details</button>
                    </div>
                </div>
                <div className='relative'>
                    <img className='' src="./img/Group_1261152993_evuogr.webp" alt="" />
                    <div className='bg-black xl:flex hidden rounded-md absolute bottom-4 group w-[calc(100%-20px)] left-2.5 h-12 px-3 py-2 overflow-hidden hover:h-24 transition-all duration-500'>
                        <h1 className='text-xl text-white font-bold tracking-wider'>Pendle</h1>
                        <button className='hidden group-hover:block absolute bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-[#63B597] transition-all duration-1000 font-bold'>View Details</button>
                    </div>
                </div>
                <div className='relative'>
                    <img className='' src="./img/Group_1261152994_dygtcf.webp" alt="" />
                    <div className='bg-black xl:flex hidden rounded-md absolute bottom-4 group w-[calc(100%-20px)] left-2.5 h-12 px-3 py-2 overflow-hidden hover:h-24 transition-all duration-500'>
                        <h1 className='text-xl text-white font-bold tracking-wider'>Symbiosis</h1>
                        <button className='hidden group-hover:block absolute bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-[#63B597] transition-all duration-1000 font-bold'>View Details</button>
                    </div>
                </div>
                <div className='relative'>
                    <img className='' src="./img/Group_1261153003_lztwck.webp" alt="" />
                    <div className='bg-black xl:flex hidden rounded-md absolute bottom-4 group w-[calc(100%-20px)] left-2.5 h-12 px-3 py-2 overflow-hidden hover:h-24 transition-all duration-500'>
                        <h1 className='text-xl text-white font-bold tracking-wider'>Ayanza</h1>
                        <button className='hidden group-hover:block absolute bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-[#63B597] transition-all duration-1000 font-bold'>View Details</button>
                    </div>
                </div>
                <div className='relative'>
                    <img className='' src="./img/Card-Image_tbal7g.webp" alt="" />
                    <div className='bg-black xl:flex hidden rounded-md absolute bottom-4 group w-[calc(100%-20px)] left-2.5 h-12 px-3 py-2 overflow-hidden hover:h-24 transition-all duration-500'>
                        <h1 className='text-xl text-white font-bold tracking-wider'>MintStargram Tech</h1>
                        <button className='hidden group-hover:block absolute bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-[#63B597] transition-all duration-1000 font-bold'>View Details</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button
                    className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                >
                    <span className='relative z-10'>View More</span>
                    <div
                        className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                    >
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Homeproject
