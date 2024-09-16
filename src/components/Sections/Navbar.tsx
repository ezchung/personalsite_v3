import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import ResumeLink from '../Reusuables/ResumeLink'

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className='navbar'>
      <div className='wrapper'>
        <Link to="/" className="logo" onClick={() => scrollToSection('home')}>EZ</Link>
        <div className='non_logos'>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Me</a>
          <Link to="/projects">Projects</Link>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </div>
        <button className='resume_btn'><ResumeLink /></button>
      </div>
    </nav>
  )
}

export default NavBar
