import React, { useState, useEffect } from 'react'
import { XIcon } from '@heroicons/react/solid'
import './index.scss'
import Loader from 'react-loaders'

const JSIcon = require('../../assets/icons/JSIcon.png')

const ServicesBar = ({ showPage, setShowPage }) => {
    const [hidePage, setHidePage] = useState([])

    useEffect(() => {
        // Don't set Main as default here - let the parent component handle this based on URL
    }, []) // Empty dependency array ensures this effect runs only once on mount

    const handleTabClick = (page) => {
        setShowPage(page)
        setHidePage((prevState) => prevState.filter((item) => item !== page))
    }

    const handleTabCloseClick = (e, page) => {
        e.stopPropagation()
        const newHiddenPage = [...hidePage, page]
        const remainingTabs = [
            'Main',
            'Web Development',
            'Software Development',
            'Projects',
        ].filter((tab) => !newHiddenPage.includes(tab))

        // Set the first remaining tab as the new selected tab
        setShowPage(remainingTabs[0])

        // Update the hidden pages
        setHidePage(newHiddenPage)
    }

    const tabIcons = {
        Main: require('../../assets/icons/JSIcon.png'), // Default icon
        'Web Development': require('../../assets/icons/webdev2.png'),
        'Software Development': require('../../assets/icons/softwaredev.png'),
        Projects: require('../../assets/icons/projects.png'),
    };

    return (
        <>
            <div className="page-container">
            {/* <div className="vertical-line"></div> */}

                <div className="projectBar-container">
                    {['Main', 'Web Development', 'Software Development', 'Projects'].map((page, index, array) =>
                        hidePage.includes(page) ? null : (
                            <>
                                <div
                                    key={page}
                                    className={`${showPage === page
                                            ? 'activeProjectContainer'
                                            : 'projectContainer'
                                        } ${index === array.length - 1 ? 'last-tab' : ''} ${index === 0 ? 'first-tab' : ''}`}
                                    onClick={() => handleTabClick(page)}
                                >
                                    <img
                                        src={tabIcons[page]}
                                        alt={`${page} Icon`}
                                        className="w-7 mr-1 text-yellow_vs"
                                    />
                                    <p>{`${index === 0 ? page : page.charAt(0).toUpperCase() + page.slice(1)
                                        }${index === 0 ? '.js' : ''}`}</p>
                                    <div key={page}
                                        className="x-button"
                                        onClick={(e) =>
                                            handleTabCloseClick(e, page)
                                        }
                                    >
                                        <XIcon
                                            className={`w-6 ml-4 hover:bg-gray-600 hover:rounded ${showPage === page ? 'visible' : ''
                                                }`}
                                        />
                                    </div>
                                </div>
                                {index === array.length - 1 && (
                                    <div className="tab-bar-extension"></div>
                                )}
                            </>
                        )
                    )}

                </div>
            </div>
            <Loader type="cube-transition" />
        </>
    )
}

export default ServicesBar;