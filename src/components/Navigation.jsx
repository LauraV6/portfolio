import React, { useState, useRef } from 'react'
import { Link } from 'react-scroll'
import { useGsapDown, useGsapHamb } from '../hooks/gsap';

const Navigation = () => {

  const [navOpen, setNavOpen] = useState(false)
  const navClose = () => setNavOpen(false)

  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const li4 = useRef(null);
  const li5 = useRef(null);
  const span1 = useRef(null);
  const span2 = useRef(null);

  const navLinks = [li1, li2, li3, li4, li5]
  const navHamb = [span1, span2]

  useGsapDown(navLinks, .2);
  useGsapHamb(navHamb, .2);

  return (
    <nav className='navi'>
      <div className='container'>
        <div className='navi__group'>
          <li ref={li1}>
            <Link to='home' className='logo'>L.</Link>
          </li>
          <div className='menu-toggle' onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamb hamb--open" : "hamb"}>
              <span ref={span1} className={navOpen ? "line line--top spin" : "line line--top"}></span>
              <span ref={span2} className={navOpen ? "line line--bottom spin" : "line line--bottom"}></span>
            </div>
          </div>
        </div>
        <div className='navi__group'>
          <ul className={navOpen ? "navi__links active" : "navi__links"}>
            <li ref={li2}>            
              <Link to='home' onClick={navClose} tabIndex="1">home</Link>
            </li>
            <li ref={li3}>
              <Link to='work' onClick={navClose} tabIndex="1">projects</Link>
            </li>
            <li ref={li4}>
              <Link to='about' onClick={navClose} tabIndex="1">about</Link>
            </li>
            <li ref={li5}>
              <Link to='contact' onClick={navClose} tabIndex="1">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation