import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const HomeServices = () => {
    const [showDiv1, setShowDiv1] = useState(false);
    const [showDiv2, setShowDiv2] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);

    return (
        <div className='bg-black/90 p-5 space-y-7 lg:p-20 text-white'>
            <h1 data-aos="fade-up" className='font-bold text-center text-3xl lg:text-5xl'>Services</h1>
            <p data-aos="fade-up" className='text-center'>Discover the Scope of Our Expertise. Leveraging comprehensive full-stack Blockchain <br /> solutions, we develop cutting-edge products and empower businesses to establish <br /> robust financial frameworks.</p>
            <div className='flex flex-col xl:flex-row justify-center gap-4'>
                <div  className='bg-black/30  px-5 py-4 lg:px-10 lg:py-8 rounded-lg space-y-4'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <img src="./img/Group_1261152774_zjd1pb.svg" alt="" />
                        </div>
                        <div>
                            <h4 className='text-3xl lg:text-5xl font-bold text-[#63B597]'>06</h4>
                        </div>
                    </div>
                    <h4 className='text-xl lg:text-3xl font-bold text-white tracking-wider'>Metaverse Development</h4>
                    <p className='text-sm lg:text-base text-white tracking-wider'>Elevate your brand with strategic digital <br /> marketing. From SEO to social media, w...</p>
                    <div className='flex justify-end'>
                        <button
                            onClick={() => setShowDiv1(true)}
                            className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-black text-white overflow-hidden'
                        >
                            <span className='relative z-10'>Read More</span>
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
                                    <div className='bg-black fixed top-5 xl:p-20 p-5 xl:w-1/2 w-full space-y-1 h-[calc(100vh-40px)] rounded-lg z-50'>
                                        <h1 className='text-right absolute top-2 right-6 text-white cursor-pointer p-2' onClick={() => setShowDiv1(false)}><FaTimes /></h1>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <img src="./img/Group_1261152774_zjd1pb.svg" alt="" />
                                            </div>
                                            <div>
                                                <h4 className='text-3xl lg:text-5xl font-bold text-[#63B597]'>06</h4>
                                            </div>
                                        </div>
                                        <h4 className='text-xl lg:text-3xl font-bold text-white tracking-wider'>Metaverse Development</h4>
                                        <p className='text-sm lg:text-base text-white tracking-wider'>Elevate your brand with strategic digital <br /> marketing. From SEO to social media, w...</p>
                                        <p className='pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis, rem et voluptate atque ad, rerum, natus tenetur aperiam facere dolore. Odit, expedita at. Blanditiis rem asperiores et sunt necessitatibus inventore ipsum, mollitia possimus rerum quo cumque laborum maiores quisquam, praesentium, consequatur fugiat assumenda eum architecto excepturi adipisci enim accusamus! Minima odio odit nulla sit, sequi voluptate enim hic natus, inventore aliquam pariatur. Ad enim recusandae molestiae, voluptates totam iure necessitatibus in modi neque nesciunt est fuga maiores cum architecto! Quidem doloribus eos vel. Repellendus veritatis excepturi nesciunt quo harum reprehenderit? Consectetur, soluta asperiores. Tempore rerum voluptate ducimus deserunt quisquam soluta, repudiandae beatae minus. Eveniet et nihil ab ut? Laudantium voluptatibus rerum pariatur ipsum officiis, deleniti modi quidem excepturi blanditiis reprehenderit animi incidunt repellendus delectus eos possimus aliquam. Aperiam voluptatibus laudantium expedita tempora modi nostrum facere suscipit possimus. Veniam itaque non expedita dolores quidem libero, sapiente commodi aperiam cumque sed. Dolore illo dicta libero adipisci provident consequatur vel, nihil ipsa qui repellat molestiae sit quibusdam mollitia magnam officiis at dolorem consequuntur non animi repellendus aspernatur in vero rerum blanditiis. Similique minus in reprehenderit natus. Iure cumque numquam, nemo atque voluptas quos dignissimos beatae quam! Itaque id placeat tempore voluptatum tempora.</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div  className='bg-black/30  px-5 py-4 lg:px-10 lg:py-8 rounded-lg space-y-4'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <img src="./img/Group_1261152771_fpt0gv.svg" alt="" />
                        </div>
                        <div>
                            <h4 className='text-3xl lg:text-5xl font-bold text-[#63B597]'>07</h4>
                        </div>
                    </div>
                    <h4 className='text-xl lg:text-3xl font-bold text-white tracking-wider'>Cryptocurrency Wallet</h4>
                    <p className='text-sm lg:text-base text-white tracking-wider'> Creasoft specializes in creating versatile multi- <br />currency cryptocurrency wallet...</p>
                    <div className='flex justify-end'>
                        <button
                            onClick={() => setShowDiv2(true)}
                            className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-black text-white overflow-hidden'
                        >
                            <span className='relative z-10'>Read More</span>
                            <div
                                className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                            >
                            </div>
                        </button>
                        {
                            showDiv2 && (
                                <div className='flex justify-center items-center h-screen absolute left-1/2'>
                                    <div className='fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50 z-50'></div>
                                    <div className='bg-black fixed top-5 xl:p-20 p-5 xl:w-1/2 w-full space-y-1 h-[calc(100vh-40px)] rounded-lg z-50'>
                                        <h1 className='text-right absolute top-2 right-6 text-white cursor-pointer p-2' onClick={() => setShowDiv2(false)}><FaTimes /></h1>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <img src="./img/Group_1261152771_fpt0gv.svg" alt="" />
                                            </div>
                                            <div>
                                                <h4 className='text-3xl lg:text-5xl font-bold text-[#63B597]'>07</h4>
                                            </div>
                                        </div>
                                        <h4 className='text-xl lg:text-3xl font-bold text-white tracking-wider'>Cryptocurrency Wallet</h4>
                                        <p className='text-sm lg:text-base text-white tracking-wider'> Creasoft specializes in creating versatile multi- <br />currency cryptocurrency wallet...</p>
                                        <p className='pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis, rem et voluptate atque ad, rerum, natus tenetur aperiam facere dolore. Odit, expedita at. Blanditiis rem asperiores et sunt necessitatibus inventore ipsum, mollitia possimus rerum quo cumque laborum maiores quisquam, praesentium, consequatur fugiat assumenda eum architecto excepturi adipisci enim accusamus! Minima odio odit nulla sit, sequi voluptate enim hic natus, inventore aliquam pariatur. Ad enim recusandae molestiae, voluptates totam iure necessitatibus in modi neque nesciunt est fuga maiores cum architecto! Quidem doloribus eos vel. Repellendus veritatis excepturi nesciunt quo harum reprehenderit? Consectetur, soluta asperiores. Tempore rerum voluptate ducimus deserunt quisquam soluta, repudiandae beatae minus. Eveniet et nihil ab ut? Laudantium voluptatibus rerum pariatur ipsum officiis, deleniti modi quidem excepturi blanditiis reprehenderit animi incidunt repellendus delectus eos possimus aliquam. Aperiam voluptatibus laudantium expedita tempora modi nostrum facere suscipit possimus. Veniam itaque non expedita dolores quidem libero, sapiente commodi aperiam cumque sed. Dolore illo dicta libero adipisci provident consequatur vel, nihil ipsa qui repellat molestiae sit quibusdam mollitia magnam officiis at dolorem consequuntur non animi repellendus aspernatur in vero rerum blanditiis. Similique minus in reprehenderit natus. Iure cumque numquam, nemo atque voluptas quos dignissimos beatae quam! Itaque id placeat tempore voluptatum tempora.</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div  className='bg-black/30  px-5 py-4 lg:px-10 lg:py-8 rounded-lg space-y-4'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <img src="./img/Group_1261152783_oyutry.svg" alt="" />
                        </div>
                        <div>
                            <h4 className='text-3xl lg:text-5xl font-bold text-[#63B597]'>08</h4>
                        </div>
                    </div>
                    <h4 className='text-xl lg:text-3xl font-bold text-white tracking-wider'>App Development</h4>
                    <p className='text-sm lg:text-base text-white tracking-wider'>Building dynamic and responsive digital <br /> solutions that empower your online objec...</p>
                    <div className='flex justify-end'>
                        <button
                            onClick={() => setShowDiv3(true)}
                            className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-black text-white overflow-hidden'
                        >
                            <span className='relative z-10'>Read More</span>
                            <div
                                className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                            >
                            </div>
                        </button>
                        {
                            showDiv3 && (
                                <div className='flex justify-center items-center h-screen absolute left-1/2'>
                                    <div className='fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50 z-50'></div>
                                    <div className='bg-black fixed top-5 xl:p-20 p-5 xl:w-1/2 w-full space-y-1 h-[calc(100vh-40px)] rounded-lg z-50'>
                                        <h1 className='text-right absolute top-2 right-6 text-white cursor-pointer p-2' onClick={() => setShowDiv3(false)}><FaTimes /></h1>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <img src="./img/Group_1261152783_oyutry.svg" alt="" />
                                            </div>
                                            <div>
                                                <h4 className='text-3xl lg:text-5xl font-bold text-[#63B597]'>08</h4>
                                            </div>
                                        </div>
                                        <h4 className='text-xl lg:text-3xl font-bold text-white tracking-wider'>App Development</h4>
                                        <p className='text-sm lg:text-base text-white tracking-wider'>Building dynamic and responsive digital <br /> solutions that empower your online objec...</p>
                                        <p className='pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis, rem et voluptate atque ad, rerum, natus tenetur aperiam facere dolore. Odit, expedita at. Blanditiis rem asperiores et sunt necessitatibus inventore ipsum, mollitia possimus rerum quo cumque laborum maiores quisquam, praesentium, consequatur fugiat assumenda eum architecto excepturi adipisci enim accusamus! Minima odio odit nulla sit, sequi voluptate enim hic natus, inventore aliquam pariatur. Ad enim recusandae molestiae, voluptates totam iure necessitatibus in modi neque nesciunt est fuga maiores cum architecto! Quidem doloribus eos vel. Repellendus veritatis excepturi nesciunt quo harum reprehenderit? Consectetur, soluta asperiores. Tempore rerum voluptate ducimus deserunt quisquam soluta, repudiandae beatae minus. Eveniet et nihil ab ut? Laudantium voluptatibus rerum pariatur ipsum officiis, deleniti modi quidem excepturi blanditiis reprehenderit animi incidunt repellendus delectus eos possimus aliquam. Aperiam voluptatibus laudantium expedita tempora modi nostrum facere suscipit possimus. Veniam itaque non expedita dolores quidem libero, sapiente commodi aperiam cumque sed. Dolore illo dicta libero adipisci provident consequatur vel, nihil ipsa qui repellat molestiae sit quibusdam mollitia magnam officiis at dolorem consequuntur non animi repellendus aspernatur in vero rerum blanditiis. Similique minus in reprehenderit natus. Iure cumque numquam, nemo atque voluptas quos dignissimos beatae quam! Itaque id placeat tempore voluptatum tempora.</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;
