import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Qualification from './Components/Qualification/Qualification'
import Project from './Components/Projects/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Scrollup from './Components/Scrollup/Scrollup'
const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Project />
        <Contact/>
      </main>

      <Footer/>
      <Scrollup/>
    </div>
  );
}

export default App