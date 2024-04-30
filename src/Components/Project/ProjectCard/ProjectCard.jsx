import React from 'react'
import { ProjectCards } from '../../../Data'
import { Link } from 'react-router-dom'
const ProjectCard = () => {
    return (
        <>
            <div className='p-20 bg-black space-y-6'>
                <h1 className='text-4xl font-bold text-white text-center'>Project</h1>
                <p className='text-center text-white'>Unlock Success with Our Expert Service Offerings - Get Started Today!</p>
                <ul className='text-white 2xl:flex flex-wrap space-y-5 2xl:space-y-0 list-none justify-center gap-8'>
                    <li className='px-8 py-3 bg-[#63B597] rounded-xl font-bold'>All</li>
                    <li className='px-8 py-3 bg-gray-800 hover:bg-[#63B597] hover:text-black rounded-xl font-bold'>AI Development</li>
                    <li className='px-8 py-3 bg-gray-800 hover:bg-[#63B597] hover:text-black rounded-xl font-bold'>Blockchain Development</li>
                    <li className='px-8 py-3 bg-gray-800 hover:bg-[#63B597] hover:text-black rounded-xl font-bold'>Web Development</li>
                    <li className='px-8 py-3 bg-gray-800 hover:bg-[#63B597] hover:text-black rounded-xl font-bold'>App Development</li>
                    <li className='px-8 py-3 bg-gray-800 hover:bg-[#63B597] hover:text-black rounded-xl font-bold'>UI/UX Design</li>
                </ul>
                <div className='grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 2xl:p-48 p-1 2xl:py-12 gap-6'>
                    {
                        ProjectCards.map((ele) => {
                            return (
                                <div className='relative '>
                                    <Link to="/projectpage">
                                        <img className='' src={ele.img} alt="" />
                                    </Link>
                                    <div className='bg-black xl:flex hidden rounded-md absolute bottom-4 group w-[calc(100%-20px)] left-2.5 h-12 px-3 py-2 overflow-hidden hover:h-24 transition-all duration-500'>
                                        <h1 className='text-xl text-white font-bold tracking-wider'>{ele.h1}</h1>
                                        <button className='hidden group-hover:block absolute bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-[#63B597] transition-all duration-1000 font-bold'>View Details</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProjectCard
