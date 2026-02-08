import React from 'react'
import './Gallery.css'
import forest from "../../assets/images/forest-whispers.jpg";


type Props = {}

const Gallery = (props: Props) => {
    return (
        <div className='gallery-container'>

            <div className="card">
                <img src={forest} alt="Forest Whispers" />
            </div>
            <div className="card">
                <img src={forest} alt="Forest Whispers" />
            </div>
            <div className="card">
                <img src={forest} alt="Forest Whispers" />
            </div>
            <div className="card">
                <img src={forest} alt="Forest Whispers" />
            </div>
            <div className="card">
                <img src={forest} alt="Forest Whispers" />
            </div>
            <div className="card">
                <img src={forest} alt="Forest Whispers" />
            </div>
            <div className="card">
                <img src={forest} alt="Forest Whispers" />
            </div>
        </div>
    )
}

export default Gallery