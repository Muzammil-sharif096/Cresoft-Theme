import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
const HomeHeader = () => {
    const [showDiv1, setShowDiv1] = useState(false);
    Aos.init({ duration: 1000 });
    return (
        <div className='header bg-gray-800'>
            <div className='flex flex-col xl:flex-row justify-between items-center px-5 xl:px-28 py-10 xl:py-20'>
                <div data-aos="fade-right" className='text-center xl:text-left relative '>
                    <h1 className='text-4xl xl:text-5xl text-white tracking-widest font-bold leading-tight mb-4 xl:mb-6'>
                        THE FUSION OF BLOCKCHAIN & <br />
                        <span className='text-[#63B597]'>Artificial Intelligence <br /> Technologies</span>
                    </h1>
                    <p className='text-white text-lg xl:text-3xl tracking-wide mb-6 xl:mb-8'>
                        Boost Your Online Presence and Drive Sales with Our Proven <br /> Strategies
                    </p>
                    <button
                        className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-black text-white overflow-hidden'
                    >
                        <span className='relative z-10'>Get In Touch</span>
                        <div
                            className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                        >
                        </div>
                    </button>
                </div>
                <div data-aos="fade-left" className='mt-6 xl:mt-0 xl:ml-10'>
                    <img className='h-[300px] xl:h-[75vh] object-cover' src="./img/Homer-Banner_apghtd.webp" alt="" />
                </div>
            </div>
        </div >
    );
};

export default HomeHeader;
