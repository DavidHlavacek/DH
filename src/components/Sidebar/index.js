import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/logo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faLinkedin,
    faRProject,
} from '@fortawesome/free-brands-svg-icons'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { PiSquaresFourBold } from "react-icons/pi";
import { FcServices } from "react-icons/fc";



const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={Logo} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="David Hlavacek" />
        </Link>
        <nav>
            <div className='top-nav'>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="about-link"
                to="/about"
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            </div>
            <div className='middle-nav'>
            <NavLink
                exact="true"
                activeclassname="active"
                className="services-link"
                to="/services"
            >
                <FcServices />
            </NavLink>
            </div>
            <div className='bot-nav'>
            <NavLink
                exact="true"
                activeclassname="active"
                className="education-link"
                to="/education"
            >
                <SchoolIcon color='#4d4d4e'/>
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="work-link"
                to="/work"
            >
                <WorkIcon color='#4d4d4e'/>
            </NavLink>
            </div>
            <div className='contact-nav'>
            <NavLink
                exact="true"
                activeclassname="active"
                className="contact-link"
                to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            </div>
        </nav>
        <ul>
            <li key="linkedin">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/davihlav/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li key="github">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/DavidHlavacek"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
