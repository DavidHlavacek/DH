import React from 'react'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'

const Main = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const pageTitleString = "Web Solutions";
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
                
                <div className="services-grid">
                    <div className="service-category">
                        <h2>Getting Started</h2>
                        <div className="service-item">
                            <h3>🌐 Complete Website Setup</h3>
                            <p>From securing your perfect domain name to launching your website - we handle everything!</p>
                        </div>
                        <div className="service-item">
                            <h3>📱 Works Everywhere</h3>
                            <p>Your site will look fantastic on all devices - phones, tablets, and computers.</p>
                        </div>
                    </div>

                    <div className="service-category">
                        <h2>Growing Your Business</h2>
                        <div className="service-item">
                            <h3>🔍 Get Found Online</h3>
                            <p>We'll optimize your site to appear in Google searches and attract more visitors.</p>
                        </div>
                        <div className="service-item">
                            <h3>🛍️ Sell Online</h3>
                            <p>Set up your online store with secure payments and easy inventory management.</p>
                        </div>
                    </div>

                    <div className="service-category">
                        <h2>Ongoing Support</h2>
                        <div className="service-item">
                            <h3>🔄 Keep It Fresh</h3>
                            <p>Regular updates, content management, and technical maintenance to keep your site running smoothly.</p>
                        </div>
                        <div className="service-item">
                            <h3>📊 Track Success</h3>
                            <p>Monitor your website's performance and visitor behavior with easy-to-understand reports.</p>
                        </div>
                    </div>
                </div>

                <div className="portfolio-section">
                    <h2>Featured Projects</h2>
                    <div className="projects-grid">
                        {/* Project cards will go here */}
                        <p className="coming-soon">Portfolio section coming soon...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
