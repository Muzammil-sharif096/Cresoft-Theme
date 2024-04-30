import React from 'react'

const JobCurrent = () => {
    return (
        <div className='xl:p-20 p-6 space-y-5 bg-black text-white'>
            <div className='xl:flex flex-col xl:flex-row items-center xl:justify-between xl:px-40 xl:space-y-0 space-y-6'>
                <h1 className='text-5xl font-bold'>Current Job Openings</h1>
                <button
                    className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                >
                    <span className='relative z-10'>Create Your CV</span>
                    <div
                        className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                    >
                    </div>
                </button>
            </div>
            <div className='2xl:px-52 py-5 space-y-3 '>
                <h1 className='text-4xl font-bold'>Sr. HR</h1>
                <p className='text-lg'>As an HR Officer at Creasoft, you will play a key role in managing various aspects of human resources and contributing to the overall success of our organization. This  position offers an exciting opportunity to work in the dynamic Software industry and collaborate with a talented team of professionals.</p>
                <button
                    className='px-6 xl:px-8 py-3 xl:py-4 relative  rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                >
                    <span className='relative z-10'>Apply Now</span>
                    <div
                        className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                    >
                    </div>
                </button>
                <button
                    className='px-6 xl:px-8 py-3 xl:py-4 relative sm:ml-3 ml-0  rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                >
                    <span className='relative z-10'>More Details</span>
                    <div
                        className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                    >
                    </div>
                </button>
            </div>
            <div className='2xl:px-52  py-5 space-y-3'>
                <h1 className='text-4xl font-bold'>Sr. Full Stack Developer</h1>
                <p className='text-lg'>Creasoft is looking for a curious Software Engineer to join our team! The position will include building great products, tackling interesting challenges, and contributing to our engineering culture. We expect you to work in pairs, use test-driven development, be experienced in building complex web applications, and write clean and maintainable code.</p>
                <button
                    className='px-6 xl:px-8 py-3 xl:py-4 relative  rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                >
                    <span className='relative z-10'>Apply Now</span>
                    <div
                        className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                    >
                    </div>
                </button>
                <button
                    className='px-6 xl:px-8 py-3 xl:py-4 relative sm:ml-3 ml-0  rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                >
                    <span className='relative z-10'>More Details</span>
                    <div
                        className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                    >
                    </div>
                </button>
            </div>
            <div className='2xl:px-52 py-5 space-y-3'>
                <h1 className='text-4xl font-bold'>Sr. UI/UX Designer</h1>
                <p className='text-lg'>Creasoft is looking for an enthusiastic and talented UI/UX Designer to design software and platforms that meet users' needs. You will combine interfaces and workflows to enhance the user experience. In this role, you should be an analytical and creative designer who can grasp user needs and solve problems. A strong portfolio of successful UX/UI is essential. Ultimately, you will make our projects more user-friendly and intuitive to make the best design as per the client's expectations.</p>
                <button
                    className='px-6 xl:px-8 py-3 xl:py-4 relative  rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                >
                    <span className='relative z-10'>Apply Now</span>
                    <div
                        className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                    >
                    </div>
                </button>
                <button
                    className='px-6 xl:px-8 py-3 xl:py-4 relative sm:ml-3 ml-0 rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                >
                    <span className='relative z-10'>More Details</span>
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

export default JobCurrent
