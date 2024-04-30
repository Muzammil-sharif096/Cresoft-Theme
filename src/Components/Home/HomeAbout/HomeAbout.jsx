import React from 'react';

const HomeAbout = () => {
    return (
        <div className='flex flex-col xl:flex-row justify-center gap-12 items-center text-white p-5 lg:p-20 bg-black'>
            <div className='space-y-8'>
                <h1 className='text-3xl lg:text-5xl font-bold text-center lg:text-left'>About Us</h1>
                <p className='text-base lg:text-lg text-center xl:w-[700px] w-auto lg:text-left '>At Creasoft, we're not just a service provider; we're your dedicated partner in success. Our commitment to excellence permeates every aspect of what we do. With a team of seasoned experts, a proven track record of delivering results, and a client-centric approach, we stand out in the industry. Choose us for unparalleled quality, reliability, and a personalized experience that goes beyond your expectations. Join hands with us and embark on a journey of service excellence that's tailored to your unique needs. Your success is our success, and we're here to make it happen.</p>
                <div className='flex xl:justify-start justify-center'>
                    <button
                        className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                    >
                        <span className='relative z-10'>Our Story</span>
                        <div
                            className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                        >
                        </div>
                    </button>

                </div>
            </div>
            <div className=''>
                <img className='rounded-xl ' src="./img/about-baner-1_cvxzp8.webp" alt="" />
            </div>
        </div>
    );
};

export default HomeAbout;
