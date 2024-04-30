import React from 'react';

const HomeClient = () => {
    return (
        <div className='text-white p-5 md:p-10 lg:p-20 space-y-7 bg-black/90'>
            <h2 className='text-[#63B597] text-lg md:text-xl lg:text-2xl text-center'>Testimonial</h2>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center'>Client Say About Us</h1>
            <p className='text-center'>Our clients praise our exceptional service and commitment, driving us to exceed <br /> expectations and deliver outstanding results consistently.</p>
            <div className='bg-gray-900 w-full md:w-[60%] rounded-lg mx-auto px-5 md:px-12 py-8 md:py-16'>
                <div className='space-y-3'>
                    <h2 className='text-2xl md:text-3xl font-bold'>Alice L.</h2>
                    <h3 className='text-gray-100'>Co-Founder</h3>
                    <p className='text-sm md:text-base'>Creasoft played a pivotal role in establishing our NFT marketplace. Their expertise in NFT development, combined with a creative <br />approach, resulted in a platform that stands out in the market. We're delighted with the outcome and grateful for their collaborative spirit.</p>
                    <img className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 ' src="./img/Sarah_M_id9hud.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeClient;
