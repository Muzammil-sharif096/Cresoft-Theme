import React from 'react';

const HomeExcelling = () => {
    return (
        <div className='bg-black opacity-85 text-center  text-white space-y-9 p-5 lg:p-20'>
            <h1 className='text-3xl lg:text-5xl font-bold'>Excelling In
                <span className='text-[#63B597]'> Metaverse</span> & VR Development</h1>
            <p>Discover how our innovative tools and resources can elevate your service offerings and boost your sales <br /> performance.</p>
            <div className='flex flex-col xl:flex-row justify-center gap-6 rounded-lg text-white'>
                <div data-aos="fade-up">
                    <div className='text-center p-6 lg:p-12 w-full xl:w-80 rounded-xl transform -skew-y-6 hover:-skew-y-0 space-y-2 duration-1000 transition-all bg-gray-950 shadow-lg'>
                        <div className='flex justify-center'>
                            <img src="./img/Icon_2_lp91ug.webp" alt="" />
                        </div>
                        <h1 className='text-xl lg:text-4xl font-bold'>100 +</h1>
                        <h2 className='text-sm lg:text-lg font-medium'>Project Completed</h2>
                    </div>
                </div>
                <div data-aos="fade-up" >
                    <div className='text-center p-6 lg:p-12 w-full xl:w-80 rounded-xl transform -skew-y-6 hover:-skew-y-0 space-y-2 duration-1000 transition-all bg-gray-950 shadow-lg'>
                        <div className='flex justify-center'>
                            <img src="./img/feature-icon-2_qqbxkj.webp" alt="" />
                        </div>
                        <h1 className='text-xl lg:text-4xl font-bold'>120 +</h1>
                        <h2 className='text-sm lg:text-lg font-medium'>Satisfied Clients</h2>
                    </div>
                </div>
                <div data-aos="fade-up" >
                    <div className='text-center p-6 lg:p-12 w-full xl:w-80 rounded-xl transform -skew-y-6 hover:-skew-y-0 space-y-2 duration-1000 transition-all bg-gray-950 shadow-lg'>
                        <div className='flex justify-center'>
                            <img src="./img/feature-icon-3_dcnhc7.webp" alt="" />
                        </div>
                        <h1 className='text-xl lg:text-4xl font-bold'>50 +</h1>
                        <h2 className='text-sm lg:text-lg font-medium'>Expert Teams</h2>
                    </div>
                </div>
                <div data-aos="fade-up" >
                    <div className='text-center p-6 lg:p-12 w-full xl:w-80 rounded-xl transform -skew-y-6 hover:-skew-y-0 space-y-2 duration-1000 transition-all bg-gray-950 shadow-lg'>
                        <div className='flex justify-center'>
                            <img src="./img/feature-icon-4_l1yths.webp" alt="" />
                        </div>
                        <h1 className='text-xl lg:text-4xl font-bold'>10 +</h1>
                        <h2 className='text-sm lg:text-lg font-medium'>Win Awards</h2>
                    </div>
                </div>
            </div>
            <button
                className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
            >
                <span className='relative z-10'>Hire us</span>
                <div
                    className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                >
                </div>
            </button>
        </div>
    );
};

export default HomeExcelling;
