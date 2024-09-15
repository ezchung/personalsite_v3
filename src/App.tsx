import './App.css'
import Intro from './components/Sections/Intro';
import Landing from './components/Sections/Landing';
import Router from './components/Sections/Router';

function App() {
  return (
    <div className="App">
      <Router />
      <Landing />
      <Intro />
      <Landing></Landing>
        <section>
          Parallax
        </section>
        <section>
          <Intro />
        </section>
        <section>
          Parallax
        </section>
        <section>
          Projects
        </section>
        <section>
          Experience
        </section>
        <section>
          Contact
        </section>
    </div>
  )
}

export default App