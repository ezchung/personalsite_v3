import React from 'react'
import NavBar from './components/Sections/Navbar'
import Landing from './components/Sections/Landing'
import Intro from './components/Sections/Intro'
import Experience from './components/Sections/Experience'
import Contact from './components/Sections/Contact'

const Layout: React.FC = () => {
  return (
    <>
      <NavBar />
      <main>
        <section id="home"><Landing /></section>
        <section id="about"><Intro /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  )
}

export default Layout

//Main home page