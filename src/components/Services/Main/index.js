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
                <p>Do you want a <b>website</b> for your business?</p>
                <p>Or do you need a <b>reservation system</b> for your company?</p>
                <p>Maybe you just have an <b>app</b> in mind?</p>
                <p>Click on the other tabs to make your dreams come true!</p>
            </div>
        </div>
    )
}

export default Main
