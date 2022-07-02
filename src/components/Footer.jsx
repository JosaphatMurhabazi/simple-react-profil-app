import{FaTwitterSquare,FaFacebookSquare,FaInstagramSquare,FaGithubSquare} from 'react-icons/fa'
function Footer() {
  return (
    <div className="footer">
        <div className='footer-items'>
            <a href="https://twitter.com/Josaphat_Murh" target='_blanck'><FaTwitterSquare/></a>
            <a href="https://web.facebook.com/josaphat.murhabazi" target='_blanck'><FaFacebookSquare/></a>
            <a href="https://www.instagram.com/josaphatmurhabazi" target='_blanck'><FaInstagramSquare/></a>
            <a href="https://github.com/JosaphatMurhabazi" target='_blanck'><FaGithubSquare/></a>           
        </div>
    </div>
  )
}

export default Footer