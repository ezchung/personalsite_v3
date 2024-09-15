import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './Navbar'
import Landing from './Landing'
import Intro from './Intro'
import Experience from './Experience'
import ProjectsSection from './ProjectsSection'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Landing />} />
        <Route path="/about" element={<Intro />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router