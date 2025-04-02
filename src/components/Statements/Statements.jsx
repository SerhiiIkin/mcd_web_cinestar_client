import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';

import { A11y } from 'swiper/modules';

import Statement from './Statement';

import DataHandleLayout from '@layouts/DataHandleLayout';
import SectionLayout from '@layouts/SectionLayout';

import Title from '@components/Title';

import { axiosGetData } from '@utils/axios';

const Statements = () => {
    const data = useQuery({
        queryKey: ['statements'],
        queryFn: () =>
            axiosGetData({
                title: 'reviews',
                role: 'user',
            }),
    });

    return (
        <SectionLayout classNameSection="pb-0">
            <Title type="h5" className="text-secondary">
                UDTALELSER
            </Title>
            <Title type="h3" className="pb-5 break-words">
                HVAD SIGER VORES SAMARBEJDSPARTNERE OM OS?
            </Title>
            <p className="text-18 pb-3 text-center font-medium">
                “Cinestar er en fantastisk samarbejdspartner, der formår at
                kombinere kreativitet med professionalisme. Deres evne til at
                skabe unikke og engagerende produktioner er imponerende, og
                resultatet taler altid for sig selv.”
            </p>
            <DataHandleLayout
                data={data}
                SkeletonCount={5}
                emptyText="Det er ikke udtalelser endnu"
                className="relative"
            >
                <Swiper
                    modules={[A11y]}
                    spaceBetween={-90}
                    slidesPerView="auto"
                    centeredSlides={true}
                    speed={200}
                    loop={data.length > 1}
                    className='statements-swiper'
                >
                    {data.data &&
                        data.data.map((statement) => (
                            <SwiperSlide
                                key={statement._id}
                                className=""
                            >
                                <Statement statement={statement} />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </DataHandleLayout>
        </SectionLayout>
    );
};

export default Statements;
