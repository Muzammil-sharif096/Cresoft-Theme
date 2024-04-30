import React from 'react'
import ServiceHeader from '../ServiceHeader/ServiceHeader'
import ServiceCard from '../ServiceCard/ServiceCard'
import ServiceClient from '../ServiceClient/ServiceClient'

const Service = () => {
    return (
        <div>
            <ServiceHeader />
            <ServiceCard />
            <ServiceClient />
        </div>
    )
}

export default Service
