import React from 'react'
import { Link } from 'react-router-dom'
import ResumeLink from './ResumeLink'
import './Navbar.css'

const NavBar: React.FC = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <Link to="/" className="logo">EZ</Link>
        <div className='non_logos'>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <button><ResumeLink /></button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
