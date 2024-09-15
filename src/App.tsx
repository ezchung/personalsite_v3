import './App.css'
import Landing from './components/Landing';
import Router from './components/Router';

function App() {
  return (
    <div className="App">
      <Router />
        <section>
          <Landing />
        </section>
        <section>
          Parallax
        </section>
        <section>
          Introduction
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
/**
 * // import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'    
 * 
 * before return   const [count, setCount] = useState(0)    
 *     <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> 
 *    <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
 */