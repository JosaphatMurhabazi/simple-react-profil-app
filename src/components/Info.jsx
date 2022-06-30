import user from '../user-profil.jpg'
import {FaEnvelope,FaLinkedin} from 'react-icons/fa'

function Info() {
  return (
    <div className="info">
        <img src={user} alt="info-profil"/>
        <p className='info-name'>Josaphat Murhabazi</p>
        <p className='info-dev'>Full Stack Developer</p>
        <p className='info-skills'>PHP NodeJS ReactJS</p>
        <button type='button' className='btn btn-email'>
          <FaEnvelope/> 
          <a href="mailto:josaphatmurhabazi2016@gmail.com" target='_blanck'> Email</a>
        </button>
        <button type='button' className='btn btn-linkedin'>
          <FaLinkedin/> 
          <a href="https://www.linkedin.com/in/josaphat-murhabazi-69a373148/" target='_blanck'> LinkedIn</a>
        </button>
    </div>
  )
}

export default Info