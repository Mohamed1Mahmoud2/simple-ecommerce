import { FaLinkedinIn, FaGithub, FaGoogle, FaCode } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="footer-container  chokokutai-regular">
            <div>
                <p>Developed by Mohamed Mahmoud  <FaCode /></p>
                <p>GitHub  <FaGithub /></p>
                <p>linkedin  < FaLinkedinIn /></p>
                <p>Mail  <FaGoogle /></p>


            </div>
        </footer>
    )
}

export default Footer;