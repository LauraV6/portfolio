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
          <p>My name is Laura, a Dutch UX designer / Front-end Developer who lives in Overijssel. My career started right after graduation in 2020, when I was 22 years old.</p>
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