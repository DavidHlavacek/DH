import React from 'react'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'

const Main = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const pageTitleString = "Web Development Services";
    const pageTitle = pageTitleString.split('');


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3500)
    }, [])
    return (
        <div className="services-container services-webdev">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={pageTitle}
                        idx={1}
                    />
                </h1>
                <div className="paragraphs-container">
                    <p>- Website Design & Development</p>
                    <p>- Fullstack Development (Front-End/Back-End)</p>
                    <p>- Web Application Development (SPA/PWA)</p>
                    <p>- Responsive Design for ALL devices</p>
                    <p>- SEO Optimization</p>
                    <p>- Performance Optimization</p>
                    <p>- Content Management Systems (CMS)</p>
                    <p>- E-commerce Solutions</p>
                    <p>- UI/UX Design</p>
                    <p>- Web Security and Compliance</p>
                    {/* <p>-Web Hosting and Deployment (Unavailable for now)</p> */}
                    <p>- Maintenance and Support</p>
                    <p>- Consulting and Strategy</p>
                    {/* <p>-Training and Workshops</p> */}
                </div>
            </div>
        </div>
    )
}

export default Main
