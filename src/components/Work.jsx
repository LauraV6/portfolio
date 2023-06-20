import React from 'react'
import { projects } from '../data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

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
              <div className='description'>
                <div className='description__header'>
                  <a href={project.url} target='_blank' rel='noreferrer'>
                    <h3>{project.title}</h3>
                    <FontAwesomeIcon title='External Link' icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
                <p>{project.story}</p>
                <div className='tools'>
                {
                project.tools.map((tool) => {
                  return (
                    <span>{tool}</span>
                    )
                  })
                }
                </div>     
              </div>
            </div>
            <a className='project__img' href={project.url} target='_blank' rel='noreferrer'>
              <img src={project.img} alt={project.title} />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}