import { Swiper, SwiperSlide } from 'swiper/react';

import { portfolioImages } from '@constants/constants';
import { A11y, Navigation, Pagination } from 'swiper/modules';

import ChangeSlideButton from './ChangeSlideButton';

import SectionLayout from '@layouts/SectionLayout';

const PortfolioCarousel = () => {
    return (
        <div className="relative overflow-hidden">
            <Swiper
                modules={[Navigation, A11y, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                speed={200}
                grabCursor
                loop
                navigation={{
                    prevEl: '.btn-prev',
                    nextEl: '.btn-next',
                }}
                pagination={{ clickable: true }}
                className="portfolio-swiper"
            >
                {portfolioImages.map((image) => (
                    <SwiperSlide key={image.id}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="h-auto w-full"
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
