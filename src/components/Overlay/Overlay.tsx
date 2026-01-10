import React from 'react'

type Props = {}

const Overlay = (props: Props) => {

    const closeOverlay = (id: string) => () => {
        const overlay = document.getElementById(id + 'Overlay')
    }

    return (
        <div className="overlay active" id="testimonialsOverlay">
            <div className="overlay-content">
                <button className="close-btn" onClick={closeOverlay('testimonials')}>×</button>
                <h2>Testimonials</h2>

                <div className="testimonial-card">
                    <p>"This gallery is absolutely stunning! The parallax effect adds such an immersive quality to the images. I found myself scrolling through multiple times just to experience the smooth transitions and beautiful photography."</p>
                    <p className="author">Sarah Mitchell, Photography Enthusiast</p>
                </div>

                <div className="testimonial-card">
                    <p>"As a web designer, I'm always looking for inspiration. This gallery perfectly balances aesthetics with functionality. The responsive design works flawlessly on all my devices, and the user experience is simply outstanding."</p>
                    <p className="author">James Rodriguez, Web Designer</p>
                </div>

                <div className="testimonial-card">
                    <p>"I've seen many photo galleries online, but none compare to this one. The attention to detail, the smooth animations, and the curated selection of images make this a truly memorable experience. Highly recommended!"</p>
                    <p className="author">Emily Chen, Creative Director</p>
                </div>

                <div className="testimonial-card">
                    <p>"The combination of stunning visuals and innovative technology creates something truly special. Each image feels alive with the parallax movement. It's like stepping into the photographs themselves."</p>
                    <p className="author">Michael Thompson, Nature Photographer</p>
                </div>
            </div>
        </div>
    )
}

export default Overlay