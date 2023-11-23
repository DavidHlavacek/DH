import './index.scss'
import LogoPng from '../../../assets/images/logo.png'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsap.registerPlugin()

        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 0,
        })
       
        
        gsap.fromTo(solidLogoRef.current, {
            opacity: 0,
        }, {
            opacity: 0.6,
            delay: 4,
            duration: 2,
        })
    },[])

    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoPng} alt="logo" />
            <svg
                width="559pt"
                height="897pt"
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="42 15 559 897"
                className='svg-container'
            >
                <g
                    className="svg-container"
                    transform="translate(0 404) scale(.1145 -.1145)"
                    fill="none"
                >
                    <path
                        ref={outlineLogoRef}
                        stroke="#ffd700"
                        stroke-width="5"
                        fill="none"
                        d="m370 1620 0-1400 423 0c232 0 473 5 536 11 551 51 881 389 993 1017 30 169 32 533 5 712-99 640-438 1002-984 1049-65 6-310 11-545 11l-428 0 0-1400zm922 859c84-18 182-75 239-138 137-153 197-414 186-799-8-272-46-431-139-579-49-78-104-128-182-164-83-39-145-49-302-49l-134 0 0 870 0 870 140 0c76 0 163-5 192-11zm1438-859 0-1400 305 0 305 0 0 565 0 565 345 0 345 0 0-565 0-565 300 0 300 0 2 953c2 523 2 1107 1 1297-1 190-3 391-3 448l0 102-300 0-300 0-2-572-3-573-342-3-343-2 0 575 0 575-305 0-305 0 0-1400z"
                    />
                </g>
            </svg>
        </div>
    )
}

export default Logo
