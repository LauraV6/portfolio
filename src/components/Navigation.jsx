import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-scroll'

const Navigation = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  return (
    <nav className='navi'>
      <div className='container'>
        <div className='navi__group'>
          <Link to='home' className='logo'>L.</Link>
          <div className='hamburger' onClick={handleClick}>
              {click ? (<FontAwesomeIcon icon={faXmark} />)
                  : (<FontAwesomeIcon icon={faBars} />)}
          </div>
        </div>
        <div className='navi__group'>
          <ul className={click ? "navi__links active" : "navi__links"}>
            <Link to='home' onClick={closeMenu}>home</Link>
            <Link to='work' onClick={closeMenu}>projects</Link>
            <Link to='about' onClick={closeMenu}>about</Link>
            <Link to='contact' onClick={closeMenu}>contact</Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation