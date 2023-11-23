import React from 'react'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'

const Main = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const pageTitle = [
        'W',
        'e',
        'l',
        'c',
        'o',
        'm',
        'e',
        ' ',
        't',
        'o',
        ' ',
        'm',
        'y',
        ' ',
        'S',
        'e',
        'r',
        'v',
        'i',
        'c',
        'e',
        's',
    ]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3500)
    }, [])
    return (
        <div className="services-container services-main">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={pageTitle}
                        idx={1}
                    />
                </h1>
                <p>Hi, there!</p>
                <p>Here I showcase all the services I offer.</p>
                <p>Please click on the tabs you are interested in!</p>
            </div>
        </div>
    )
}

export default Main
