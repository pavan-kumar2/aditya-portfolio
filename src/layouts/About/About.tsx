import React from 'react';
import './About.css';
import { images } from '../../utils/image';

const About = () => {
    const contactInfo = [
        { label: 'Email', value: 'aditya@photography.com', icon: '✉️', href: 'mailto:aditya@photography.com' },
        { label: 'Phone', value: '+91 98765 43210', icon: '📱', href: 'tel:+919876543210' },
        { label: 'Location', value: 'India', icon: '📍' },
    ];

    const socialLinks = [
        { name: 'Instagram', url: 'https://www.instagram.com/aditya_photography/', icon: images.instagramLogo },
        { name: 'WhatsApp', url: 'https://wa.me/919876543210', icon: images.whatsappLogo },
    ];

    return (
        <section className='about-section'>
            <div className='about-container'>
                <div className='about-header'>
                    <h2 className='title'>About Me</h2>
                    <div className='header-line'></div>
                </div>

                <p className='description'>
                    Hi, I'm Aditya — a professional photographer who loves capturing real moments and genuine emotions. I work across weddings, fashion, and travel photography, helping people and brands tell their stories through clean, natural, and high-quality imagery. I believe great photos come from trust, comfort, and a shared creative vision.
                </p>

                <div className='contact-info'>
                    <h3>Get In Touch</h3>
                    <div className='contact-details'>
                        {contactInfo.map((info, index) => (
                            <div key={index} className='contact-item'>
                                <span className='contact-icon'>{info.icon}</span>
                                <div className='contact-content'>
                                    <span className='contact-label'>{info.label}</span>
                                    {info.href ? (
                                        <a href={info.href} className='contact-value'>
                                            {info.value}
                                        </a>
                                    ) : (
                                        <span className='contact-value'>{info.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='social-section'>
                    <h3>Follow Me</h3>
                    <ul className='social-link'>
                        {socialLinks.map((social, index) => (
                            <li key={index}>
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={social.name}
                                    className='social-icon-link'
                                >
                                    <img src={social.icon} alt={social.name} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};


export default About;