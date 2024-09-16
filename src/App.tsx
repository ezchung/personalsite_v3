import './App.css'
import Contact from './components/Sections/Contact';
import Experience from './components/Sections/Experience';
import Intro from './components/Sections/Intro';
import Landing from './components/Sections/Landing';
import ProjectsSection from './components/Sections/ProjectsSection';
import Router from './components/Sections/Router';

function App() {
  return (
    <div className="App">
      <Router />
      <main>
        <section id="home"><Landing /></section>
        <section id="about"><Intro /></section>
        <section id="projects"><ProjectsSection /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  )
}

export default App