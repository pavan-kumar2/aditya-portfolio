import { useRef } from 'react'
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// import "./Slider.css";
import "swiper/css";

import { images } from "../../utils/image";

type Props = {}

const dummy_data = [
    {
        id: 1,
        text: "This gallery is absolutely stunning! The parallax effect adds such an immersive quality to the images. I found myself scrolling through multiple times just to experience the smooth transitions and beautiful photography.",
        author: "Sarah Mitchell, Photography Enthusiast"
    },
    {
        id: 2,
        text: "Aditya's work is truly exceptional. The way he captures moments and emotions is unparalleled. I highly recommend his photography services to anyone looking for high-quality and authentic images.",
        author: "Michael Johnson, Professional Photographer"
    },
    {
        id: 3,
        text: "I had the pleasure of working with Aditya for my wedding, and I couldn't be happier with the results. He made us feel comfortable and captured every special moment beautifully. The photos are timeless and will be cherished forever.",
        author: "Emily Davis, Bride"
    },
    {
        id: 4,
        text: "Aditya's photography is a true work of art. His attention to detail and ability to capture the essence of a moment is remarkable. I am beyond impressed with the quality of his work and would highly recommend him to anyone in need of a talented photographer.",
        author: "David Wilson, Art Director"
    }
]
const Testimonials = (props: Props) => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    return (
        <section className='testimonials-section'>
            <h2 className='title'>Testimonials</h2>

            <div className="slider-wrapper">

                <button ref={prevRef} className="nav-btn prev">
                    <img src={images.angleLeftIcon} alt="Previous" />
                </button>

                <button ref={nextRef} className="nav-btn next">
                    <img src={images.angleRightIcon} alt="Next" />
                </button>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={3}
                    spaceBetween={20}
                    loop
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => {
                        const navigation = swiper.params.navigation;
                        // ✅ Type-safe navigation binding
                        if (navigation && typeof navigation !== "boolean") {
                            navigation.prevEl = prevRef.current;
                            navigation.nextEl = nextRef.current;

                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    }}
                >
                    {
                        dummy_data.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="testimonial-card">
                                    <p>"{testimonial.text}"</p>
                                    <p className="author">{testimonial.author}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials