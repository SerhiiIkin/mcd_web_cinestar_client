import { linksSocialContact } from '@constants/constants';

import Title from './Title';

import SectionLayout from '@layouts/SectionLayout';

const SocialContact = () => {
    return (
        <SectionLayout classNameContainer="grid gap-8">
            <article>
                <Title type="h3" className="text-32 pb-5">
                    HAR DU EN IDÉ I TANKERNE? LAD OS STARTE DIT PROJEKT SAMMEN
                </Title>
                <Title type="h5" className="text-secondary font-quicksand">
                    Cinestar Studio
                </Title>
                <a href="tel:+123345789">
                    <Title
                        type="h5"
                        className="text-secondary font-quicksand duration-700 xl:hover:text-white"
                    >
                        +123-456-789
                    </Title>
                </a>
                <a href="mailto:hello@awesomesite.com">
                    <Title
                        type="h5"
                        className="text-secondary font-quicksand duration-700 xl:hover:text-white"
                    >
                        hello@awesomesite.com
                    </Title>
                </a>
            </article>
            <ul className="flex flex-wrap justify-center gap-4">
                {linksSocialContact.map((link) => (
                    <li key={link.id}>
                        <a
                            href={link.href}
                            target="_blank"
                            className="font-cormorant hover:xl:text-secondary text-2xl font-bold uppercase duration-700"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </SectionLayout>
    );
};

export default SocialContact;
