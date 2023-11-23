import './index.scss'
import LogoTitleD from '../../assets/images/D.png'
import LogoTitleH from '../../assets/images/H.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const firstNameArray = ['a', 'v', 'i', 'd']
    const lastNameArray = ['l', 'a', 'v', 'a', 'c', 'e', 'k']
    const jobArray = [
        's',
        'o',
        'f',
        't',
        'w',
        'a',
        'r',
        'e',
        ' ',
        'e',
        'n',
        'g',
        'i',
        'n',
        'e',
        'e',
        'r',
        '.',
    ]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className='hi-zone'>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        </span>
                        <br />
                        <span className='name-zone'>
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitleD} alt="developer" />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={firstNameArray}
                            idx={15}
                        />
                        <span className="separator"></span>
                        <img src={LogoTitleH} alt="developer" />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={lastNameArray}
                            idx={15}
                        />
                        </span>
                        <br />
                        <span className='profession-zone'>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={18}
                        />
                        </span>
                    </h1>
                    <h2>Fullstack Developer / Freelancer / Software Engineer</h2>
                    <Link to="/services" className="flat-button-services">
                        GO TO SERVICES
                    </Link>
                    <Link to="/contact" className="flat-button-contact">
                        CONTACT ME
                    </Link>
                </div>
                <Logo />
            </div>
            <Loader type="cube-transition" />
        </>
    )
}

export default Home
