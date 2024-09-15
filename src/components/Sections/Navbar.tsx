import React from 'react'
import { Link } from 'react-router-dom'
import ResumeLink from '../Reusuables/ResumeLink'
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
        </div>
        <button className='resume_btn'><ResumeLink /></button>
      </div>
    </div>
  )
}

//going to navbar to link to the sections

export default NavBar
