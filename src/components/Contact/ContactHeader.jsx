import { useContext } from 'react';

import ContactContextProvider from '@context/ContactContext';

import Title from '@components/Title';

const ContactHeader = () => {
    const { title, description } = useContext(ContactContextProvider);

    return (
        <article>
            <Title
                type="h5"
                className="text-secondary font-quicksand text-left"
            >
                KONTAKT
            </Title>
            <Title type="h3" className="pb-5 text-left">
                {title}
            </Title>
            <p className="pb-5 text-xl">{description}</p>
        </article>
    );
};

export default ContactHeader;
