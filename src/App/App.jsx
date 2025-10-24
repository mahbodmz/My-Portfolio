import React from 'react'
import Header from '../Header/Header'
import './App.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'
import Skills from '../Skills/Skills'
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
