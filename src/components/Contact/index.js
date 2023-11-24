import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                `service_ucny8yg`,
                `template_uupi4pn`,
                refForm.current,
                `OXIQD_ou_WzGZJMST`
            )
            .then (
                () => {
                    alert('Message sent successfully!')
                    window.location.reload(false)
                },
                (error) => {
                    alert("Failed to send message, please try again!")
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={[
                                'C',
                                'o',
                                'n',
                                't',
                                'a',
                                'c',
                                't',
                                ' ',
                                'm',
                                'e',
                            ]}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Thank you for visiting! Let's connect to explore
                        opportunities for collaboration and growth! Whether you
                        have a project in mind or just want to connect, I'm
                        eager to hear from you. Feel free to reach out through
                        the contact form below!
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail} method='POST'> 
                            <ul>
                                <li className="half">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="cube-transition"></Loader>
        </>
    )
}

export default Contact
