import React from 'react'
import { FaPlus } from "react-icons/fa";
const ServicePageAsked = () => {
    return (
        <div className='bg-black space-y-3 p-20 text-white'>
            <h1 className='text-center text-white text-4xl font-bold'>Frequently Asked Questions</h1>
            <p className='text-center text-white'>Everything you need to know about the product and billing.</p>
            <div className='xl:flex flex-col xl:flex-row justify-center items-center gap-16'>
                <div>
                    <div className='mt-12 px-2 xl:w-[560px] w-full py-5'>
                        <ul className='text-xl space-y-3'>
                            <div className='flex justify-between items-center'>
                                <li>What is AI development, and how can it benefit my business?</li>
                                <FaPlus className='text-sm text-red-500' />
                            </div>
                            <hr />
                            <div className='flex justify-between items-center'>
                                <li>What types of AI solutions does Creasoft offer?</li>
                                <FaPlus className='text-sm text-red-500' />
                            </div>
                            <hr />
                            <div className='flex justify-between items-center'>
                                <li>Is AI development suitable for businesses of all sizes?</li>
                                <FaPlus className='text-sm text-red-500' />
                            </div>
                            <hr />
                            <div className='flex justify-between items-center'>
                                <li>Can Creasoft integrate AI into existing systems?</li>
                                <FaPlus className='text-sm text-red-500' />
                            </div>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='mt-12 px-2 xl:w-[560px] w-full py-5'>
                        <ul className='text-xl space-y-3'>
                            <div className='flex justify-between  items-center'>
                                <li>What is AI development, and how can it benefit my business?</li>
                                <FaPlus className='text-sm text-red-500' />
                            </div>
                            <hr />
                            <div className='flex justify-between items-center'>
                                <li>What types of AI solutions does Creasoft offer?</li>
                                <FaPlus className='text-sm text-red-500' />
                            </div>
                            <hr />
                            <div className='flex justify-between items-center'>
                                <li>Is AI development suitable for businesses of all sizes?</li>
                                <FaPlus className='text-sm text-red-500' />
                            </div>
                            <hr />
                            <div className='flex justify-between items-center'>
                                <li>Can Creasoft integrate AI into existing systems?</li>
                                <FaPlus className='text-sm text-red-500' />
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicePageAsked
