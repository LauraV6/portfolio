import React from 'react'
import { intros } from '../data';

const Intro = () => {
  return (
    <div className='intro'>
      {intros.map((story, index) => (
        <div className='column-item' key={index}>
          <div className='column-item__content'>
              <h3 className='subtitle'>{story.subtitle}</h3>
              <h2>{story.title}</h2>
              <p>{story.description}</p>
              <div className='tools'>
              {
                story.tools.map((tool) => {
                  return (
                    <span>{tool}</span>
                  )
                })
              }
              </div>
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