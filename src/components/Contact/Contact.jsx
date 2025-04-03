import { useContext } from 'react';

import ContactHeader from './ContactHeader';
import ContactInfo from './ContactInfo';

import SectionLayout from '@layouts/SectionLayout';

import ContactContextProvider from '@context/ContactContext';

import Bg from '@components/Bg';
import ContactForm from '@components/ContactForm';

const Contact = () => {
    const { isHomePage } = useContext(ContactContextProvider);

    return (
        <SectionLayout
            classNameContainer="grid gap-8"
            classNameSection="relative"
        >
            <ContactHeader />
            <ContactInfo />
            <ContactForm />
            {isHomePage && <Bg img="/studie2.jpg" className="opacity-20" />}
        </SectionLayout>
    );
};

export default Contact;
