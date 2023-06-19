import React from 'react'
import { intros } from '../data';

const Intro = () => {
  return (
    <div className='intro'>
      {intros.map((story) => (
        <div className='column-item'>
        <div className='column-item__content'>
            <h3 className='subtitle'>{story.subtitle}</h3>
            <h2>{story.title}</h2>
            <p>{story.description}</p>
        </div>
        <div className='column-item__image'>
        <img src={story.img} alt={story.title} />
        </div>
      </div>
      ))}      
    </div>
  )
}

export default Intro