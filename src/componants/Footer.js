import { FaLinkedinIn, FaGithub, FaGoogle, FaCode } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="footer-container  chokokutai-regular">
            <div>
                <p><FaCode />  Developed by Mohamed Mahmoud</p>
                <p><FaGithub />  GitHub</p>
                <p>< FaLinkedinIn />  linkedin</p>
                <p><FaGoogle />  Mail</p>


            </div>
        </footer>
    )
}

export default Footer;