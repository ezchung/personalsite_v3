import './App.css'
import Intro from './components/Sections/Intro';
import Landing from './components/Sections/Landing';
import Router from './components/Sections/Router';

function App() {
  return (
    <div className="App">
      <Router />
      <section><Landing /></section>
      <section><Intro /></section>
    </div>
  )
}

export default App