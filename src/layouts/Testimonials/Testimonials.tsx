import React from 'react'
import './Testimonials.css'

type Props = {}

const Testimonials = (props: Props) => {
    return (
        <section className='testimonials-section'>

            <h2 className='title'>Testimonials</h2>

            <ul className='testimonials'>
                <li className='testimonial'>
                    <div className="testimonial-card">
                        <p>"This gallery is absolutely stunning! The parallax effect adds such an immersive quality to the images. I found myself scrolling through multiple times just to experience the smooth transitions and beautiful photography."</p>
                        <p className="author">Sarah Mitchell, Photography Enthusiast</p>
                    </div>
                </li>
                <li className='testimonial'>
                    <div className="testimonial-card">
                        <p>"This gallery is absolutely stunning! The parallax effect adds such an immersive quality to the images. I found myself scrolling through multiple times just to experience the smooth transitions and beautiful photography."</p>
                        <p className="author">Sarah Mitchell, Photography Enthusiast</p>
                    </div>
                </li>
                <li className='testimonial'>
                    <div className="testimonial-card">
                        <p>"Alex understands brand storytelling like no one else."</p>
                        <p className="author">— Founder, TravelCo</p>
                    </div>
                </li>
            </ul>

        </section>
    )
}

export default Testimonials