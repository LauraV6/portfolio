import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <label>Designed and built by Laura Vlasma</label>
            <FontAwesomeIcon icon={faGithub} />
        </div>
    </footer>
  )
}

export default Footer