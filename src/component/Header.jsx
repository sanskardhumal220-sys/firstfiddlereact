import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav className="navbar bg-dark navbar-dark navbar-expand-md fixed-top">
    <div className="container-fluid">
      <a href="" className="navbar-brand">
         <img src="public\ff-logo-02.png" alt="" className="weblogo"/>
      
      <img src='public\logo-for-mobile.png'alt='' className="moblogo"/></a>
      <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#a">
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className="navbar-collapse collapse" id="a">
      <ul className="navbar-nav ms-auto text-center">
         <li><Link to="/" className="nav-link">HOME</Link></li>
         <li><Link to="/about" className="nav-link">ABOUT</Link></li>
         <li><Link to="/brand" className="nav-link">BRAND</Link></li>
         <li><Link to="/our team" className="nav-link">OUR TEAM</Link></li>
          <li><Link to="/press release" className="nav-link">PRESS RELEASE</Link></li>
         <li><Link to="/contact" className="nav-link">CONTACT</Link></li>
          <li><Link to="/CAREERS" className="nav-link">CAREERS</Link></li>
      </ul>
   </div>
</div>
   </nav>
    </div>
  )
}

export default Header
