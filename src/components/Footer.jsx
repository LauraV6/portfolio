import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <label>Designed and built by Laura Vlasma</label>
            <a href='https://github.com/LauraV6' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    </footer>
  )
}

export default Footer