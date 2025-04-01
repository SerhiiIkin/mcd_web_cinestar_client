import Service from './Service';

import SectionLayout from '@layouts/SectionLayout';

import LiquiferBg from '@components/LiquiferBg';
import Title from '@components/Title';
import { dataServices } from '@constants/constants';

const Services = () => {
    return (
        <SectionLayout
            classNameSection="py-25 relative"
            classNameContainer="grid gap-8 px-5"
        >
            <article className="grid gap-2">
                <Title type="h5" className="text-secondary font-quicksand">
                    SERVICE
                </Title>
                <Title type="h3">HVILKEN SERVICE TILBYDER VI ?</Title>
            </article>
            {dataServices().map((service) => (
                <Service key={service.id} service={service} />
            ))}
            <LiquiferBg />
        </SectionLayout>
    );
};

export default Services;
