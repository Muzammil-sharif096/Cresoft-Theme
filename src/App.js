import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/HomeMain/Home'
import Footer from './Components/Footer/Footer'
import About from './Components/About/AboutMain/About'
import Service from './Components/Service/ServiceMain/Service'
import Project from './Components/Project/ProjectMain/Project'
import Contact from './Components/Contact/ContactMain/Contact'
import Job from './Components/Job/JobMain/Job'
import Blog from './Components/Blog/BlogMain/Blog'
import ServicePage from './Components/Service/ServicePage/ServicePageMain/ServicePage'
import BlogPage from './Components/Blog/BlogPage/BlogPageMain/BlogPage'
import ProjectPage from './Components/Project/ProjectPage/ProjectPageMain/ProjectPage'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/job' element={<Job />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/servicepage' element={<ServicePage />} />
        <Route path='/blogpage' element={<BlogPage />} />
        <Route path='/projectpage' element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App



