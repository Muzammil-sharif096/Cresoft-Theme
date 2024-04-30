import React from 'react'
import ServicePageHeader from '../ServicePageHeader/ServicePageHeader'
import ServicesPageAI from '../ServicePageaAI/ServicesPageAI'
import ServicePageTool from '../ServicePageTool/ServicePageTool'
import ServicePageProject from '../ServicePageProject/ServicePageProject'
import ServicePageAsked from '../ServicePageAsked/ServicePageAsked'
import ServicePageImg from '../ServicePageImg/ServicePageImg'

const ServicePage = () => {
    return (
        <div>
            <ServicePageHeader />
            <ServicesPageAI />
            <ServicePageTool />
            <ServicePageProject />
            <ServicePageAsked />
            <ServicePageImg />
        </div>
    )
}

export default ServicePage
