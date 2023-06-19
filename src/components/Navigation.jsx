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
    <nav className='navi container'>

      <div className='navi__group'>
        <Link to='home' className='logo'>L.</Link>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FontAwesomeIcon icon={faXmark} />)
                : (<FontAwesomeIcon icon={faBars} />)}

        </div>
      </div>
      <div className='navi__group'>
        <ul className={click ? "navi__links active" : "navi__links"}>
              <li className='navi-item'>
                  <Link to='home' spy={true} onClick={closeMenu}><span className='navi--br1'>01.</span> home</Link>
              </li>
              <li className='navi-item'>
                  <Link to='work' spy={true} onClick={closeMenu}><span className='navi--br1'>02.</span> projects</Link>
              </li>
              <li className='navi-item'>
                  <Link to='about' spy={true} onClick={closeMenu}><span className='navi--br1'>03.</span> about</Link>
              </li>
              <li className='navi-item'>
                  <Link to='contact' spy={true} onClick={closeMenu}><span className='navi--br1'>04.</span> contact</Link>
              </li>
          </ul>
      </div>
    </nav>
  )
}

export default Navigation