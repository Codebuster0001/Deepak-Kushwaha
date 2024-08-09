import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Blog from './components/Blog'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className='mt-5'>
      <Hero />
      <About />
      <Contact />
      <Services />
      <Blog />
      <Projects />
      </main>
    </div>
  )
}

export default App
