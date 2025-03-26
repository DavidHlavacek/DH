import React from 'react'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'

const Main = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const pageTitleString = "Software Solutions";
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
                
                <div className="services-grid">
                    <div className="service-category">
                        <h2>Custom Development</h2>
                        <div className="service-item">
                            <h3>💻 Desktop Applications</h3>
                            <p>Powerful, responsive desktop applications tailored to your business needs.</p>
                        </div>
                        <div className="service-item">
                            <h3>📱 Mobile Apps</h3>
                            <p>Cross-platform mobile applications that work seamlessly on iOS and Android.</p>
                        </div>
                        <div className="service-item">
                            <h3>🌐 Web Applications</h3>
                            <p>Dynamic, interactive web applications with modern frameworks and technologies.</p>
                        </div>
                    </div>

                    <div className="service-category">
                        <h2>Enterprise Solutions</h2>
                        <div className="service-item">
                            <h3>🔄 APIs & Integration</h3>
                            <p>Connect your systems with secure, well-documented APIs and seamless integration services.</p>
                        </div>
                        <div className="service-item">
                            <h3>🛢 Database Design</h3>
                            <p>Optimized database design and management for efficient data operations.</p>
                        </div>
                        <div className="service-item">
                            <h3>☁️ Cloud Solutions</h3>
                            <p>Scalable cloud-based applications and infrastructure designed for growth.</p>
                        </div>
                    </div>

                    <div className="service-category">
                        <h2>Support & Security</h2>
                        <div className="service-item">
                            <h3>🔒 Cybersecurity</h3>
                            <p>Implement robust security measures to protect your software and data.</p>
                        </div>
                        <div className="service-item">
                            <h3>🔍 Quality Assurance</h3>
                            <p>Comprehensive testing to ensure reliability and performance.</p>
                        </div>
                        <div className="service-item">
                            <h3>🔧 Maintenance & Support</h3>
                            <p>Ongoing technical support and system improvements to keep everything running smoothly.</p>
                        </div>
                    </div>
                </div>

                <div className="portfolio-section">
                    <h2>Featured Software Projects</h2>
                    <div className="projects-grid">
                        {/* Project cards will go here */}
                        <p className="coming-soon">Check Projects tab for our software portfolio...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
