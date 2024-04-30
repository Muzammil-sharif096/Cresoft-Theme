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
                        onClick={() => setShowDiv1(true)}
                        className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-black text-white overflow-hidden'
                    >
                        <span className='relative z-10'>Get In Touch</span>
                        <div
                            className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                        >
                        </div>
                    </button>
                    {
                        showDiv1 && (
                            <div className='flex justify-center items-center h-screen absolute left-1/2'>
                                <div className='fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50 z-50'></div>
                                <div className='bg-black fixed top-5 xl:left-[25%] left-0 xl:p-20 p-5 xl:w-1/2 w-full space-y-1 h-[calc(100vh-40px)] rounded-lg z-50'>
                                    <h1 className='text-right absolute top-2 right-6 text-white cursor-pointer p-2' onClick={() => setShowDiv1(false)}><FaTimes /></h1>
                                    <p className='pt-6 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis, rem et voluptate atque ad, rerum, natus tenetur aperiam facere dolore. Odit, expedita at. Blanditiis rem asperiores et sunt necessitatibus inventore ipsum, mollitia possimus rerum quo cumque laborum maiores quisquam, praesentium, consequatur fugiat assumenda eum architecto excepturi adipisci enim accusamus! Minima odio odit nulla sit, sequi voluptate enim hic natus, inventore aliquam pariatur. Ad enim recusandae molestiae, voluptates totam iure necessitatibus in modi neque nesciunt est fuga maiores cum architecto! Quidem doloribus eos vel. Repellendus veritatis excepturi nesciunt quo harum reprehenderit? Consectetur, soluta asperiores. Tempore rerum voluptate ducimus deserunt quisquam soluta, repudiandae beatae minus. Eveniet et nihil ab ut? Laudantium voluptatibus rerum pariatur ipsum officiis, deleniti modi quidem excepturi blanditiis reprehenderit animi incidunt repellendus delectus eos possimus aliquam. Aperiam voluptatibus laudantium expedita tempora modi nostrum facere suscipit possimus. Veniam itaque non expedita dolores quidem libero, sapiente commodi aperiam cumque sed. Dolore illo dicta libero adipisci provident consequatur vel, nihil ipsa qui repellat molestiae sit quibusdam mollitia magnam officiis at dolorem consequuntur non animi repellendus aspernatur in vero rerum blanditiis. Similique minus in reprehenderit natus. Iure cumque numquam, nemo atque voluptas quos dignissimos beatae quam! Itaque id placeat tempore voluptatum tempora.</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div data-aos="fade-left" className='mt-6 xl:mt-0 xl:ml-10'>
                    <img className='h-[300px] xl:h-[75vh] object-cover' src="./img/Homer-Banner_apghtd.webp" alt="" />
                </div>
            </div>
        </div >
    );
};

export default HomeHeader;
