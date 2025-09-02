import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/home'
import Brand from './pages/Brand'
import Our from './pages/Our Team'
import Press from './pages/Press release'
import Contact from './pages/contact'
import Careers from './pages/careers'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/brand' element={<Brand/>}/>
        <Route path='/our team' element={<Our/>}/>
        <Route path='/press release' element={<Press/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/careers' element={<Careers/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
