import { Swiper, SwiperSlide } from 'swiper/react';

import { portfolioImages } from '@constants/constants';
import { A11y, Navigation, Pagination } from 'swiper/modules';

import ChangeSlideButton from './ChangeSlideButton';

const PortfolioCarousel = () => {
    return (
        <div className="relative w-screen">
            <Swiper
                modules={[Navigation, A11y, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                speed={200}
                grabCursor
                loop={portfolioImages.length > 1}
                navigation={{
                    prevEl: '.btn-prev',
                    nextEl: '.btn-next',
                }}
                pagination={{ clickable: true }}
                className='portfolio-swiper'
            >
                {portfolioImages.map((image) => (
                    <SwiperSlide key={image.id} className="w-full">
                        <img
                            className="aspect-video w-full object-cover"
                            src={image.src}
                            alt={image.alt}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <ChangeSlideButton direction="prev" />
            <ChangeSlideButton direction="next" />
        </div>
    );
};

export default PortfolioCarousel;
