import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App