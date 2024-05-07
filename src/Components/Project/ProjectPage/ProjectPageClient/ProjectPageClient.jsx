import React, { useState } from 'react'
import { FaLocationPin } from 'react-icons/fa6'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import Homeproject from '../../../Home/HomeProject/Homeproject'

const ProjectPageClient = () => {
    const [img, setImg] = useState(0)
    return (
        <div className='bg-black 2xl:p-20 p-2'>
            <div className=' text-white 2xl:flex flex-col 2xl:flex-row  justify-center gap-4'>
                <div className='2xl:w-[50%] w-full space-y-4'>
                    <img className='border-2' src="./img/Minstagram-Banner_didt2r.webp" alt="" />
                    <h1 className='text-3xl font-bold'>Client & Business Challenge</h1>
                    <p>Our client, a visionary entrepreneur deeply embedded in the digital landscape, presented Creasoft with a formidable  challenge—to revolutionize the traditional paradigms of content creation and distribution. Faced with the dilemma of  content creators receiving meager shares on existing platforms, Creasoft was tasked with providing a solution that  would empower creators and establish a fairer revenue model. The challenge was clear: to conceive and execute a  platform that not only addressed the revenue disparity but also pioneered innovative monetization strategies  through NFTs. Creasoft's mission was to redefine the dynamics of social interaction, content monetization, and  digital asset management, setting the stage for a groundbreaking project that would not merely follow industry  trends but shape them.</p>
                    <h1 className='text-3xl font-bold'>Project Description</h1>
                    <p>Our journey commenced with the ambitious goal of conceptualizing, designing, and implementing MintStargram.tech avant-garde SocialFi platform that seamlessly integrates content creation, NFTs, and community engagement. The objective was not merely to build another platform but to engineer a transformative space that transcends conventional boundaries, offering content creators and users a revolutionary experience in the realm of NFTs and social media. MintStargram.tech was envisioned as a holistic ecosystem that redefines the very essence of digital content interaction, fusing cutting-edge technology with user-centric design to create a paradigm shift in the way we perceive and engage with online content.</p>
                    {
                        img === 0 && (
                            <div className='space-y-3'>
                                <img className='' src="./img/Group_1261156265_xazwxa.webp" alt="" />
                                <button
                                    onClick={() => setImg(1)}
                                    className='px-6 xl:px-8 py-3 xl:py-4  relative rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                                >
                                    <span className='relative z-10'>Next</span>
                                    <div
                                        className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                                    >
                                    </div>
                                </button>
                            </div>
                        )
                    }
                    {
                        img === 1 && (
                            <div className='space-y-3'>
                                <img src="./img/Group_1261156267_rkdkh2.webp" alt="" />
                                <button
                                    onClick={() => setImg(2)}
                                    className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                                >
                                    <span className='relative z-10'>Next</span>
                                    <div
                                        className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                                    >
                                    </div>
                                </button>
                            </div>
                        )
                    }
                    {
                        img === 2 && (
                            <div className='space-y-2'>
                                <img src="./img/Group_1261156269_csjuwa.webp" alt="" />
                                <button
                                    onClick={() => setImg(3)}
                                    className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                                >
                                    <span className='relative z-10'>Next</span>
                                    <div
                                        className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                                    >
                                    </div>
                                </button>
                            </div>
                        )
                    }
                    {
                        img === 3 && (
                            <div className='space-y-3'>
                                <img src="./img/Group_1261156270_ag8dkt.webp" alt="" />
                                <button
                                    onClick={() => setImg(4)}
                                    className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                                >
                                    <span className='relative z-10'>Next</span>
                                    <div
                                        className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                                    >
                                    </div>
                                </button>
                            </div>
                        )
                    }
                    {
                        img === 4 && (
                            <div className='space-y-3'>
                                <img src="./img/Group_1261156272_ckgdbu.webp" alt="" />
                                <button
                                    onClick={() => setImg(0)}
                                    className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                                >
                                    <span className='relative z-10'>Next</span>
                                    <div
                                        className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                                    >
                                    </div>
                                </button>
                            </div>
                        )
                    }
                    <h1 className='text-3xl font-bold'>Key Features</h1>
                    <h2 className='text-2xl font-bold'>Empowering Content Creators:
                    </h2>
                    <p>MintStargram.tech ensures content creators receive up to 90% of the revenue generated, a significant departure from traditional platforms.</p>
                    <h2 className='text-2xl font-bold'>Innovative Monetization With NFT-Posts:
                    </h2>
                    <p>The unique NFT-Post feature allows creators to convert any content—selfies, videos, or text—into NFTs, opening up new avenues for lifetime revenue.</p>
                    <h2 className='text-2xl font-bold'>Multi-Post And Multi-Listing:
                    </h2>
                    <p>With the Multi-Post feature, users can effortlessly distribute content across various social media platforms. The Multi-Listing capability enables NFTs to be listed on multiple marketplaces with just a few clicks, making it a hassle-free experience.</p>
                    <h2 className='text-2xl font-bold'>Exclusive Community Access (Holders Chat):
                    </h2>
                    <p>The Holders Chat offers a private space for NFT collection owners, fostering direct engagement between influencers, content creators, and their dedicated fanbase.</p>
                    <h2 className='text-2xl font-bold'>Robust Communication Tools:
                    </h2>
                    <p>MintStargram.tech provides a suite of communication tools, including direct messaging, group chats, and voice/video chats, facilitating seamless connection and collaboration.</p>
                    <h2 className='text-2xl font-bold'>Affiliate & Invitation System:
                    </h2>
                    <p>A unique system controls platform access and rewards users for bringing in new members, ensuring active affiliates receive tiered revenue share rewards.</p>
                    <h2 className='text-2xl font-bold'>Our Solutions:
                    </h2>
                    <p>Creasoft's dedicated team meticulously designed and developed MintStargram.tech, addressing the client's vision and business challenges. By prioritizing fair revenue distribution, introducing cutting-edge features like NFT-Posts, and creating a vibrant community space, Creasoft has successfully revolutionized content monetization. The comprehensive SEO strategy ensures the platform's visibility, attracting a diverse user base and establishing MintStargram.tech by Creasoft as a pioneering force in the intersection of social media, NFTs, and community building. The result is a platform that goes beyond content posting—it's about creating value, building genuine connections, and redefining the digital content landscape. MintStargram.tech stands as a testament to Creasoft's commitment to innovation and client success..</p>
                </div>
                <div className='2xl:w-[35%] w-full 2xl:px-6 px-2 py-8 space-y-8'>
                    <div className='border-2 p-6 bg-gray-900 space-y-3'>
                        <div>
                            <h2 className='text-lg tracking-widest text-[#63B597]'>1 : Client :</h2>
                            <h1 className='text-2xl'>Argova Josen</h1>
                        </div>
                        <div>
                            <h2 className='text-lg tracking-widest text-[#63B597]'>2 : Company :</h2>
                            <h1 className='text-2xl'>Egens Theme</h1>
                        </div>
                        <div>
                            <h2 className='text-lg tracking-widest text-[#63B597]'>3 : Project Type :</h2>
                            <h1 className='text-2xl'>Desktop Mockup</h1>
                        </div>
                        <div>
                            <h2 className='text-lg tracking-widest text-[#63B597]'>4 : Duration :</h2>
                            <h1 className='text-2xl'>6 Month</h1>
                        </div>
                    </div>
                    <div className='border-2 p-6 bg-gray-900 space-y-2.5'>
                        <h1 className='text-5xl'>Need help?</h1>
                        <p className=''>Facing a challenge? Our team is here to help. Reach out for expert assistance and personalized solutions tailored to your needs.</p>
                        <div className='lg:flex md:flex-col lg:flex-row  gap-8 items-center'>
                            <div className=' text-white w-max rounded-full bg-gray-800 p-4 space-y-2'>
                                <h1 className='text-3xl'><FaLocationPin /></h1>
                            </div>
                            <div className='text-white space-y-2'>
                                <h1 className='text-4xl'>Location</h1>
                                <p className='text-lg'>
                                    2001, City Tower 2, Near Emirates Tower Metro station, <br /> Sheikh Zaid road Dubai</p>
                            </div>
                        </div>
                        <div className='lg:flex md:flex-col lg:flex-row  gap-8 items-center'>
                            <div className=' text-white w-max  rounded-full bg-gray-800 p-4 space-y-2'>
                                <h1 className='text-3xl'><FaPhone /></h1>
                            </div>
                            <div className='text-white space-y-2'>
                                <h1 className='text-4xl'>Phone</h1>
                                <p className='text-lg'>
                                    +971506443271</p>
                            </div>
                        </div>
                        <div className='lg:flex md:flex-col lg:flex-row  gap-8 items-center space-y-2'>
                            <div className=' text-white w-max rounded-full bg-gray-800 p-4'>
                                <h1 className='text-3xl'><FaEnvelope /></h1>
                            </div>
                            <div className='text-white space-y-2'>
                                <h1 className='text-4xl'>Email</h1>
                                <p className='text-lg'>
                                    info@creasoft.io</p>
                            </div>
                        </div>
                        <button
                            className='px-6 xl:px-8 py-3 xl:py-4 relative rounded-md group font-bold tracking-wider bg-gray-800 text-white overflow-hidden'
                        >
                            <span className='relative z-10'>Book Meeting</span>
                            <div
                                className='absolute bg-[#63B597] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-0 h-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full'
                            >
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <Homeproject />
        </div>
    )
}

export default ProjectPageClient
