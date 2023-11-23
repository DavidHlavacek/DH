import React from 'react'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'

const Main = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const pageTitleString = "Software Development Services";
    const pageTitle = pageTitleString.split('');


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3500)
    }, [])
    return (
        <div className="services-container services-softwaredev">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={pageTitle}
                        idx={1}
                    />
                </h1>
                <div className="paragraphs-container">
                     <p>-Custom Software Development</p>
                <p>-Mobile App Development</p>
                <p>-Web Application Development</p>
                <p>-Desktop Application Development</p>
                <p>-Database Design and Management</p>
                <p>-E-commerce Solutions</p>
                <p>-Content Management Systems (CMS)</p>
                <p>-Cloud-Based Solutions</p>
                <p>-API Development and Integration</p>
                <p>-Quality Assurance and Testing</p>
                {/* <p>-DevOps Services (Unavailable for now)</p> */}
                {/* <p>-Blockchain Development</p> */}
                {/* <p>-Artificial Intelligence (AI) and Machine Learning (ML)</p> */}
                <p>-Cybersecurity Solutions</p>
                <p>-Maintenance and Support</p>
                <p>-Consulting and Advisory Services</p>
                {/* <p>-Training and Workshops</p> */}
                </div>
            </div>
        </div>
    )
}

export default Main
