import React from 'react'
import './FloatingBtn.css';
import { images } from '../../utils/image';

type Props = {}

const FloatingBtn = (props: Props) => {
    return (
        <button className='floating-btn'>
            <a href="https://wa.me/919876543210">
                <img src={images.whatsappLogo} alt="Contact Us" />
            </a>
        </button>
    )
}

export default FloatingBtn