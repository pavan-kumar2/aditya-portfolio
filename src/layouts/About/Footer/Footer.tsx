import React from 'react'
import './Footer.css'
import { images } from '../../../utils/image'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer>
            <ul className='social-links'>
                <li>
                    <a href="">
                        <img src={images.instagramWhiteIcon} alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={images.whatsappWhiteIcon} alt="WhatsApp" />
                    </a>
                </li>
            </ul>
            <p className='copyright'>
                © 2025 Aditya Deshmukh Photography. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer