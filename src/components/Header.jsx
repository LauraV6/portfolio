import React from 'react'
import Navigation from './Navigation'
import Intro from './Intro'

const Header = () => {
  const logoAmount = 12;

  return (
  <header id='home' className='container'>
    <Navigation />
    <div className='header'>
      <div className='header__content'>
          <h3 className='subtitle subtitle--odd'>01. Laura Vlasma</h3>
          <h1>All-round (multimedia) <span className='notable'>Designer</span> and <span className='notable'>Front-end Developer</span></h1>
          <p>I’m a Frontend Developer specializing in designing and building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered applications at <a className='hyperlink' href='https://www.awisoftware.nl' target='_blank' rel='noreferrer'>AWI Software.</a></p>
          <a href='#work' className='cbtn cbtn--br1'>Recent work</a>
      </div>
      <div className='header__image'>
        {[...Array(logoAmount)].map((e, i) => <span className={'logo logo-' + i} key={i}>L.</span>)}       
      </div>
    </div>
    <Intro />
  </header>
  )
}

export default Header