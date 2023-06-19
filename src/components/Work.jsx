import React from 'react'
import { projects } from '../data';

export default function Work () {
  return (
    <section id='work' className='work container'>
      <header className='work__content'>
          <h3 className='subtitle subtitle--even'>02. Projects to remember</h3>
          <h2>My work</h2>
      </header>
      <div className='work__items'>
        {projects.map((project) => (
          <article className='project'>
            <div className='project__content'>
              <div className='tags'>
                <span>Blazor</span>
              </div>
              <div className='description'>
                <h3>{project.title}</h3>
                <p>{project.story.substring(0, 160) + '...'}</p>
              </div>
            </div>
            <a className='project__img' href={project.url} target='_blank'>
              <img src={project.img} alt={project.title} />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}