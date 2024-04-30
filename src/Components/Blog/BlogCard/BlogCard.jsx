import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const BlogCard = () => {
    return (
        <div className='xl:flex flex-col xl:flex-row justify-center gap-12 bg-black xl:p-28 p-4'>
            <div>
                <div className='border-2 mt-12 px-2 xl:w-[370px] w-full py-5 text-white'>
                    <ul className='text-xl space-y-3'>
                        <div className='flex justify-between items-center'>
                            <li>CATEGORY</li>
                            <FaArrowRight className='text-sm text-red-500' />
                        </div>
                        <hr />
                        <div className='flex justify-between items-center'>
                            <li className='text-base'>Artificial Intelligence</li>
                            <FaArrowRight className='text-sm text-red-500' />
                        </div>
                        <hr />
                        <div className='flex justify-between items-center'>
                            <li className='text-base'>Blockchain</li>
                            <FaArrowRight className='text-sm text-red-500' />
                        </div>
                        <hr />
                        <div className='flex justify-between items-center'>
                            <li className='text-base'>Web Development</li>
                            <FaArrowRight className='text-sm text-red-500' />
                        </div>
                    </ul>
                </div>
            </div>
            <div>
                <div className='grid xl:grid-cols-2 grid-cols-1  gap-6 mt-10'>
                    <div>
                        <div className='space-y-2 relative bg-gray-800 rounded-md shadow-lg text-white'>
                            <Link to="/blogpage">
                                <img className='xl:w-[450px]  w-full objec-contain rounded-md' src="./img/Group_1261152779_yjjqvz.webp" alt="" />
                                <button className='absolute top-6 font-bold left-4 text-black px-6 py-2 rounded-3xl bg-green-500'>Blockchain</button>
                            </Link>
                            <p className='xl:text-2xl text-base font-bold xl:py-5 py-2 xl:px-4 px-1'>The Future of Blockchain <br /> Technology: Trends and Predictions <br /> for 2024</p>
                        </div>
                    </div>
                    <div>
                        <div className='space-y-2 relative bg-gray-800 rounded-md shadow-lg text-white'>
                            <Link to="/blogpage">
                                <img className='xl:w-[450px] w-full objec-contain rounded-md' src="./img/Group_1261152779_yjjqvz.webp" alt="" />
                                <button className='absolute top-6 font-bold left-4 text-black px-6 py-2 rounded-3xl bg-green-500'>AI</button>
                            </Link>
                            <p className='xl:text-2xl text-base font-bold xl:py-5 py-2 xl:px-4 px-1'>Exploring the Role of AI in <br /> Blockchain: Enhancing Security and <br />Efficiency</p>
                        </div>
                    </div>
                    <div>
                        <div className='space-y-2 relative bg-gray-800 rounded-md shadow-lg text-white'>
                            <Link to="/blogpage">
                                <img className='xl:w-[450px] w-full objec-contain rounded-md' src="./img/Group_1261152779_yjjqvz.webp" alt="" />
                                <button className='absolute top-6 font-bold left-4 text-black px-6 py-2 rounded-3xl bg-green-500'>DeFi</button>
                            </Link>
                            <p className='xl:text-2xl text-base font-bold xl:py-5 py-2 xl:px-4 px-1'>Understanding Decentralized <br /> Finance (DeFi) and its Impact on <br /> Traditional Banking</p>
                        </div>
                    </div>
                    <div>
                        <div className='space-y-2 relative bg-gray-800 rounded-md shadow-lg text-white'>
                            <Link to="/blogpage">
                                <img className='xl:w-[450px] w-full objec-contain rounded-md' src="./img/Group_1261152779_yjjqvz.webp" alt="" />
                                <button className='absolute top-6 font-bold left-4 text-black px-6 py-2 rounded-3xl bg-green-500'>Blockchain</button>
                            </Link>
                            <p className='xl:text-2xl text-base font-bold xl:py-5 py-2 xl:px-4 px-1'>Blockchain's Impact on Supply  <br /> Chain  Management:  Enhancing on <br /> Transparency and Traceability</p>
                        </div>
                    </div>
                    <div>
                        <div className='space-y-2 relative bg-gray-800 rounded-md shadow-lg text-white'>
                            <Link to="/blogpage">
                                <img className='xl:w-[450px] w-full objec-contain rounded-md' src="./img/Group_1261152779_yjjqvz.webp" alt="" />
                                <button className='absolute top-6 font-bold left-4 text-black px-6 py-2 rounded-3xl bg-green-500'>Gaming Industry</button>
                            </Link>
                            <p className='xl:text-2xl text-base font-bold xl:py-5 py-2 xl:px-4 px-1'>The Role of Blockchain in the <br /> Gaming Industry: NFTs, Virtual on  <br /> Economies, and Beyond</p>
                        </div>
                    </div>
                    <div>
                        <div className='space-y-2 relative bg-gray-800 rounded-md shadow-lg text-white'>
                            <Link to="/blogpage">
                                <img className='xl:w-[450px] w-full objec-contain rounded-md' src="./img/Group_1261152779_yjjqvz.webp" alt="" />
                                <button className='absolute top-6 font-bold left-4 text-black px-6 py-2 rounded-3xl bg-green-500'>AI</button>
                            </Link>
                            <p className='xl:text-2xl text-base font-bold xl:py-5 py-2 xl:px-4 px-1'>Leveraging AI for Enhanced <br /> Customer Experience in Blockchain- <br />Based Platforms</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
