import React from 'react'

import Aos from "aos"
import 'aos/dist/aos.css'

import Hero from "./components/Hero"
import Header from "./components/Header"
import About from "./components/About"
import Features from "./components/Features"
import Nav from "./components/Nav"
import NavMobile from "./components/NavMobile"
import Copy from './components/Copy'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

const App = () => {

  Aos.init({
    duration: 1800,
    offset: 0,
  })

  return <div className='overflow-hidden'>
    <Hero/>
    <About/>
    <Features/>
  </div>
}

export default App