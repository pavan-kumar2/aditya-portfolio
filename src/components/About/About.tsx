import React from 'react';
import './About.css';

const imag = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.7.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202025%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23000000'%20d='M48%2064C21.5%2064%200%2085.5%200%20112c0%2015.1%207.1%2029.3%2019.2%2038.4L236.8%20313.6c11.4%208.5%2027%208.5%2038.4%200L492.8%20150.4c12.1-9.1%2019.2-23.3%2019.2-38.4c0-26.5-21.5-48-48-48L48%2064zM0%20176L0%20384c0%2035.3%2028.7%2064%2064%2064l384%200c35.3%200%2064-28.7%2064-64l0-208L294.4%20339.2c-22.8%2017.1-54%2017.1-76.8%200L0%20176z'/%3e%3c/svg%3e"

const About = () => {
    return (
        <section className='about-section'>
            <h2 className='title'>About Me</h2>
            <p className='description'>
                Hi, I’m Aditya — a professional photographer who loves capturing real moments and genuine emotions. I work across weddings, fashion, and travel photography, helping people and brands tell their stories through clean, natural, and high-quality imagery. I believe great photos come from trust, comfort, and a shared creative vision.
            </p>

            <ul>
                <li>
                    <a href="https://www.instagram.com/aditya_photography/" target="_blank" rel="noopener noreferrer">
                        <img src={imag} alt="instagram" />
                    </a>
                    <a href="https://www.facebook.com/aditya.photography" target="_blank" rel="noopener noreferrer">
                        <img src={imag} alt="facebook" />
                    </a>
                    <a href="https://www.youtube.com/@adityaphotography" target="_blank" rel="noopener noreferrer">
                        <img src={imag} alt="youtube" />
                    </a>
                    <a href="https://www.whatsapp.com/@adityaphotography" target="_blank" rel="noopener noreferrer">
                        <img src={imag} alt="whatsapp" />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default About