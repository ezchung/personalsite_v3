// Router.tsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Navbar'
import Layout from '../../Layout'
import './Router.css'
import Projects from '../SinglePages/Projects'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/projects" element={
          <div className='projectsPage'>
            <NavBar />
            <main className='projectsContent'>
              <Projects />
            </main>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router