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

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const pageTitle = [
        'M',
        'y',
        ' ',
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
                    title: "Coming Soon",
                    description: "More websites are in development.",
                    image: "../../../assets/images/projects/portfolio.png",
                    link: "#",
                    technologies: ["React", "SCSS", "JavaScript"]
                }
                // Add more website projects
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
                        navigation={true}
                        className="project-swiper"
                    >
                        {category.projects.map((project, projectIndex) => (
                            <SwiperSlide key={projectIndex}>
                                <div className="project-card">
                                    <div className="project-image">
                                        <img src={project.image} alt={project.title} />
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
