import React from 'react'

const Hometool = () => {
    return (
        <div className='p-20 bg-black space-y-4 '>
            <h1 className='text-white text-center font-bold text-5xl'>Tool</h1>
            <div className='flex justify-evenly items-center pt-12 flex-wrap'>
                <div>
                    <img src="./img/React_rulkpg.webp" alt="" />
                    <h1 className='text-white px-3 py-2'>React</h1>
                </div>
                <div>
                    <img src="./img/Photoshop_y7niy4.webp" alt="" />
                    <h1 className='text-white  py-2'>PhotoShop</h1>

                </div>
                <div>
                    <img src="./img/JavaScript_twjpyw.webp" alt="" />
                    <h1 className='text-white px-1 py-2'>Javascript</h1>

                </div>
                <div>
                    <img src="./img/Semrush_bvzdb6.webp" alt="" />
                    <h1 className='text-white px-2 py-2'>Semrush</h1>
                </div>
            </div>
        </div>
    )
}

export default Hometool
