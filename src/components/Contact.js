import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <Fade>
      <section id='contact' className='contact container'>
      <div className='column-item'>
        <div className='column-item__content'>
            <h3 className='subtitle'>04. What's next?</h3>
            <h2>Job for me</h2>
            <p>Send me a message on LinkedIn or through email to get in touch! I am always open to chat about building fun projects.</p>
            <div className='d-flex gap-3 mt-3'>
              <a className='cbtn cbtn--br2' href='https://www.linkedin.com/in/laura-vlasma-0692b0159/' target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a className='cbtn cbtn--br1' href='mailto:lauravlasma1@gmail.com'>
                <FontAwesomeIcon icon={faAt} />
              </a>
            </div>     
        </div>
        <div className='column-item__image'>
        <img src='assets/workdesk.svg' alt='design' />
        </div>
      </div>   
    </section>
  </Fade>
  )
}

export default Contact