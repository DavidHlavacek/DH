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
import { useState } from 'react'



const Sidebar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`nav-bar ${menuOpen ? 'menu-open' : ''}`}>
            <Link className="logo" to="/">
                <img src={Logo} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="David Hlavacek" />
            </Link>
            <div className="burger-menu" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {menuOpen && (
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
                        <svg
                            stroke="currentColor"
                            fill="#000"
                            strokeWidth="0"
                            version="1"
                            viewBox="0 0 48 48"
                            enable-background="new 0 0 48 48"
                            height="100px"
                            width="100px"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: 'blue' }}
                        >
                            <path className="path1" fill="#E65100"
                                d="M25.6,34.4c0.1-0.4,0.1-0.9,0.1-1.4s0-0.9-0.1-1.4l2.8-2c0.3-0.2,0.4-0.6,0.2-0.9l-2.7-4.6 c-0.2-0.3-0.5-0.4-0.8-0.3L22,25.3c-0.7-0.6-1.5-1-2.4-1.4l-0.3-3.4c0-0.3-0.3-0.6-0.6-0.6h-5.3c-0.3,0-0.6,0.3-0.6,0.6L12.4,24 c-0.9,0.3-1.6,0.8-2.4,1.4l-3.1-1.4c-0.3-0.1-0.7,0-0.8,0.3l-2.7,4.6c-0.2,0.3-0.1,0.7,0.2,0.9l2.8,2c-0.1,0.4-0.1,0.9-0.1,1.4 s0,0.9,0.1,1.4l-2.8,2c-0.3,0.2-0.4,0.6-0.2,0.9l2.7,4.6c0.2,0.3,0.5,0.4,0.8,0.3l3.1-1.4c0.7,0.6,1.5,1,2.4,1.4l0.3,3.4 c0,0.3,0.3,0.6,0.6,0.6h5.3c0.3,0,0.6-0.3,0.6-0.6l0.3-3.4c0.9-0.3,1.6-0.8,2.4-1.4l3.1,1.4c0.3,0.1,0.7,0,0.8-0.3l2.7-4.6 c0.2-0.3,0.1-0.7-0.2-0.9L25.6,34.4z M16,38c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5c2.8,0,5,2.2,5,5C21,35.8,18.8,38,16,38z">

                            </path>
                            <path
                                className='path2'
                                fill="#FFA000"
                                d="M41.9,15.3C42,14.8,42,14.4,42,14s0-0.8-0.1-1.3l2.5-1.8c0.3-0.2,0.3-0.5,0.2-0.8l-2.5-4.3 c-0.2-0.3-0.5-0.4-0.8-0.2l-2.9,1.3c-0.7-0.5-1.4-0.9-2.2-1.3l-0.3-3.1C36,2.2,35.8,2,35.5,2h-4.9c-0.3,0-0.6,0.2-0.6,0.5l-0.3,3.1 c-0.8,0.3-1.5,0.7-2.2,1.3l-2.9-1.3c-0.3-0.1-0.6,0-0.8,0.2l-2.5,4.3c-0.2,0.3-0.1,0.6,0.2,0.8l2.5,1.8C24,13.2,24,13.6,24,14 s0,0.8,0.1,1.3l-2.5,1.8c-0.3,0.2-0.3,0.5-0.2,0.8l2.5,4.3c0.2,0.3,0.5,0.4,0.8,0.2l2.9-1.3c0.7,0.5,1.4,0.9,2.2,1.3l0.3,3.1 c0,0.3,0.3,0.5,0.6,0.5h4.9c0.3,0,0.6-0.2,0.6-0.5l0.3-3.1c0.8-0.3,1.5-0.7,2.2-1.3l2.9,1.3c0.3,0.1,0.6,0,0.8-0.2l2.5-4.3 c0.2-0.3,0.1-0.6-0.2-0.8L41.9,15.3z M33,19c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5c2.8,0,5,2.2,5,5C38,16.8,35.8,19,33,19z">
                            </path>
                        </svg>
                    </NavLink>
                </div>
                <div className='bot-nav'>
                    <NavLink
                        exact="true"
                        activeclassname="active"
                        className="education-link"
                        to="/education"
                    >
                        <SchoolIcon color='#4d4d4e' />
                    </NavLink>
                    <NavLink
                        exact="true"
                        activeclassname="active"
                        className="work-link"
                        to="/work"
                    >
                        <WorkIcon color='#4d4d4e' />
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
            )}
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
    );
}

export default Sidebar;
