import React from 'react'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import './index.scss'
// Import videos
import restaurantVideo from '../../../assets/images/projects/petrzalskajedalen.webm'
import horizonVideo from '../../../assets/images/projects/myhorizon2.webm'
import memecoinVideo from '../../../assets/images/projects/memecoin.webm'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const pageTitle = [
        'P',
        'r',
        'o',
        'j',
        'e',
        'c',
        't',
        's'
    ]

    const projectCategories = [
        {
            title: "Websites",
            description: "Web development projects showcasing responsive design and modern technologies.",
            projects: [
                {
                    title: "Memecoin Website",
                    description: "A cryptocurrency website for a community-driven memecoin project with roadmap, tokenomics and team information.",
                    image: memecoinVideo,
                    link: "https://memecoin-website.com/",
                    technologies: ["NextJS", "Animation", "Responsive Design"]
                },
                {
                    title: "Petržalská Jedáleň",
                    description: "A modern restaurant website for a canteen in Petržalka, focusing on affordable and nutritious meals.",
                    image: restaurantVideo,
                    link: "https://petrzalskajedalen.sk/",
                    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"]
                },
                {
                    title: "MyHorizon²",
                    description: "A creative agency website showcasing digital design services, brand identity, and app development solutions.",
                    image: horizonVideo,
                    link: "https://www.myhorizon2.com/",
                    technologies: ["HTML", "CSS", "JavaScript", "Animation", "Responsive Design"]
                }
            ]
        },
        {
            title: "Software Applications",
            description: "Desktop and enterprise software solutions.",
            projects: [
                {
                    title: "Coming Soon",
                    description: "More projects are in development.",
                    image: "../../../assets/images/projects/coming-soon.png",
                    link: "#",
                    technologies: []
                }
            ]
        },
        {
            title: "Mobile Apps",
            description: "Cross-platform mobile applications.",
            projects: [
                {
                    title: "Coming Soon",
                    description: "Mobile applications are under development.",
                    image: "../../../assets/images/projects/coming-soon.png",
                    link: "#",
                    technologies: []
                }
            ]
        }
    ]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className="portfolio-container">
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={pageTitle}
                    idx={15}
                />
            </h1>
            {projectCategories.map((category, index) => (
                <section key={index} className="portfolio-section">
                    <h2>{category.title}</h2>
                    <p className="section-description">{category.description}</p>
                    
                    <Swiper
                        modules={[Navigation, Pagination, EffectCoverflow]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        allowTouchMove={true}
                        watchSlidesProgress={true}
                        slideToClickedSlide={true}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        navigation={false}
                        className="project-swiper"
                    >
                        {category.projects.map((project, projectIndex) => (
                            <SwiperSlide key={projectIndex}>
                                <div className="project-card">
                                    <div className="project-image">
                                            <video 
                                                src={project.image} 
                                                autoPlay 
                                                loop 
                                                muted 
                                                playsInline
                                                title={project.title}
                                                className="project-video"
                                            />
                                    </div>
                                    <div className="project-info">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        {project.technologies.length > 0 && (
                                            <div className="project-technologies">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                                ))}
                                            </div>
                                        )}
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" 
                                           className={project.link === "#" ? "disabled-link" : ""}>
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            ))}
        </div>
    )
}

export default Projects;
