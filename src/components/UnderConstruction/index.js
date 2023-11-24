import React from 'react';
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';
import './index.scss';
import Logo from '../../assets/images/logo.png';
import GithubIcon from '../../assets/icons/github.png'
import LinkedinIcon from '../../assets/icons/linkedin.png'
import GmailIcon from '../../assets/icons/gmail.png'
import GoogleIcon from '../../assets/icons/google.png'
import CV from '../../assets/files/cv.pdf'



const UnderConstructionPage = () => (
  <div class="under-construction">
  <UnderConstruction
    background={{
      textColor: '#fff',
      // overlay: {
      //   color: '#000',
      //   opacity: '.5'
      // }
    }}
    logo={{
      src: Logo,
      alt: 'logo'
    }}
    title={{
      text: 'Coming Soon!'
    }}
    description={{
      text: 'This page is under construction.',
      style: {
        maxWidth: '440px',
      }
    }}
    subscribe={{
      placeholder: 'Enter your email',
      buttonText: 'Subscribe',
      onSubmit: (value) => {
        
      }
    }}
    links={[
      {
        url: 'https://www.linkedin.com/in/davihlav',
        image: LinkedinIcon,
      },
      {
        url: 'https://www.github.com/DavidHlavacek',
        image: GithubIcon,
      },
      {
        url: 'mailto:davi.hlav@example.com',
        image: GoogleIcon,
      },
    ]}
    />

   <a href={CV} download="CV"><button class="flat-button">Download Curriculum Vitae</button></a>

  </div>
);

export default UnderConstructionPage;