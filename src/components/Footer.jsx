import{FaTwitterSquare,FaFacebookSquare,FaInstagramSquare,FaGithubSquare} from 'react-icons/fa'
function Footer() {
  return (
    <div className="footer">
        <div className='footer-items'>
            <a href="https://twitter.com/Josaphat_Murh"><FaTwitterSquare/></a>
            <a href="https://web.facebook.com/josaphat.murhabazi"><FaFacebookSquare/></a>
            <a href="https://www.instagram.com/josaphatmurhabazi"><FaInstagramSquare/></a>
            <a href="https://github.com/JosaphatMurhabazi"><FaGithubSquare/></a>           
        </div>
    </div>
  )
}

export default Footer