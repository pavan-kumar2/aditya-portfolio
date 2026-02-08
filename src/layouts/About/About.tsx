import React from 'react';
import './About.css';
import { images } from '../../utils/image';

const About = () => {
    return (
        <section className='about-section'>
            <h2 className='title'>About Me</h2>
            <p className='description'>
                Hi, I’m Aditya — a professional photographer who loves capturing real moments and genuine emotions. I work across weddings, fashion, and travel photography, helping people and brands tell their stories through clean, natural, and high-quality imagery. I believe great photos come from trust, comfort, and a shared creative vision.
            </p>

            <ul className='social-link'>
                <li>
                    <a href="https://www.instagram.com/aditya_photography/" target="_blank" rel="noopener noreferrer">
                        <img src={images.instagramLogo} alt="instagram" />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/aditya.photography" target="_blank" rel="noopener noreferrer">
                        <img src={images.whatsappLogo} alt="whatsapp" />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default About