import React, { useState } from 'react'
import { Link } from 'react-scroll'

const Navigation = () => {

  const [navOpen, setNavOpen] = useState(false)
  const navClose = () => setNavOpen(false)

  return (
    <nav className='navi'>
      <div className='container'>
        <div className='navi__group'>
          <Link to='home' className='logo'>L.</Link>
          <div className='menu-toggle' onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamb hamb--open" : "hamb"}>
              <span className={navOpen ? "line line--top spin" : "line line--top"}></span>
              <span className={navOpen ? "line line--bottom spin" : "line line--bottom"}></span>
            </div>
          </div>
        </div>
        <div className='navi__group'>
          <ul className={navOpen ? "navi__links active" : "navi__links"}>
            <Link to='home' onClick={navClose} tabIndex="1">home</Link>
            <Link to='work' onClick={navClose} tabIndex="1">projects</Link>
            <Link to='about' onClick={navClose} tabIndex="1">about</Link>
            <Link to='contact' onClick={navClose} tabIndex="1">contact</Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation