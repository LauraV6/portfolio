import React from 'react'
import background from '../images/readme-bg.jpg'
import Carousel from 'react-bootstrap/Carousel'
import { history } from '../data';

export default function History () {

  return (
    <section id='about' className='history container'>
      <header className='history__content'>
        <h3 className='subtitle subtitle--odd'>03. About me</h3>
        <h2>History of me</h2>
      </header>
      <div className='history__carousel'>
        <div className='carousel'>
          <div className='carousel__age'>
            <span>1997</span>
            <span>2017</span>
            <span>2020</span>
            <span>2023</span>
          </div>
          <Carousel className='carousel__img' indicators={false} style={{backgroundImage: `url(${background})`}}>
            {history.map((timestamp, index) => (
              <Carousel.Item className={timestamp.title} key={index}>
                <p>{timestamp.text}</p>
                <img className='img' src={timestamp.img} alt={timestamp.title} />
              </Carousel.Item>
            ))}
          </Carousel>        
        </div>
      </div>
    </section>
  )
}