import React from 'react'
import HomeHeader from '../HomeHeader/HomeHeader'
import HomeServices from '../HomeServices/HomeServices'
import HomeExcelling from '../HomeExcelling/HomeExcelling'
import HomeAbout from '../HomeAbout/HomeAbout'
import Homeproject from '../HomeProject/Homeproject'
import Hometool from '../HomeTool/Hometool'
import Homepartner from '../HomePartner/Homepartner'
import HomeClient from '../HomeClient/HomeClient'

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeServices />
            <HomeExcelling />
            <HomeAbout />
            <Homeproject />
            <Hometool />
            <Homepartner />
            <HomeClient />
        </div>
    )
}

export default Home
