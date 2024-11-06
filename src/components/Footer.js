import { FaLinkedinIn, FaGithub, FaGoogle, FaCode } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="footer-container  chokokutai-regular">
            <div>
                <p><a href='mohmed.m.azim@gmail.com'><FaCode />  Developed by Mohamed Mahmoud </a></p>
                <p><a href='https://github.com/Mohamed1Mahmoud2'><FaGithub />  GitHub </a></p>
                <p><a href='https://www.linkedin.com/in/mohamed-mahmoud-hamouda/'>< FaLinkedinIn />  LinkedIn </a></p>
                <p><a href='mohmed.m.azim@gmail.com'> <FaGoogle />  Mail </a></p>


            </div>
        </footer>
    )
}

export default Footer;