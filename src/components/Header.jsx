import React, { useRef } from 'react'
import Navigation from './Navigation'
import Intro from './Intro'
import { useGsapUpward, useGsapHeroButton } from '../hooks/gsap';

const Header = () => {
  const logoAmount = 12;

  const heroSubTitleRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroButtonRef = useRef(null);

  const heroContent = [heroSubTitleRef, heroTitleRef, heroTextRef]
  const heroButton = [heroButtonRef]

  useGsapUpward(heroContent, 1.5);
  useGsapHeroButton(heroButton, 1.7);

  return (
  <header id='home' className='container'>
    <Navigation />
    <div className='header'>
      <div className='header__content'>
          <h3 ref={heroSubTitleRef} className='subtitle subtitle--odd'>01. Laura Vlasma</h3>
          <h1 ref={heroTitleRef}>All-round (multimedia) <span className='notable'>Designer</span> and <span className='notable'>Front-end Developer</span></h1>
          <p ref={heroTextRef}>I’m a Frontend Developer specializing in designing and building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered applications at <a className='hyperlink' href='https://www.awisoftware.nl' target='_blank' rel='noreferrer'>AWI Software.</a></p>
          <a ref={heroButtonRef} href='#work' className='cbtn cbtn--br1'>Recent work</a>
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