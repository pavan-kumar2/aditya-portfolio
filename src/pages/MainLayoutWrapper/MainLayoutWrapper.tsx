import React from 'react'
import Slider from '../../layouts/Slider/Slider'
import About from '../../layouts/About/About'
import Testimonials from '../../layouts/Testimonials/Testimonials'

type Props = {}

const MainLayoutWrapper = (props: Props) => {
    return (
        <>
            <Slider />
            <About />
            <Testimonials />
        </>
    )
}

export default MainLayoutWrapper