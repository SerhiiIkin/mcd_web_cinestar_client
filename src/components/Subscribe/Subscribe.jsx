import SectionLayout from '@layouts/SectionLayout';

import Bg from '@components/Bg';
import Title from '@components/Title';
import SubscribeForm from './SubscribeForm';

const Subscribe = () => {
    return (
        <SectionLayout classNameSection="relative ">
            <article className="relative z-10">
                <Title
                    type="h5"
                    className="text-secondary font-quicksand text-left font-medium pb-10"
                >
                    EN BLOG, DER KAN INSPIRERE OG HJÆLPE DIG
                </Title>
                <p className='text-xl pb-8'>
                    Få de nyeste opdateringer, tips og indsigter direkte i din
                    indbakke. Vores blog deler viden, inspiration og historier,
                    der kan hjælpe dig med at tage dine projekter til det næste
                    niveau.
                </p>
                <SubscribeForm />
            </article>
            <Bg img="/liquifer.png" />
        </SectionLayout>
    );
};

export default Subscribe;
