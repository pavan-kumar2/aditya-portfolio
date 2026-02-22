import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "./Slider.css";

import { images } from "../../utils/image";

// ✅ Correct Vite image import
import forest from "../../assets/images/forest-whispers.jpg";

const Slider = () => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <section className="hero-section">
            <div className="slider-wrapper">
                {/* Custom navigation buttons */}
                <button ref={prevRef} className="nav-btn prev">
                    <img src={images.angleLeftIcon} alt="Previous" />
                </button>

                <button ref={nextRef} className="nav-btn next">
                    <img src={images.angleRightIcon} alt="Next" />
                </button>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
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
                    <SwiperSlide>
                        <img src={forest} alt="Slide 1" className="slider-img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={forest} alt="Slide 2" className="slider-img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={forest} alt="Slide 3" className="slider-img" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

    );
};

export default Slider;
