import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/logo.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState, useEffect } from 'react';

const Sidebar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (mobile) {
                setMenuOpen(true);
                setIsClosing(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        if (!isMobile) {
            if (menuOpen) {
                setIsClosing(true);
                setTimeout(() => {
                    setMenuOpen(false);
                    setIsClosing(false);
                }, 800);
            } else {
                setMenuOpen(true);
                setIsClosing(false);
            }
        }
    };

    return (
        <div className={`nav-bar${!isMobile ? (menuOpen ? ' menu-open' : '') + (isClosing ? ' menu-closing' : '') : ''}`}>
            <Link className="logo" to="/">
                <img src={Logo} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="David Hlavacek" />
            </Link>
            {!isMobile && (
                <div className="burger-menu" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            )}
            {(menuOpen || isClosing || isMobile) && (
                <nav className={isClosing && !isMobile ? 'closing' : ''}>
                    <div className='top-nav'>
                        <NavLink exact="true" activeclassname="active" to="/" data-tooltip="HOME">
                            <HomeIcon />
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" className="about-link" to="/about" data-tooltip="ABOUT">
                            <PersonIcon />
                        </NavLink>
                    </div>
                    <div className="nav-separator"></div>
                    <div className='middle-nav'>
                        <NavLink exact="true" activeclassname="active" className="services-link" to="/services" data-tooltip="SERVICES">
                            <CodeIcon />
                        </NavLink>
                    </div>
                    <div className="nav-separator"></div>
                    <div className='bot-nav'>
                        <NavLink exact="true" activeclassname="active" className="education-link" to="/education" data-tooltip="EDUCATION">
                            <SchoolIcon />
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" className="work-link" to="/work" data-tooltip="WORK">
                            <WorkIcon />
                        </NavLink>
                    </div>
                    <div className="nav-separator"></div>
                    <div className='contact-nav'>
                        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" data-tooltip="CONTACT">
                            <EmailIcon />
                        </NavLink>
                    </div>
                </nav>
            )}
            <ul className="social-links">
                <li key="linkedin">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/davihlav/">
                        <LinkedInIcon />
                    </a>
                </li>
                <li key="github">
                    <a target="_blank" rel="noreferrer" href="https://github.com/DavidHlavacek">
                        <GitHubIcon />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
