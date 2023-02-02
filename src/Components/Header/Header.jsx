import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to="/" className='Header_logo'>Github <span>Jobs</span></Link>
    </header>
  )
}

export default Header